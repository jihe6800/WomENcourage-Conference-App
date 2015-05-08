angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

    .controller('EntryCtrl', function(database){
        this.activeEntry = database.getActiveEntry();
    })
    
.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, $scope, $q, $timeout, database) {
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

    /* Creates a grouped list of the entries based on this.sortmode.value */
    this.update = function() {
        var that = this;
        $q.when(database.getScheduleEntries()).then(function(result) {
            that.days = group(result, that.sortmode.value);
            $timeout(function() {
                $ionicSlideBoxDelegate.update();
                }, 1000);
        }).catch(function (error) {
            console.log("Error when reading from database: " + error);
        });
    };

    this.changeSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index);
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
            default:
                return "#/app";
        }
    };

    this.sortmodes = [{name: 'Time', value: 'startDate'}, {name: 'Title', value: 'title'}, {name: 'Speaker', value: 'speakers'}];
    this.sortmode = this.sortmodes[0];
    this.update();
});