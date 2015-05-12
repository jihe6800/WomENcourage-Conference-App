angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

    .controller('EntryCtrl', function(database){
        this.activeEntry = database.getActiveEntry();
    })

    .controller('InformationCtrl', function(database){
        var that = this;
        database.getOther('info').then(function (result) {
            that.information = result;
        }).catch(function (error) {
            console.log("other2 error: " + error);
            that.information = {title1: 'error' , title2: 'error' ,text1: 'error', text2: 'error'}
        });
    })

    .controller('EmergencyCtrl', function(database){
        var that = this;
        database.getOther('emergency').then(function (result) {
            that.emergency = result;
        }).catch(function (error) {
            console.log("other2 error: " + error);
            that.information = {title1: 'error' , title2: 'error', title3: 'error' ,text1: 'error', text2: 'error', text3: 'error'}
        });
    })

    .controller('PapersCtrl', function(database, $q) {
        /* Reads papers from database and sorts them alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getPapers()).then(function(result) {
                that.papers = _.sortBy(result, 'title');
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.update();
    })

    .controller('PosterCtrl', function(database) {
        this.activePoster = database.getActivePoster();
    })

    .controller('PostersCtrl', function(database, $q) {
        /* Reads posters from database and sorts them alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getPosters()).then(function(result) {
                that.posters = _.sortBy(result, 'title');
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.setActivePoster = function(poster) {
            database.setActivePoster(poster);
        };

        this.update();
    })

    .controller('SpeakerCtrl', function(database){
        this.activeSpeaker = database.getActiveSpeaker();
    })

    .controller('SpeakersCtrl', function(database, $q){
        this.setActiveSpeaker = function(speaker){
            database.setActiveSpeaker(speaker);
        };

        /* Reads speakers from database and sorts their last names alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getSpeakers()).then(function(result) {
                that.speakers = _.sortBy(result, 'lastName');
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.update();
    })

    
.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, $scope, $q, $timeout, $location, $ionicPopup, database) {
    /*
     * 1. Sorts arr by sortAttr.
     * 2. Groups subsequent element that get the same output from groupFunc(element[sortAttr]).
     * subarrayPropertyName is the name for the subarray property in each group.
     */
    function sortAndGroup(arr, sortAttr, groupFunc, subarrayPropertyName) {
        arr = _.sortBy(arr, sortAttr); // Sort by the given attribute

        var groups = []; // New array that will hold the groups
        var groupValue = "_INVALID_GROUP_VALUE_";

        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];

            // Check if new group needs to be created
            if (groupFunc(element[sortAttr]) !== groupValue) {
                var group = {};
                group.name = groupFunc(element[sortAttr]);
                group[subarrayPropertyName] = [];
                group.visible = true;

                groupValue = group.name;
                groups.push(group);
            }

            group[subarrayPropertyName].push(element);
        }

        return groups;
    }

    /* Groups entries by day */
    function groupByDay(entries) {
        return sortAndGroup(entries, 'startDate', function(startDate) {
            return startDate.toDateString();
        }, 'groups');
    }

    /* Groups entries by sortmode */
    function groupBySortmode(entries, sortmode) {
        return sortAndGroup(entries, sortmode, function(sortAttr) {
            switch (sortmode) {
                case 'title':
                case 'speakers':
                    return sortAttr.charAt(0);
                case 'location':
                    return sortAttr;
                default: // startDate
                    return sortAttr.toTimeString().substr(0, 5);
            }
        }, 'entries');
    }

    /* Groups entries by day and within days by sortmode */
    function group(entries, sortmode) {
        var days = groupByDay(entries); // Group by day

        // Within each day, group by sortmode
        for (var i = 0; i < days.length; i++) {
            days[i].groups = _.sortBy(days[i].groups, 'title'); // Sort inner groups by title
            days[i].groups = groupBySortmode(days[i].groups, sortmode);
        }

        return days;
    }

    /* Reads schedule entries from database and sorts and groups them according to this.sortmode.value */
    this.update = function() {
        var that = this;
        $q.when((that.mySchedule ? database.getMyScheduleEntries() : database.getScheduleEntries())).then(function(result) {
            if (!result.length) {
                if (that.mySchedule) {
                    $ionicPopup.alert({
                        title: 'Empty!',
                        template: 'You have not yet added anything to your schedule.'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Empty!',
                        template: 'No entries were found.'
                    });
                }
            }

            that.days = group(result, that.sortmode.value);
            $timeout(function() {
                $ionicSlideBoxDelegate.update();
                }, 1000);
        }).catch(function (error) {
            console.log("Error when reading from database: " + error);
        });
    };

    this.changeSlide = function(index) {
        $scope.myActiveSlide = index;
    };

    $scope.myActiveSlide = 0;

    this.isDisabled = function(ind){
        return ind === $scope.myActiveSlide;
    };

    this.setActiveEntry = function(entry){
        database.setActiveEntry(entry);
    };

    this.getEntryColor = function(entry) {
        switch(entry._id.substr(0, 4)) {
            case 'sssn':
                return "#DFF69D";
            case 'note':
                return "#A5B1C0";
            case 'cmmn':
                return "#FFE4A3";
            case 'wksp':
                return "#D3AA47";
            case 'panl':
                return "#A6C843";
            case 'uncf':
                return "#316B85";
            case 'inds':
                return "#7CAABD";
            default:
                return "#FFFFFF";
        }
    };

    this.getEntryURL = function(entry) {
        switch(entry._id.substr(0, 4)) {
            case 'sssn':
                return "#/app/session";
            case 'note':
                return "#/app/keynote";
            case 'cmmn':
                return "#/app/common";
            case 'wksp':
                return "#/app/workshop";
            case 'panl':
                return "#/app/panel";
            case 'uncf':
                return "#/app/unconference";
            case 'inds':
                return "#/app/industry-talks";
            default:
                return "#/app";
        }
    };

    this.addToMySchedule = function(entry) {
        console.log("addToMySchedule called!");
        database.addToMySchedule(entry);
    };

    this.removeFromMySchedule = function(entry) {
        console.log("removeFromMySchedule called!");
        database.removeFromMySchedule(entry);
    };

    this.toggleInMySchedule = function(entry) {
        var that = this;
        database.isInMySchedule(entry).then(function(isInMySchedule) {
            console.log("isInMySchedule return value in controller: " + JSON.stringify(isInMySchedule));
            if(isInMySchedule) {
                that.removeFromMySchedule(entry);
            } else {
                that.addToMySchedule(entry);
            }
        }).catch(function (error) {
            console.log("isInMySchedule error in controller: " + error);
        });
    };

    /* Formats date to a string that's compatible with the .ics export library */
    function toStringFormat(date) {
        function formatDate(date) {
            var month = date.getMonth();
            var day = date.getDay();
            var year = date.getFullYear();
            return month + '/' + day + '/' + year;
        }

        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        return formatDate(date) + ' ' + formatAMPM(date);
    }

    /* Exports my schedule to .ics format */
    this.exportMySchedule = function() {
        $ionicPopup.confirm({
            title: 'Export to .ics',
            template: 'Are you sure you want to export your schedule?'
        }).then(function(response) {
            if(response) {
                database.getMyScheduleEntries().then(function(entries) {
                    var cal = ics();
                    for(var i = 0; i < entries.length; i++) {
                        var entry = entries[i];
                        cal.addEvent(
                            entry.title,
                            entry.description ? entry.description : '',
                            entry.location ? entry.location : '',
                            toStringFormat(entry.startDate),
                            toStringFormat(entry.endDate)
                        );
                    }
                    cal.download();
                    console.log('Schedule exported!');
                });
            }
        });
    };

    this.mySchedule = $location.path() === '/app/my-schedule';

    this.sortmodes = [{name: 'Time', value: 'startDate'}, {name: 'Title', value: 'title'}, {name: 'Location', value: 'location'}];
    this.sortmode = this.sortmodes[0];
    this.update();
});