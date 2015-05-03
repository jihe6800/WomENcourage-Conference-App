angular.module('starter.services', [])

    .factory('database', function() {
        // Might use a resource here that returns a JSON array

        var activeSession;

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


        return {
            all: function() {
                return imported_pouchdb_items;
            },
            length: function(){
              return imported_pouchdb_items.length;
            },
            getWithIndex: function(ind){
                return imported_pouchdb_items[ind];
            },
            setActiveSession: function(session){
            activeSession = session;
            },
            getActiveSession: function(){
                return activeSession;
            },
            get: function(requestedTitle) {
                for (var i = 0; i < imported_pouchdb_items.length; i++) {
                    if (imported_pouchdb_items[i].title === parseInt(requestedTitle)) {
                        return imported_pouchdb_items[i];
                    }
                }
                return null;
            }
        };
    });