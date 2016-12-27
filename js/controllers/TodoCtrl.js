toDo.controller('TodoCtrl', ['$scope', 'todoService' , function($scope, todoService){
  $scope.items = todoService.getItems();
  
  $scope.createTodo = function(valid, form) {
    if (valid) {
      todoService.createTodo($scope.todoParams);
      $scope.todoParams = {};
      form.$setPristine();
      form.$setUntouched();
    }
  }
  
  $scope.deleteItem = function(item) {
    todoService.deleteItem(item);
  }
  
  $scope.removeCompleted = function() {
    todoService.removeCompleted();
  }
  
  $scope.toggleCompletedFilter = function() {
    todoService.toggleCompletedFilter();
  }
  
  $scope.isCompletedFilterActive = function() {
    return todoService.isCompletedFilterActive();
  }
}]);