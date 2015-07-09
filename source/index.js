'use strict';

var app = angular.module('sif', ['firebase', 'ui.router']);

app.controller("mainCtrl", function($scope, $http, urls) {
  $scope.tags = [];
  $scope.tweet = "";

  $scope.search = function() {
    $http.post(urls.apiUrl + "/search", { words: $scope.words } )
    .success(function(data) {
      console.log(data);
      $scope.data = data;
    })
    .catch(function(error) {
      console.log(error);
    });

    return false;
  };

  $scope.sendTweet = function() {
    $http.post(urls.apiUrl + "/tweet", { tweet: $scope.tweet } )
    .success(function(resp) {
      $scope.tweet = "";
    });
  };

  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
});
