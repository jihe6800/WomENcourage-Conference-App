angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

.controller('SessionCtrl', function(database){
    this.getSession = function(){
        database.getActiveSession();
    }
})
    
.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, $scope, database) {
    var sessions = [{
        title: "About something cool",
        speaker: "Gustav K",
        startDate: new Date(2015, 4, 19, 18, 0),
        endDate: new Date(2015, 4, 19, 19, 0)
    }, {
        title: "About something cooler",
        speaker: "Anders P",
        startDate: new Date(2016, 4, 20, 18, 0),
        endDate: new Date(2016, 4, 20, 19, 0)
    }, {
        title: "Something even cooler",
        speaker: "Jakob E",
        startDate: new Date(2015, 4, 19, 18, 0),
        endDate: new Date(2015, 4, 19, 19, 0)
    }, {
        title: "This is even cooler than cool",
        speaker: "Göran D",
        startDate: new Date(2015, 4, 19, 19, 0),
        endDate: new Date(2015, 4, 19, 20, 0)
    }, {
        title: "About the coolest of cool",
        speaker: "Hans X",
        startDate: new Date(2014, 4, 21, 18, 0),
        endDate: new Date(2014, 4, 21, 19, 0)
    }, {
        title: "So cool",
        speaker: "Johan T",
        startDate: new Date(2015, 4, 21, 20, 0),
        endDate: new Date(2015, 4, 21, 21, 0)
    }, {
        title: "Very muchest cool",
        speaker: "Johan T",
        startDate: new Date(2015, 11, 1, 8, 0),
        endDate: new Date(2015, 11, 1, 9, 0)
    }, {
        title: "J - in between",
        speaker: "Johan T",
        startDate: new Date(2015, 4, 19, 18, 0),
        endDate: new Date(2015, 4, 19, 19, 0)
    }, {
        title: "J - in between",
        speaker: "Anders T",
        startDate: new Date(2015, 4, 19, 10, 0),
        endDate: new Date(2015, 4, 19, 11, 0)
    }];

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
        
    this.setSession = function(session){
        database.setActiveSession(session);
    };

    /* Creates a grouped list of the sessions based on this.sortmode.value */
    this.updateGroups = function() {
        this.days = group(sessions, this.sortmode.value);
        setTimeout(function() {
            $ionicSlideBoxDelegate.update();
        }, 1000);
    };

    this.changeSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index);
    };

    this.sortmodes = [{name: 'Time', value: 'startDate'}, {name: 'Title', value: 'title'}, {name: 'Speaker', value: 'speaker'}];
    this.sortmode = this.sortmodes[0];
    this.updateGroups();
});