// var myFn = function() {
//   console.log("I am function.");
// }
// // console.log(myFn);
// myFn.someAttribute = 42;
// myFn.aNewFunction = function(){
//   console.log("I am the NEW function.");
// }
// console.log(myFn);
// console.log(myFn.someAttribute);

// // function runner(f) {
// //   f();
// // }

// // runner(myFn);




// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];

//filter return true or false AND create a new array with the element that passes
//THE test of the callback FUNCTION
var evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);
