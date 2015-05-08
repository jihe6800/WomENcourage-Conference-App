angular.module('starter.services', [])

    .factory('database', function() {
        var db = new PouchDB('schedule');
        var activeEntry; // Will contain the currently active entry

        db.changes({
            since: 'now',
            live: true
        }).on('change', function() {
            console.log("Something changed in database!");
        });

        db.bulkDocs([{
            _id: 'sssn0001',
            title: "Papers Session 1: Computing to Assist Disabled Individuals or Older Adults",
            talks: ['talk0001', 'talk0002', 'talk0003']
        }, {
            _id: 'sssn0002',
            title: "Papers Session 2: Computation and Graphics",
            talks: ['talk0004', 'talk0005', 'talk0006']
        }, {
            _id: 'spkr001',
            firstName: "Camille",
            lastName: "Jeunet",
            papers: ['papr0001']
        }, {
            _id: 'spkr002',
            firstName: "Bernard",
            lastName: "N'Kaoua",
            papers: ['papr0001']
        }, {
            _id: 'spkr003',
            firstName: "Martin",
            lastName: "Hachet",
            papers: ['papr0001']
        }, {
            _id: 'spkr004',
            firstName: "Fabien",
            lastName: "Lotte",
            papers: ['papr0001']
        }, {
            _id: 'spkr005',
            firstName: "Lucile",
            lastName: "Dupuy",
            papers: ['papr0002']
        }, {
            _id: 'spkr006',
            firstName: "Hélène",
            lastName: "Sauzéon ",
            papers: ['papr0002']
        }, {
            _id: 'spkr007',
            firstName: "Charles",
            lastName: "Consel",
            papers: ['papr0002']
        }, {
            _id: 'spkr008',
            firstName: "Gillian",
            lastName: "Dowds",
            papers: ['papr0003']
        }, {
            _id: 'spkr009',
            firstName: "Maud",
            lastName: "Gibbons",
            papers: ['papr0004']
        }, {
            _id: 'spkr010',
            firstName: "Colm",
            lastName: "O'Riordan",
            papers: ['papr0004']
        }, {
            _id: 'spkr011',
            firstName: "Josephine",
            lastName: "Griffith",
            papers: ['papr0004']
        }, {
            _id: 'spkr012',
            firstName: "Martina",
            lastName: "Curran",
            papers: ['papr0005']
        }, {
            _id: 'spkr013',
            firstName: "Enda",
            lastName: "Howley",
            papers: ['papr0005']
        }, {
            _id: 'spkr014',
            firstName: "Jim",
            lastName: "Duggan",
            papers: ['papr0005']
        }, {
            _id: 'spkr015',
            firstName: "Camille",
            lastName: "Schreck",
            papers: ['papr0006']
        }, {
            _id: 'spkr016',
            firstName: "Damien",
            lastName: "Rohmer",
            papers: ['papr0006']
        }, {
            _id: 'spkr017',
            firstName: "Stefanie",
            lastName: "Hahmann",
            papers: ['papr0006']
        }, {
            _id: 'spkr018',
            firstName: "Marie-Paule",
            lastName: "Cani",
            papers: ['papr0006']
        }, {
            _id: 'talk0001',
            title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
            speakers: ['spkr001', 'spkr002', 'spkr003', 'spkr004'],
            papers: ['papr0001'],
            startDate: new Date(2015, 4, 19, 9, 0),
            endDate: new Date(2015, 4, 19, 10, 0)
        }, {
            _id: 'talk0002',
            title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
            speakers: ['spkr005', 'spkr006', 'spkr007'],
            papers: ['papr0002'],
            startDate: new Date(2015, 4, 19, 10, 0),
            endDate: new Date(2015, 4, 19, 11, 0)
        }, {
            _id: 'talk0003',
            title: 'Window to the Outside World: Bringing the outside in to housebound older adults in remote and rural areas',
            speakers: ['spkr008'],
            papers: ['papr0003'],
            startDate: new Date(2015, 4, 19, 11, 0),
            endDate: new Date(2015, 4, 19, 12, 0)
        }, {
            _id: 'talk0004',
            title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
            speakers: ['spkr009', 'spkr010', 'spkr011'],
            papers: ['papr0004'],
            startDate: new Date(2015, 4, 19, 13, 0),
            endDate: new Date(2015, 4, 19, 14, 0)
        }, {
            _id: 'talk0005',
            title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
            speakers: ['spkr012', 'spkr013', 'spkr014'],
            papers: ['papr0005'],
            startDate: new Date(2015, 4, 19, 14, 0),
            endDate: new Date(2015, 4, 19, 15, 0)
        }, {
            _id: 'talk0006',
            title: 'Interactively animating crumpling paper',
            speakers: ['spkr015', 'spkr016', 'spkr017', 'spkr018'],
            papers: ['papr0006'],
            startDate: new Date(2015, 4, 19, 15, 0),
            endDate: new Date(2015, 4, 19, 16, 0)
        }, {
            _id: 'papr0001',
            title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
            authors: ["Camille Jeunet", "Bernard N'Kaoua", 'Martin Hachet', 'Fabien Lotte']
        }, {
            _id: 'papr0002',
            title: 'Perceived Needs for Assistive Technologies in older adults and their caregivers',
            authors: ['Lucile Dupuy', 'Hélène Sauzéon', 'Charles Consel']
        }, {
            _id: 'papr0003',
            title: 'Predicting Mental-Imagery Based Brain-Computer Interface Performance from Psychometric Questionnaires',
            authors: ['Gillian Dowds']
        }, {
            _id: 'papr0004',
            title: 'Evolution of Coordinated Behaviour in Artificial Life Simulations',
            authors: ['Maud Gibbons', "Colm O'Riordan", 'Josephine Griffith']
        }, {
            _id: 'papr0005',
            title: 'An R-Based Framework for Implementing Large-Scale Spatial Models of Infectious Diseases',
            authors: ['Martina Curran', 'Enda Howley', 'Jim Duggan']
        }, {
            _id: 'papr0006',
            title: 'Interactively animating crumpling paper',
            authors: ['Camille Schreck', 'Damien Rohmer', 'Stefanie Hahmann', 'Marie-Paule Cani']
        }, {
            _id: 'note001',
            title: 'Keynote (Main Aula)',
            description: 'Despite our great expressive skills, we humans lack an easy way of conveying the 3D shapes we imagine, even more so for dynamic shapes that change over time. Over centuries we relied on drawing and sculpture to convey shapes. However, these tools require significant expertise and time investment, especially when one aims to describe complex or dynamic shapes. With the advent of virtual environments one would expect digital modeling to replace these traditional tools. Unfortunately, conventional techniques in the area have failed, since even trained computer artists still create with traditional media and only use the computer to reproduce already designed content.',
            speakers: ['spkr018'],
            startDate: new Date(2015, 4, 19, 8, 0),
            endDate: new Date(2015, 4, 19, 9, 0)
        }]);

        function getScheduleEntries() {
            return db.allDocs({
                include_docs: true
            }).then(function(result) {
                return result.rows.map(function (row) {
                    return row.doc;
                });
            }).then(function(result) {
                // Declare arrays to store entry types
                var scheduleEntries = [];
                var plainText = [];
                var sessions = [];
                var speakers = [];
                var talks = [];
                var papers = [];
                var posters = [];
                var carreerFair = [];
                var keynotes = [];
                var commonEntries = [];
                var specialEntries = [];
                var panels = [];
                var posterEvents = [];
                var industryTalks = [];
                var workshops = [];
                var caseStudies = [];
                var unconferences = [];

                // Add items to the correct arrays
                for (var i = 0; i < result.length; i++) {
                    var item = result[i];

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
                        case 'crfr':
                            carreerFair.push(item);
                            break;
                        case 'note':
                            keynotes.push(item);
                            break;
                        case 'cmmn':
                            commonEntries.push(item);
                            break;
                        case 'spcl':
                            specialEntries.push(item);
                            break;
                        case 'pnls':
                            panels.push(item);
                            break;
                        case 'ptre':
                            posterEvents.push(item);
                            break;
                        case 'inds':
                            industryTalks.push(item);
                            break;
                        case 'wksp':
                            workshops.push(item);
                            break;
                        case 'cstd':
                            caseStudies.push(item);
                            break;
                        case 'uncf':
                            unconferences.push(item);
                            break;
                        case 'plan':
                            plainText.push(item);
                            break;
                        default:
                            console.log("Unknown ID: " + item._id);
                    }
                }

                // Takes an array of ids and replaces those with matching objects from the array 'objects'
                function replaceIdsWithObjects(ids, objects) {
                    var matchedObjects = [];

                    for (var i = 0; i < ids.length; i++) {
                        var id = ids[i];
                        var matchedObject = _.find(objects, _.matchesProperty('_id', id));

                        if(matchedObject === undefined) {
                            console.log("ERROR: Failed to find id " + id + "!");
                        } else {
                            console.log("Found id " + id + "!");
                            matchedObjects.push(matchedObject);
                        }
                    }

                    return matchedObjects;
                }

                // Add papers to speakers
                for (var i = 0; i < speakers.length; i++) {
                    speakers[i].papers = replaceIdsWithObjects(speakers[i].papers, papers);
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
                            console.log("Failed to find id " + session.talks[j] + "!");
                        } else {
                            console.log("Found a talkObject " + session.talks[j] + "!");
                            talkObjects.push(talkObject);
                            talkObject.startDate = new Date(Date.parse(talkObject.startDate));
                            talkObject.endDate = new Date(Date.parse(talkObject.endDate));

                            minDate = (talkObject.startDate < minDate || minDate === 0) ? talkObject.startDate : minDate;
                            maxDate = (talkObject.endDate > maxDate) ? talkObject.endDate : maxDate;

                            talkObject.speakers = replaceIdsWithObjects(talkObject.speakers, speakers);
                            talkObject.papers = replaceIdsWithObjects(talkObject.papers, papers); // This should check that all these papers exist in the speakers paper arrays and give warning if not
                            sessionSpeakers.push(talkObject.speakers);
                        }
                    }
                    session.talks = talkObjects;
                    session.startDate = new Date(minDate);
                    session.endDate = new Date(maxDate);
                    session.speakers = [];

                    sessionSpeakers = _.unique(_.flatten(sessionSpeakers, true)); // Put all unique speakers from all talks in a session
                    for(var j = 0; j < sessionSpeakers.length; j++) {
                        session.speakers.push(sessionSpeakers[j].firstName + " " + sessionSpeakers[j].lastName);
                    }
                    session.speakers = session.speakers.join(', ');
                }

                // Add speakers to keynotes
                for (var i = 0; i < keynotes.length; i++) {
                    var keynote = keynotes[i];
                    keynote.speakers = replaceIdsWithObjects(keynote.speakers, speakers);
                    keynote.startDate = new Date(Date.parse(keynote.startDate));
                    keynote.endDate = new Date(Date.parse(keynote.endDate));
                    var speakerNames = [];
                    for(var j = 0; j < keynote.speakers.length; j++) {
                        speakerNames.push(keynote.speakers[j].firstName + " " + keynote.speakers[j].lastName);
                    }
                    keynote.speakers = speakerNames.join(', ');
                }

                scheduleEntries.push(sessions);
                scheduleEntries.push(keynotes);

                scheduleEntries = _.flatten(scheduleEntries);
                // console.log("\n\nA list of schedule entries has been constructed: " + JSON.stringify(scheduleEntries, null, 2))
                return scheduleEntries;
            }).catch(function(error) {
                console.log("constructFromDB failed! Error message: " + error);
            });
        }

        return {
            get: function(id) {
                return db.get(id);
            },
            getScheduleEntries: function() {
                return getScheduleEntries();
            },
            setActiveEntry: function(entry){
                activeEntry = entry;
            },
            getActiveEntry: function(){
                return activeEntry;
            }
        };
    });