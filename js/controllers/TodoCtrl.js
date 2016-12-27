toDo.controller('TodoCtrl', ['$scope', '$window' , function($scope, $window){
  $scope.items = [{ text: "Get groceries from the store", dueDate: new Date(), completed: false },
                  { text: "Make dinner", dueDate: new Date(), completed: false},
                  { text: "Eat dinner", dueDate: new Date(), completed: false}];

  $scope.createTodo = function(valid, form) {
    if (valid) {
      $scope.items.push({text: $scope.todoParams.text, dueDate: $scope.todoParams.duedate, completed: false});
      $scope.todoParams = {};
      form.$setPristine();
      form.$setUntouched();
    }
  }
  
  $scope.deleteItem = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  }
  
  $scope.removeCompleted = function() {
    index = $scope.items.length - 1
    while (index >= 0) {
      if( $scope.items[index].completed === true)
        $scope.deleteItem($scope.items[index]);
      index -= 1;
    }
  }
}]);