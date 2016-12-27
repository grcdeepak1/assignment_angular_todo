toDo.factory('todoService', function(){
  var obj = {};
  obj.items = [{ text: "Get groceries from the store", dueDate: new Date(), completed: false },
               { text: "Make dinner", dueDate: new Date(), completed: false},
               { text: "Eat dinner", dueDate: new Date(), completed: false}];
  obj.activateCompletedFilter = false;
  
  obj.getItems = function() {
    return obj.items;
  }
  
  obj.createTodo = function(todoParams) {
    obj.items.push({text: todoParams.text, dueDate: todoParams.duedate, completed: false});
  }
  
  obj.deleteItem = function(item) {
    var index = obj.items.indexOf(item);
    obj.items.splice(index, 1);
  }
  
  obj.removeCompleted = function() {
    index = obj.items.length - 1
    while (index >= 0) {
      if( obj.items[index].completed === true)
        obj.deleteItem(obj.items[index]);
      index -= 1;
    }
  }
  obj.toggleCompletedFilter = function() {
    obj.activateCompletedFilter = obj.activateCompletedFilter ? false : true;
  }
  
  obj.isCompletedFilterActive = function() {
    return obj.activateCompletedFilter;
  }
  return obj
});