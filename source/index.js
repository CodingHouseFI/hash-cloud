'use strict';

var app = angular.module('sif', ['firebase', 'ui.router']);

app.controller("mainCtrl", function($scope, $http) {
  $scope.tags = [];

  $scope.search = function() {
    $http.post("http://localhost:8000/search", { words: $scope.words } )
    .success(function(data) {
      $scope.tags = data;
    });

    return false;
  };
});
