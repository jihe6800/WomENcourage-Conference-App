angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope){

    })

    .controller('HomeCtrl', function($scope, $location) {
    })

.contoller('SessionCtrl', function(database){
        this.getSession =function(){
            database.getActiveSession();
        }
    })

.controller('ScheduleCtrl', function($ionicSlideBoxDelegate, database) {

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
        console.log('update');
        this.header_title = options.sortmode;
        this.groupedItems = [];
        for (var i = 0; i < database.length(); i++) {
            addToGroupedList(this.groupedItems, database.getWithIndex(i), options);
        }
    };
        this.setSession = function(session){
            database.setActiveSession(session);
        };

    this.updateItems({sortmode:"time"});
});