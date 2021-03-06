angular.module('starter.services', [])

    .factory('database', function($q) {
        // Declare local databases
        var db = new PouchDB('schedule');
        var odb = new PouchDB('other');
        var mydb = new PouchDB('my-schedule');

        var remoteServer = 'http://130.238.15.131:5984';
        var remoteSchedule = remoteServer + '/schedule';
        var remoteOther = remoteServer + '/other';

        var myScheduleListeners = []; // Used to notify when My Schedule has changed

        function notifyMyScheduleListeners() {
            for (var i = 0; i < myScheduleListeners.length; i++) {
                myScheduleListeners[i]();
            }
        }

        // Used to verify that everything is downloaded and constructed before returning data from the service
        var constructPromise = db.replicate.from(remoteSchedule).then(function(result) {
            console.log("Everything loaded from server database! Now constructing schedule...");
            return constructFromDB();
        }).catch(function(error) { // Network error, hopefully...
            console.log("Schedule database download failed, using local cache instead.");
            return constructFromDB();
        });

        // Used to verify that everything is downloaded before returning data from the service
        var replicationHandlerODB = odb.replicate.from(remoteOther).catch(function(error) {
            // Network error, hopefully...
            console.log("Other database download failed, using local cache instead.");
        });

        // Declare arrays to store data types
        var sessions = [];
        var speakers = [];
        var talks = [];
        var papers = [];
        var posters = [];
        var keynotes = [];
        var commonEntries = [];
        var generalEntries = [];
        var panels = [];
        var workshops = [];
        var unconferences = [];
        var industryTalks = [];
        var industryTalksSessions = [];
        var sponsors = [];
        var supporters = {diamond: [], platinum: [], gold: [], silver: [], additional: []};

        // Array for all entries to be displayed in the schedule
        var scheduleEntries = [];

        // Constructs the data from the database into convenient arrays of objects
        function constructFromDB() {
            return db.allDocs({
                include_docs: true
            }).then(function(result) {
                return result.rows.map(function (row) {
                    return row.doc;
                });
            }).then(function(result) {
                // Reset arrays that store data types
                sessions = [];
                speakers = [];
                talks = [];
                papers = [];
                posters = [];
                keynotes = [];
                commonEntries = [];
                generalEntries = [];
                panels = [];
                workshops = [];
                unconferences = [];
                industryTalks = [];
                industryTalksSessions = [];
                sponsors = [];
                supporters = {diamond: [], platinum: [], gold: [], silver: [], additional: []};

                scheduleEntries = [];

                // Add items to the correct arrays
                for (var i = 0; i < result.length; i++) {
                    var item = result[i];

                    // Copy the id number to a new property for pretty url printing etc
                    item.id = _.trimLeft(item._id.substr(4), '0');

                    switch(item._id.substr(0, 4)) {
                        case 'sssn':
                            sessions.push(item);
                            break;
                        case 'spkr':
                            speakers.push(item);
                            break;
                        case 'talk':
                            talks.push(item);
                            break;
                        case 'papr':
                            papers.push(item);
                            break;
                        case 'pstr':
                            posters.push(item);
                            break;
                        case 'note':
                            keynotes.push(item);
                            break;
                        case 'cmmn':
                            commonEntries.push(item);
                            break;
                        case 'gnrl':
                            generalEntries.push(item);
                            break;
                        case 'panl':
                            panels.push(item);
                            break;
                        case 'indt':
                            industryTalks.push(item);
                            break;
                        case 'inds':
                            industryTalksSessions.push(item);
                            break;
                        case 'wksp':
                            workshops.push(item);
                            break;
                        case 'uncf':
                            unconferences.push(item);
                            break;
                        case 'supp':
                            switch(item.tier) {
                                case 'diamond':
                                    supporters.diamond.push(item);
                                    break;
                                case 'platinum':
                                    supporters.platinum.push(item);
                                    break;
                                case 'gold':
                                    supporters.gold.push(item);
                                    break;
                                case 'silver':
                                    supporters.silver.push(item);
                                    break;
                                case 'additional':
                                    supporters.additional.push(item);
                                    break;
                                default:
                                    // console.log("Unkown supporter tier for " + item.name + ": " + item.tier);
                            }
                            break;
                        case 'spsr':
                            sponsors.push(item);
                            break;
                        default:
                            // console.log("Unknown ID: " + item._id);
                    }
                }

                // Takes an array of ids and replaces those with matching objects from the array 'objects'
                function replaceIdsWithObjects(ids, objects) {
                    return replaceIdsWithObjectsFunc(ids, objects, function(object){});
                }

                // Takes an array of ids and replaces those with matching objects from the array 'objects' as well as executes objFunc on each object
                function replaceIdsWithObjectsFunc(ids, objects, objFunc) {
                    var matchedObjects = [];

                    for (var i = 0; i < ids.length; i++) {
                        var id = ids[i];
                        var matchedObject = _.find(objects, _.matchesProperty('_id', id));

                        if(matchedObject === undefined) {
                            // console.log("Failed to find id " + id + "!");
                        } else {
                            // console.log("Found id " + id + "!");
                            objFunc(matchedObject);
                            matchedObjects.push(matchedObject);
                        }
                    }

                    return matchedObjects;
                }

                // Makes sure the start and end date objects are working properly
                function fixDates(entry) {
                    entry.startDate = new Date(Date.parse(entry.startDate));
                    entry.endDate = new Date(Date.parse(entry.endDate));
                }

                // Initialize arrays to store and activities, papers and posters for speakers
                for (var i = 0; i < speakers.length; i++) {
                    speakers[i].activities = [];
                    speakers[i].papers = [];
                    speakers[i].posters = [];
                }

                // Add authors to papers
                for (var i = 0; i < papers.length; i++) {
                    var paper = papers[i];

                    paper.authors = replaceIdsWithObjects(paper.authors, speakers);

                    // Add the paper to its authors' papers arrays
                    for (var j = 0; j < paper.authors.length; j++) {
                        paper.authors[j].papers.push(paper);
                    }
                }

                // Add authors to posters
                for (var i = 0; i < posters.length; i++) {
                    var poster = posters[i];

                    poster.authors = replaceIdsWithObjects(poster.authors, speakers);

                    // Add the poster to its authors' posters arrays
                    for (var j = 0; j < poster.authors.length; j++) {
                        poster.authors[j].posters.push(poster);
                    }
                }

                // Add speakers to talks and talks to sessions
                for (var i = 0; i < sessions.length; i++) {
                    var session = sessions[i];
                    var minDate = 0;
                    var maxDate = 0;
                    var talkObjects = [];
                    var sessionSpeakers = []; // Speakers for all the talks in a session

                    for (var j = 0; j < session.talks.length; j++) {
                        var talkObject = _.find(talks, _.matchesProperty('_id', session.talks[j]));

                        if (talkObject === undefined) {
                            // console.log("Failed to find id " + session.talks[j] + "!");
                        } else {
                            // console.log("Found id " + session.talks[j] + "!");
                            talkObjects.push(talkObject);
                            talkObject.startDate = new Date(Date.parse(talkObject.startDate));
                            talkObject.endDate = new Date(Date.parse(talkObject.endDate));

                            // Set location of session to that of the talk (Assuming that all talks should have the same location)
                            session.location = talkObject.location;

                            minDate = (talkObject.startDate < minDate || minDate === 0) ? talkObject.startDate : minDate;
                            maxDate = (talkObject.endDate > maxDate) ? talkObject.endDate : maxDate;

                            talkObject.papers = replaceIdsWithObjects(talkObject.papers, papers); // This should check that all these papers exist in the speakers paper arrays and give warning if not
                            talkObject.speakers = [];

                            // Add session ids to papers and speakers to the talk
                            for (var k = 0; k < talkObject.papers.length; k++) {
                                var paper = talkObject.papers[k];
                                paper.sessionID = sessions[i].id; // Add id of the papers session in which this paper will be presented in order to be able to link back to it
                                talkObject.speakers.push(paper.authors);
                            }

                            // Flatten the talk's list of speakers
                            talkObject.speakers = _.unique(_.flatten(talkObject.speakers, true)); // Put all unique speakers from all talks in a session
                            sessionSpeakers.push(talkObject.speakers);
                        }
                    }
                    session.talks = _.sortBy(talkObjects, "startDate");
                    session.startDate = new Date(minDate);
                    session.endDate = new Date(maxDate);
                    session.speakers = _.unique(_.flatten(sessionSpeakers, true)); // Put all unique speakers from all talks in a session

                    // Add this session to the speakers' activities arrays
                    angular.forEach(session.speakers, function(speaker) {
                        speaker.activities.push(session);
                    });
                }

                // Add speakers to industryTalks and industryTalks to industryTalksSessions
                for (var i = 0; i < industryTalksSessions.length; i++) {
                    var industryTalksSession = industryTalksSessions[i];
                    var minDate = 0;
                    var maxDate = 0;
                    var industryTalkObjects = [];
                    var industryTalksSessionSpeakers = []; // Speakers for all the industryTalks in a industryTalksSession

                    for (var j = 0; j < industryTalksSession.talks.length; j++) {
                        var industryTalkObject = _.find(industryTalks, _.matchesProperty('_id', industryTalksSession.talks[j]));

                        if (industryTalkObject === undefined) {
                            // console.log("Failed to find id " + industryTalksSession.talks[j] + "!");
                        } else {
                            // console.log("Found id " + industryTalksSession.talks[j] + "!");
                            industryTalkObjects.push(industryTalkObject);
                            industryTalkObject.startDate = new Date(Date.parse(industryTalkObject.startDate));
                            industryTalkObject.endDate = new Date(Date.parse(industryTalkObject.endDate));

                            // Set location of industryTalksSession to that of the industryTalk (Assuming that all industryTalks should have the same location)
                            industryTalksSession.location = industryTalkObject.location;

                            minDate = (industryTalkObject.startDate < minDate || minDate === 0) ? industryTalkObject.startDate : minDate;
                            maxDate = (industryTalkObject.endDate > maxDate) ? industryTalkObject.endDate : maxDate;

                            industryTalkObject.speakers = replaceIdsWithObjects(industryTalkObject.speakers, speakers);
                            industryTalksSessionSpeakers.push(industryTalkObject.speakers);
                        }
                    }
                    industryTalksSession.talks = _.sortBy(industryTalkObjects, "startDate");
                    industryTalksSession.startDate = new Date(minDate);
                    industryTalksSession.endDate = new Date(maxDate);
                    industryTalksSession.speakers = _.unique(_.flatten(industryTalksSessionSpeakers, true)); // Put all unique speakers from all talks in a session

                    // Add this industryTalksSession to the speakers' activities arrays
                    angular.forEach(industryTalksSession.speakers, function(speaker) {
                        speaker.activities.push(industryTalksSession);
                    });
                }

                // Fix dates and add speakers to keynotes
                angular.forEach(keynotes, function(keynote) {
                    keynote.speakers = replaceIdsWithObjectsFunc(keynote.speakers, speakers, function(speaker) {
                        speaker.activities.push(keynote);
                    });
                    fixDates(keynote);
                });

                // Fix dates and add speakers/organizers to workshops
                angular.forEach(workshops, function(workshop) {
                    workshop.speakers = replaceIdsWithObjectsFunc(workshop.speakers, speakers, function(speaker) {
                        speaker.activities.push(workshop);
                    });
                    fixDates(workshop);
                });

                // Fix dates and add panelists and moderators to panels
                angular.forEach(panels, function(panel) {
                    panel.moderators = replaceIdsWithObjectsFunc(panel.moderators, speakers, function(moderator) {
                        moderator.activities.push(panel);
                    });

                    panel.panelists = replaceIdsWithObjectsFunc(panel.panelists, speakers, function(panelist) {
                        panelist.activities.push(panel);
                    });

                    // Create array that contains both moderators and panelists for easy printing in the schedule
                    panel.speakers = panel.moderators.concat(panel.panelists);

                    fixDates(panel);
                });

                // Fix dates and add speakers to general entries
                angular.forEach(generalEntries, function(generalEntry) {
                    // Avoid errors if the general entry has no speakers
                    if (generalEntry.speakers == null) {
                        generalEntry.speakers = [];
                    }

                    generalEntry.speakers = replaceIdsWithObjectsFunc(generalEntry.speakers, speakers, function(speaker) {
                        speaker.activities.push(generalEntry);
                    });
                    fixDates(generalEntry);
                });

                // Fix dates of common entries
                for (var i = 0; i < commonEntries.length; i++) {
                    fixDates(commonEntries[i]);
                }

                // Fix dates of unconferences
                for (var i = 0; i < unconferences.length; i++) {
                    fixDates(unconferences[i]);
                }

                // Add entries to be shown in schedule to the array
                scheduleEntries.push(sessions);
                scheduleEntries.push(keynotes);
                scheduleEntries.push(commonEntries);
                scheduleEntries.push(generalEntries);
                scheduleEntries.push(workshops);
                scheduleEntries.push(panels);
                scheduleEntries.push(unconferences);
                scheduleEntries.push(industryTalksSessions);

                scheduleEntries = _.flatten(scheduleEntries);

                // Add booleans to keep track of whether entries are in "My Schedule" too
                var promises = [];
                angular.forEach(scheduleEntries, function(scheduleEntry) {
                    var promise = isInMyShedule(scheduleEntry).then(function (result) {
                        scheduleEntry.isInMySchedule = result;
                    });
                    promises.push(promise);
                });

                // Wait for all the isInMySchedule properties to be set
                // Remove this to speed up schedule loading time (not sure whether the DOM will always get updated though)
                return $q.all(promises).then(function() {
                    console.log("Schedule construction complete!");
                    return scheduleEntries;
                });
            }).catch(function(error) {
                console.log("Schedule construction failed! Error message: " + error);
            });
        }

        function isInMyShedule(entry) {
            return mydb.get(entry._id).then(function(doc) {
                return true;
            }).catch(function (error) {
                return false;
            });
        }

        function getMyScheduleEntries() {
            return mydb.allDocs().then(function(result) {
                return result.rows.map(function (row) {
                    return row.id;
                });
            }).then(function(ids) {
                var myScheduleEntries = [];
                for (var i = 0; i < ids.length; i++) {
                    var matchedEntry = _.find(scheduleEntries, _.matchesProperty('_id', ids[i]));

                    if (matchedEntry === undefined) { // if(matchedEntry) ?
                        // console.log("My schedule id '" + ids[i] + "' could not be found in schedule entries!")
                    } else {
                        myScheduleEntries.push(matchedEntry);
                    }
                }
                return myScheduleEntries;
            })
        }

        function forceAddToMySchedule(entry) {
            // console.log("Adding " + entry._id + " to My Schedule...");
            $q.when(mydb.put({_id: entry._id})).then(function(result) {
                // console.log("put() result: " + JSON.stringify(result));
                if(result.ok) {
                    entry.isInMySchedule = true;
                    notifyMyScheduleListeners();
                }
            }).catch(function(error) {
                if (error.status == 409) {
                    // console.log("Entry is already in My Schedule, nothing to do here.")
                } else {
                    // console.log("Failed to add entry to My Schedule. Error message: " + error);
                }
            });
        }

        return {
            getScheduleEntries: function() {
                return constructPromise.then(function(result) {
                    return scheduleEntries;
                }).catch(function(error) {
                    // console.log("getScheduleEntries error: " + error);
                });
            },
            getMyScheduleEntries: function() {
                return constructPromise.then(function(result) {
                    return getMyScheduleEntries();
                }).catch(function(error) {
                    // console.log("getMyScheduleEntries error: " + error);
                });
            },
            addToMySchedule: function(entry){ // Checks for collisions and adds entry to My Schedule if none were found
                // Check if entry collides with other entries in my schedule
                return constructPromise.then(function(result) {
                    return getMyScheduleEntries().then(function(result) {
                        var collisions = [];

                        for (var i = 0; i < result.length; i++) {
                            // If entry startdate is later than the other entry's startdate
                            if(entry.startDate > result[i].startDate) {
                                // If entry startdate is later than the other entry's startdate and also earlier than it's enddate
                                if (entry.startDate < result[i].endDate) {
                                    collisions.push(result[i]);
                                }
                            } else {
                                // If entry startdate is realier than the other entry's startdate and the entry's endDate is later than the other entry's startdate
                                if (entry.endDate > result[i].startDate) {
                                    collisions.push(result[i]);
                                }
                            }
                        }

                        // Macho one line collision detection.
                        // var col = (entry.startDate > result[i].startDate && entry.startDate < result[i].endDate) || (entry.startDate < result[i].startDate && entry.endDate > result[i].startDate);

                        if (collisions.length > 0) {
                            // console.log('Collision detected!');
                            entry.isInMySchedule = false;
                        } else {
                            forceAddToMySchedule(entry);
                        }

                        return collisions;
                    });
                }).catch(function(error) {
                    // console.log("addToMySchedule error: " + error);
                });
            },
            forceAddToMySchedule: function(entry) { // Adds entry to My Schedule without checking for collisions
                forceAddToMySchedule(entry);
            },
            removeFromMySchedule: function(entry){
                // console.log("Removing " + entry._id + " from My Schedule...");
                $q.when(mydb.get(entry._id)).then(function(doc) {
                    return mydb.remove(doc);
                }).then(function (result) {
                    // console.log("remove() result: " + JSON.stringify(result));
                    if(result.ok) {
                        entry.isInMySchedule = false;
                        notifyMyScheduleListeners();
                    }
                }).catch(function (error) {
                    // console.log("removeFromMySchedule error: " + error);
                });
            },
            isInMySchedule: function(entry) {
                return isInMyShedule(entry);
            },
            getSession: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(sessions, _.matchesProperty('id', id));
                });
            },
            getKeynote: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(keynotes, _.matchesProperty('id', id));
                });
            },
            getCommonEntry: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(commonEntries, _.matchesProperty('id', id));
                });
            },
            getGeneralEntry: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(generalEntries, _.matchesProperty('id', id));
                });
            },
            getWorkshop: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(workshops, _.matchesProperty('id', id));
                });
            },
            getPanel: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(panels, _.matchesProperty('id', id));
                });
            },
            getUnconference: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(unconferences, _.matchesProperty('id', id));
                });
            },
            getIndustryTalksSession: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(industryTalksSessions, _.matchesProperty('id', id));
                });
            },
            getPapers: function() {
                return constructPromise.then(function(result) {
                    return papers;
                });
            },
            getPosters: function() {
                return constructPromise.then(function(result) {
                    return posters;
                });
            },
            getSpeakers: function() {
                return constructPromise.then(function(result) {
                    return speakers;
                });
            },
            getSpeaker: function(id) {
                return constructPromise.then(function(result) {
                    return _.find(speakers, _.matchesProperty('id', id));
                });
            },
            getSponsors: function() {
                return constructPromise.then(function(result) {
                    return sponsors;
                });
            },
            getSupporters: function() {
                return constructPromise.then(function(result) {
                    return supporters;
                });
            },
            getOther: function(id){
                return replicationHandlerODB.then(function() {
                    return $q.when(odb.get(id)).then(function(result) {
                        return result;
                    });
                });
            },
            on: function(event, func) {
                switch(event) {
                    case "myScheduleChanged":
                        myScheduleListeners.push(func);
                }
            }
        };
    });