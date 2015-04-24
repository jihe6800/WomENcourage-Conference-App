angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

.controller('ScheduleCtrl', function($ionicSlideBoxDelegate) {
    var imported_pouchdb_items = [{
        title: "About something cool",
        speaker: "Gustav K",
        start_time: "18:00",
        end_time: "19:00"
    }, {
        title: "About something cooler",
        speaker: "Anders P",
        start_time: "18:00",
        end_time: "20:00"
    }, {
        title: "Something even cooler",
        speaker: "Jakob E",
        start_time: "19:30",
        end_time: "19:31"
    }, {
        title: "This is even cooler than cool",
        speaker: "Göran D",
        start_time: "19:30",
        end_time: "21:00"
    }, {
        title: "About the coolest of cool",
        speaker: "Hans X",
        start_time: "23:59",
        end_time: "00:00"
    }, {
        title: "So cool",
        speaker: "Johan T",
        start_time: "23:59",
        end_time: "00:00"
    }];

    function addToGroupedList(groupedList, item, options) {
        switch (options.sortmode) {
            case "title":
                for (var i = 0; i < groupedList.length; i++) {
                    if (groupedList[i].index === item.title.charAt(0)) {
                        groupedList[i].sessions.push(item);
                        return;
                    }
                }
                groupedList.push({
                    index: item.title.charAt(0),
                    sessions: [item]
                });
                break;
            case "speaker":
                for (var i = 0; i < groupedList.length; i++) {
                    if (groupedList[i].index === item.speaker.charAt(0)) {
                        groupedList[i].sessions.push(item);
                        return;
                    }
                }
                groupedList.push({
                    index: item.speaker.charAt(0),
                    sessions: [item]
                });
                break;
            default:
                for (var i = 0; i < groupedList.length; i++) {
                    if (groupedList[i].index === item.start_time) {
                        groupedList[i].sessions.push(item);
                        return;
                    }
                }
                groupedList.push({
                    index: item.start_time,
                    sessions: [item]
                });
        }
    }

    this.changeSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index);
    }

    var d =  new Date();
    var day = d.getDate();
    var month = d.getMonth();
    this.dates = [day + "/" + month, day + 1 + "/" + month, day + 2 + "/" + month, day + 3 + "/" + month, day + 4 + "/" + month];

    this.updateItems = function(options) {
        this.header_title = options.sortmode;
        this.groupedItems = [];
        for (var i = 0; i < imported_pouchdb_items.length; i++) {
            addToGroupedList(this.groupedItems, imported_pouchdb_items[i], options);
        }
    }

    this.updateItems({sortmode:"time"});
});