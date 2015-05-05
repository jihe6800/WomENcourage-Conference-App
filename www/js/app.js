// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'todo'])

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

      .state('start', {
        url: '/',
        views: {
          '': {
            templateUrl: 'templates/start.html',
            controller: 'HomeCtrl'
          }
        }
      })

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
        templateUrl: "templates/schedule.html",
        controller: "ScheduleCtrl as schedule"
      }
    }
  })

  .state('app.session', {
    url: "/schedule/:sessionId",
    views: {
      'menuContent': {
        templateUrl: "templates/session.html",
        controller: 'SessionCtrl as session'
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

      .state('app.posters', {
        url: "/posters",
        views: {
          'menuContent': {
            templateUrl: "templates/posters.html"
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

      .state('app.emergency-contact', {
        url: "/emergency-contact",
        views: {
          'menuContent': {
            templateUrl: "templates/emergency-contact.html"
          }
        }
      })

      .state('app.feedback', {
        url: "/feedback",
        views: {
          'menuContent': {
            templateUrl: "templates/feedback.html"
          }
        }
      })

      .state('app.todo', {
        url: "/todo",
        views: {
          'menuContent': {
            templateUrl: "templates/todo.html",
            controller:  'TodoCtrl'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
