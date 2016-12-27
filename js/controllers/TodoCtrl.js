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
}]
);