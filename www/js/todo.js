angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var db = new PouchDB('todos');
        var remoteCouch = 'http://130.238.15.131:5984/todos';

        var todoList = this;
        todoList.todos = [];

        db.changes({
            since: 'now',
            live: true
        }).on('change', updateTodos);

        todoList.addTodo = function() {
            // Create object
            var todo = {
                _id: new Date().toISOString(),
                title: todoList.todoText,
                completed: false
            };

            // Clear text field
            todoList.todoText = '';

            // Push to list
            todoList.todos.push(todo);
            console.log(todoList.todos);

            // Put in PouchDB
            db.put(todo, function callback(err, result) {
                if (!err) {
                    console.log('Successfully posted a todo!');
                }
            });
        };

        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.completed ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.completed) todoList.todos.push(todo);
            });
        };

        // Updates list with database in order to print
        function updateTodos() {
            db.allDocs({include_docs: true, descending: true}, function(err, doc) {
                console.log(JSON.stringify(doc.rows));
                todoList.todos = [];
                angular.forEach(doc.rows, function(row) {
                    todoList.todos.push((row.doc))
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