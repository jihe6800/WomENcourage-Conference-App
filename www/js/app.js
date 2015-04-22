// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'todoApp'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.info', {
        url: "/info",
        views: {
          'menuContent': {
            templateUrl: "templates/info.html"
          }
        }
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/schedule.html"
      }
    }
  })

    .state('app.my-schedule', {
      url: "/my-schedule",
      views: {
        'menuContent': {
          templateUrl: "templates/my-schedule.html"
        }
      }
    })

  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "templates/speakers.html"
      }
    }
  })

      .state('app.map', {
        url: "/map",
        views: {
          'menuContent': {
            templateUrl: "templates/map.html"
          }
        }
      })

      .state('app.news', {
        url: "/news",
        views: {
          'menuContent': {
            templateUrl: "templates/news.html"
          }
        }
      })

      .state('app.sponsors', {
        url: "/sponsors",
        views: {
          'menuContent': {
            templateUrl: "templates/sponsors.html"
          }
        }
      })

      .state('app.supporters', {
        url: "/supporters",
        views: {
          'menuContent': {
            templateUrl: "templates/supporters.html"
          }
        }
      })

      .state('start', {
        url: '/start',
        views: {
          '': {
            templateUrl: 'templates/start.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.todo', {
        url: "/todo",
        views: {
          'menuContent': {
            templateUrl: "templates/todo.html",
            controller:  'TodoListController as todoList'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');
});
