'use strict';
angular.module("PostApp", [])

.controller('PostsCtrl', function ($scope) {
    $scope.posts = [];
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function() {
      $scope.posts.push($scope.post);
      $scope.post = {url: 'http://', title: ''};
    };

    $scope.deletePost = function (index) {
      $scopes.posts.splice(index, 1);
    }
})
;

