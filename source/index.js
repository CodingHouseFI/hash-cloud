'use strict';

var app = angular.module('sif', ['firebase', 'ui.router']);

app.controller("mainCtrl", function($scope) {
  $scope.tags = {
    "#Angularjs": 40,
    "#Emberjs": 20,
    "#JavaScript": 80,
    "#Reactjs": 10,
    "#Backbone": 10,
    "#MeanStack": 20,
    "#Nodejs": 25,
    "#Mongodb": 15,
    "#Expressjs": 5
  };
});
