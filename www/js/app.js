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
            templateUrl: "templates/info.html",
            controller: "InformationCtrl as information"
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
    url: "/session/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/session.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.keynote', {
    url: "/keynote/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/keynote.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.common', {
    url: "/common/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/common-entry.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.workshop', {
    url: "/workshop/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/workshop.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.panel', {
    url: "/panel/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/panel.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.unconference', {
    url: "/unconference/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/unconference.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

  .state('app.industry-talks', {
    url: "/industry-talks/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/industry-talks-session.html",
        controller: 'EntryCtrl as entry'
      }
    }
  })

    .state('app.my-schedule', {
      url: "/my-schedule",
      views: {
        'menuContent': {
          templateUrl: "templates/schedule.html",
          controller: "ScheduleCtrl as schedule"
        }
      }
    })

    .state('app.papers', {
      url: "/papers",
      views: {
        'menuContent': {
          templateUrl: "templates/papers.html",
          controller: 'PapersCtrl as papers'
        }
      }
    })

      .state('app.posters', {
        url: "/posters",
        views: {
          'menuContent': {
            templateUrl: "templates/posters.html",
            controller: 'PostersCtrl as posters'
          }
        }
      })

  .state('app.poster', {
    url: "/poster/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/poster.html",
        controller: 'PosterCtrl as poster'
      }
    }
  })

  .state('app.speakers', {
    url: "/speakers",
    views: {
      'menuContent': {
        templateUrl: "templates/speakers.html",
        controller: 'SpeakersCtrl as speakers'
      }
    }
  })

      .state('app.speaker', {
        url: "/speaker/:id",
        views: {
          'menuContent': {
            templateUrl: "templates/speaker.html",
            controller: 'SpeakerCtrl as speaker'
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

      .state('app.supporters', {
        url: "/supporters",
        views: {
          'menuContent': {
            templateUrl: "templates/sponsors.html",
            controller: 'SupportersCtrl as supporters'
          }
        }
      })

      .state('app.emergency-contact', {
        url: "/emergency-contact",
        views: {
          'menuContent': {
            templateUrl: "templates/emergency-contact.html",
            controller: 'EmergencyCtrl as emergency'
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
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
