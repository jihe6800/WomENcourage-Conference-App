// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
    abstract: true,
    views: {
      'menuContent': {
        template: "<ion-nav-view></ion-nav-view>",
        controller: "ScheduleCtrl as schedule"
      }
    },
    resolve: {
      mySchedule: function() {
        return false;
      }
    }
  })

  .state('app.schedule.index', {
    url: "",
    templateUrl: "templates/schedule.html"
  })

  .state('app.schedule.session', {
    url: "/session/:id",
    templateUrl: "templates/session.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getSession($stateParams.id);
      }
    }
  })

  .state('app.schedule.keynote', {
    url: "/keynote/:id",
    templateUrl: "templates/keynote.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getKeynote($stateParams.id);
      }
    }
  })

  .state('app.schedule.common', {
    url: "/common/:id",
    templateUrl: "templates/common-entry.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getCommonEntry($stateParams.id);
      }
    }
  })

  .state('app.schedule.workshop', {
    url: "/workshop/:id",
    templateUrl: "templates/workshop.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getWorkshop($stateParams.id);
      }
    }
  })

  .state('app.schedule.panel', {
    url: "/panel/:id",
    templateUrl: "templates/panel.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getPanel($stateParams.id);
      }
    }
  })

  .state('app.schedule.unconference', {
    url: "/unconference/:id",
    templateUrl: "templates/unconference.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getUnconference($stateParams.id);
      }
    }
  })

  .state('app.schedule.industry-talks', {
    url: "/industry-talks/:id",
    templateUrl: "templates/industry-talks-session.html",
    controller: 'EntryCtrl as entry',
    resolve: {
      entry: function ($stateParams, database) {
        return database.getIndustryTalksSession($stateParams.id);
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
      },
      resolve: {
        mySchedule: function() {
          return true;
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
    },
    resolve: {
      poster: function($stateParams, database) {
        return database.getPoster($stateParams.id);
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
        },
        resolve: {
          speaker: function($stateParams, database) {
            return database.getSpeaker($stateParams.id);
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
            templateUrl: "templates/feedback.html",
            controller: 'FeedbackCtrl as feedback'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
