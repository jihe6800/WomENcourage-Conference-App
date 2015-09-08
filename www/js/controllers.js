angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, database){
        $scope.getEntryColor = function(entry) {
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

        $scope.getEntryURL = function(entry) {
            switch(entry._id.substr(0, 4)) {
                case 'sssn':
                    return "#/app/schedule/session/" + entry.id;
                case 'note':
                    return "#/app/schedule/keynote/" + entry.id;
                case 'cmmn':
                    return "#/app/schedule/common/" + entry.id;
                case 'wksp':
                    return "#/app/schedule/workshop/" + entry.id;
                case 'panl':
                    return "#/app/schedule/panel/" + entry.id;
                case 'uncf':
                    return "#/app/schedule/unconference/" + entry.id;
                case 'inds':
                    return "#/app/schedule/industry-talks/" + entry.id;
                default:
                    return "#/app/schedule";
            }
        };

        $scope.addToMySchedule = function(entry) {
            console.log("addToMySchedule called!");
            database.addToMySchedule(entry);
        };

        $scope.removeFromMySchedule = function(entry) {
            console.log("removeFromMySchedule called!");
            database.removeFromMySchedule(entry);
        };

        $scope.toggleInMySchedule = function(entry) {
            database.isInMySchedule(entry).then(function(isInMySchedule) {
                console.log("isInMySchedule return value in controller: " + JSON.stringify(isInMySchedule));
                if(isInMySchedule) {
                    $scope.removeFromMySchedule(entry);
                } else {
                    $scope.addToMySchedule(entry);
                }
            }).catch(function (error) {
                console.log("isInMySchedule error in controller: " + error);
            });
        };
    })

    .controller('HomeCtrl', function($scope, $location) {
    })

    .controller('EntryCtrl', function(entry){
        this.activeEntry = entry;
    })

    .controller('InformationCtrl', function($q, database){
        var that = this;
        $q.when(database.getOther('info')).then(function (result) {
            that.sections = result.sections;
        }).catch(function (error) {
            that.sections = [{
                title: 'Sorry!',
                content: 'This page is supposed to be filled with information, but something went wrong when trying to get it. Try to find Internet access again and refresh the page.'
            }];
        });
    })

    .controller('EmergencyCtrl', function($q, database){
        var that = this;
        $q.when(database.getOther('emergency')).then(function (result) {
            that.sections = result.sections;
        }).catch(function (error) {
            that.sections = [{
                title: 'Sorry!',
                content: 'This page is supposed to be filled with information, but something went wrong when trying to get it. Try to find Internet access again and refresh the page.'
            }];
        });
    })

    .controller('FeedbackCtrl', function($q, database){
        var that = this;
        $q.when(database.getOther('feedback')).then(function (result) {
            that.sections = result.sections;
        }).catch(function (error) {
            that.sections = [{
                title: 'Sorry!',
                content: 'This page is supposed to be filled with information, but something went wrong when trying to get it. Try to find Internet access again and refresh the page.'
            }];
        });
    })

    .controller('PapersCtrl', function(database, $q) {
        /* Reads papers from database and sorts them alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getPapers()).then(function(result) {
                that.papers = result;
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.update();
    })

    .controller('PosterCtrl', function(poster) {
        this.activePoster = poster;
    })

    .controller('PostersCtrl', function(database, $q) {
        /* Reads posters from database and sorts them alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getPosters()).then(function(result) {
                that.posters = result;
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.update();
    })

    .controller('SpeakerCtrl', function(speaker){
        this.activeSpeaker = speaker;
    })

    .controller('SpeakersCtrl', function(database, $q){
        /* Reads speakers from database and sorts their last names alphabetically */
        this.update = function() {
            var that = this;
            $q.when(database.getSpeakers()).then(function(result) {
                that.speakers = result;
            }).catch(function (error) {
                console.log("Error when reading from database: " + error);
            });
        };

        this.update();
    })

    .controller('SupportersCtrl', function(database, $q) {
        this.update = function() {
            var that = this;
            $q.when(database.getSponsors()).then(function(result) {
                that.sponsors = _.sortBy(result, 'name');
            });
            $q.when(database.getSupporters()).then(function(result) {
                that.supporters = result;
                that.supporters.diamond = _.sortBy(that.supporters.diamond, 'name');
                that.supporters.platinum = _.sortBy(that.supporters.platinum, 'name');
                that.supporters.silver = _.sortBy(that.supporters.silver, 'name');
                that.supporters.additional = _.sortBy(that.supporters.additional, 'name');
            })
        };

        this.update();
    })

    
.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, $scope, $q, $timeout, $location, $ionicPopup, $ionicLoading, $state, database, mySchedule) {
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
        $ionicLoading.show({
            template: 'Loading...'
        });

        var that = this;
        $q.when((mySchedule ? database.getMyScheduleEntries() : database.getScheduleEntries())).then(function(result) {
            if (!result.length) {
                if (mySchedule) {
                    $ionicPopup.alert({
                        title: 'Empty!',
                        okType: 'button-womencourage',
                        template: 'You have not yet added anything to your schedule. You can do so by switching the toggle on a schedule entry.'
                    });
                } else {
                    $ionicPopup.alert({
                        title: 'Empty!',
                        okType: 'button-womencourage',
                        template: 'No entries were found.'
                    });
                }
            }

            that.days = group(result, that.sortmode.value);
            $timeout(function() {
                $ionicSlideBoxDelegate.update();
                $ionicLoading.hide();
                }, 1000);
        }).catch(function (error) {
            console.log("Error when reading from database: " + error);
        });
    };

    this.changeSlide = function(index) {
        $scope.myActiveSlide = index;
    };

    $scope.myActiveSlide = 0;

    this.isActive = function(ind){
        if(ind === $scope.myActiveSlide){
            return "button-womencourage";
        }else{
            return "button-womencourage inactive"
        }
    };

    /* Formats date to a string that's compatible with the .ics export library */
    function toStringFormat(date) {
        function formatDate(date) {
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            return month + '/' + day + '/' + year;
        }

        function formatAMPM(date) {
            var hours = (date.getHours() + (date.getTimezoneOffset()/60)) % 24;
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
            okType: 'button-womencourage',
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

    // Make My Schedule refresh upon state load if changes have been made
    if (mySchedule) {
        var that = this;

        database.on('myScheduleChanged', function() {
            that.myScheduleHasChanged = true;
        });

        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            if(toState.name === "app.my-schedule" && that.myScheduleHasChanged) {
                that.update();
                that.myScheduleHasChanged = false;
            }
        });
    }

    this.mySchedule = mySchedule;

    this.sortmodes = [{name: 'Time', value: 'startDate'}, {name: 'Title', value: 'title'}, {name: 'Location', value: 'location'}];
    this.sortmode = this.sortmodes[0];
    this.update();
});