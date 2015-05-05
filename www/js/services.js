angular.module('starter.services', [])

    .factory('database', function() {
        var db = new PouchDB('schedule');
        var activeSession; // Will contain the currently active session

        db.changes({
            since: 'now',
            live: true
        }).on('change', function() {
            console.log("Something changed in database!");
        });

        /*
        db.bulkDocs([{
            _id: '1',
            title: "About something cool",
            speaker: "Gustav K",
            startDate: new Date(2015, 4, 19, 18, 0),
            endDate: new Date(2015, 4, 19, 19, 0)
        }, {
            _id: '2',
            title: "About something cooler",
            speaker: "Anders P",
            startDate: new Date(2016, 4, 20, 18, 0),
            endDate: new Date(2016, 4, 20, 19, 0)
        }, {
            _id: '3',
            title: "Something even cooler",
            speaker: "Jakob E",
            startDate: new Date(2015, 4, 19, 18, 0),
            endDate: new Date(2015, 4, 19, 19, 0)
        }, {
            _id: '4',
            title: "This is even cooler than cool",
            speaker: "Göran D",
            startDate: new Date(2015, 4, 19, 19, 0),
            endDate: new Date(2015, 4, 19, 20, 0)
        }, {
            _id: '5',
            title: "About the coolest of cool",
            speaker: "Hans X",
            startDate: new Date(2014, 4, 21, 18, 0),
            endDate: new Date(2014, 4, 21, 19, 0)
        }, {
            _id: '6',
            title: "So cool",
            speaker: "Johan T",
            startDate: new Date(2015, 4, 21, 20, 0),
            endDate: new Date(2015, 4, 21, 21, 0)
        }, {
            _id: '7',
            title: "Very muchest cool",
            speaker: "Johan T",
            startDate: new Date(2015, 11, 1, 8, 0),
            endDate: new Date(2015, 11, 1, 9, 0)
        }, {
            _id: '8',
            title: "J - in between",
            speaker: "Johan T",
            startDate: new Date(2015, 4, 19, 18, 0),
            endDate: new Date(2015, 4, 19, 19, 0)
        }, {
            _id: '9',
            title: "J - in between",
            speaker: "Anders T",
            startDate: new Date(2015, 4, 19, 10, 0),
            endDate: new Date(2015, 4, 19, 11, 0)
        }]);
        */

        return {
            get: function(id) {
                db.get(id);
            },
            getAll: function() {
                return db.allDocs({
                    include_docs: true,
                    descending: true
                }).then(function(result) {
                    var items = [];
                    angular.forEach(result.rows, function (row) {
                        var item = row.doc;
                        item.startDate = new Date(Date.parse(item.startDate));
                        item.endDate = new Date(Date.parse(item.endDate));
                        items.push(item);
                    });
                    return items;
                });
            },
            setActiveSession: function(session){
                activeSession = session;
            },
            getActiveSession: function(){
                return activeSession;
            }
        };
    });