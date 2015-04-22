angular.module('todoApp', [])
    .controller('TodoListController', function($scope) {
        var db = new PouchDB('todos');
        var remoteCouch = 'http://130.238.15.131:5984/todos';

        $scope.todos = [];

        db.changes({
            since: 'now',
            live: true
        }).on('change', updateTodos);

        // Add an item to database
        $scope.addTodo = function() {
            var todo = {
                _id: new Date().toISOString(),
                title: this.todoText,
                completed: false
            };

            this.todoText = '';

            db.put(todo, function callback(err, result) {
                if (!err) {
                    console.log('Successfully posted a todo!');
                }
            });
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.completed ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            angular.forEach($scope.todos, function(todo) {
                if (todo.completed) {
                    db.remove(todo);
                }
            });
        };

        // Update list to match PouchDB
        function updateTodos() {
            db.allDocs({include_docs: true, descending: true}, function(err, doc) {
                $scope.todos = [];
                angular.forEach(doc.rows, function (row) {
                    $scope.$apply(function() {
                        $scope.todos.push((row.doc))
                    });
                })
            });
        }

        // Initialize sync with the remote server
        function sync() {
            var opts = {live: true};
            db.replicate.to(remoteCouch, opts, function(){});
            db.replicate.from(remoteCouch, opts, function(){});
        }

        updateTodos();
        sync();
    });