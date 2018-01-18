// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  arr.forEach(function(item, index){
    if (item === "Waldo"){
      found(item, index);
    }
  });
}


function actionWhenFound(name, index) {
  console.log("Found " + name + " in index: " +index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


