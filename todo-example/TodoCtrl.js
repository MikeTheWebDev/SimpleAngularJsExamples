angular.module('todomvc', [])
    .controller('TodoCtrl', function TodoCtrl($scope, $filter) {
      'use strict';
      
      var todos = $scope.todos;
      $scope.newTodo = '';
      $scope.editedTodo = null;

      $scope.addTodo = function() {
          var newTodo = {
                  title: $scope.newTodo.trim(),
                  completed: false;
          };

          if (!newTodo.title) {
              return;
          }
      
      $scope.saving = true;
      
      // TODO store this somewhere

      };

      $store.saveTodo = function(todo)

     });
