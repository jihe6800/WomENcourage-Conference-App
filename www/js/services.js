angular.module('starter.services', [])

    .factory('database', function() {
        // Might use a resource here that returns a JSON array

        var activeSession;

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

        return {
            getAll: function() {
                return sessions;
            },
            length: function(){
              return sessions.length;
            },
            getWithIndex: function(ind){
                return sessions[ind];
            },
            setActiveSession: function(session){
                activeSession = session;
            },
            getActiveSession: function(){
                return activeSession;
            },
            get: function(requestedTitle) {
                for (var i = 0; i < sessions.length; i++) {
                    if (sessions[i].title === parseInt(requestedTitle)) {
                        return sessions[i];
                    }
                }
                return null;
            }
        };
    });