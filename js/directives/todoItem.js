toDo.directive('todoItem', function(){
  return {
    templateUrl: "js/directives/todo_item.html",
    restrict: "A",
    scope: {
        item: "=",
        deleteItem: '&'
    }
  };
})