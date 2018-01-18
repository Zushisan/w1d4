var myFn = function() {
  console.log("I am function.");
}
// console.log(myFn);
myFn.someAttribute = 42;
myFn.aNewFunction = function(){
  console.log("I am the NEW function.");
}
console.log(myFn);
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);




// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
