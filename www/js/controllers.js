angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

    .controller('SessionCtrl', function(database){
        this.activeSession = database.getActiveSession();
    })
    
.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, $scope, $q, database) {
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

    /* Groups sessions by day */
    function groupByDay(sessions) {
        return sortAndGroup(sessions, 'startDate', function(startDate) {
            return startDate.toDateString();
        }, 'groups');
    }

    /* Groups sessions by sortmode */
    function groupBySortmode(sessions, sortmode) {
        return sortAndGroup(sessions, sortmode, function(sortAttr) {
            switch (sortmode) {
                case 'title':
                case 'speaker':
                    return sortAttr.charAt(0);
                default: // startDate
                    return sortAttr.toTimeString().substr(0, 5);
            }
        }, 'sessions');
    }

    /* Groups sessions by day and within days by sortmode */
    function group(sessions, sortmode) {
        var days = groupByDay(sessions); // Group by day

        // Within each day, group by sortmode
        for (var i = 0; i < days.length; i++) {
            days[i].groups = _.sortBy(days[i].groups, 'title'); // Sort inner groups by title
            days[i].groups = groupBySortmode(days[i].groups, sortmode);
        }

        return days;
    }

    /* Creates a grouped list of the sessions based on this.sortmode.value */
    this.update = function() {
        var sortmode = this.sortmode;
        $q.when(database.getAll()).then(function(result) {
            $scope.days = group(result, sortmode.value);
            setTimeout(function() {
                $ionicSlideBoxDelegate.update();
                }, 1000);
        }).catch(function (error) {
            console.log("Error when reading from database: " + error);
        });
    };

    this.changeSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index);
    };

    this.setSession = function(session){
        database.setActiveSession(session);
    };

    this.sortmodes = [{name: 'Time', value: 'startDate'}, {name: 'Title', value: 'title'}, {name: 'Speaker', value: 'speaker'}];
    this.sortmode = this.sortmodes[0];
    this.update();
});