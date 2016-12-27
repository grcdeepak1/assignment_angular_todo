toDo.controller('TodoCtrl', ['$scope', function($scope){
  $scope.items = [{ text: "Get groceries from the store", dueDate: new Date(), completed: false },
                  { text: "Make dinner", dueDate: new Date(), completed: false},
                  { text: "Eat dinner", dueDate: new Date(), completed: false}];
}]
);