angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

.controller('ScheduleCtrl', function() {
    var items = [{
        title: "Session 1: About something cool",
        speaker: "Gustav K",
        start_time: "18:00",
        end_time: "19:00"
    }, {
        title: "Session 2: About something cooler",
        speaker: "Gustav P",
        start_time: "18:00",
        end_time: "20:00"
    }, {
        title: "Session 3: About something even cooler",
        speaker: "Gustav E",
        start_time: "19:30",
        end_time: "19:31"
    }, {
        title: "Session 4: About something even cooler than cool",
        speaker: "Gustav D",
        start_time: "19:30",
        end_time: "21:00"
    }, {
        title: "Session 5: About the coolest of cool",
        speaker: "Gustav X",
        start_time: "23:59",
        end_time: "00:00"
    }];

    function addToGroupedList(groupedList, item) {
        var i;
        for (i = 0; i < groupedList.length; i++) {
            if (groupedList[i].start_time === item.start_time) {
                groupedList[i].sessions.push(item);
                return;
            }
        }
        groupedList.push({
            start_time: item.start_time,
            sessions: [item]
        });
    }

    this.groupedItems = [];

    var d =  new Date();
    var day = d.getDate();
    var month = d.getMonth();
    this.dates = [day + "/" + month, day + 1 + "/" + month, day + 2 + "/" + month, day + 3 + "/" + month, day + 4 + "/" + month];

    for (var i = 0; i < items.length; i++) {
        addToGroupedList(this.groupedItems, items[i]);
    }
});