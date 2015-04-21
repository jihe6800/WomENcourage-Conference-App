angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope){

    })

    .controller('AgendaCtrl', function($scope, $ionicSideMenuDelegate){
        $scope.$on('$ionicView.enter', function(){
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function(){
            $ionicSideMenuDelegate.canDragContent(true);
        });
    });