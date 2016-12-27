toDo.filter('completedFilter', function() {
  return function( collection , activateCompletedFilter) {
    if ( !activateCompletedFilter) { return  collection }
    var filteredCollection = []
    angular.forEach( collection, function( item ){
      if( item.completed !== true ) {
        filteredCollection.push( item );
      }
    })
    return filteredCollection;
  };
});