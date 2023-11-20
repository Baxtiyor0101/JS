// console.log(a);
// let a=5;

// {
//    a = 6;
// }
// console.log(a);

// let name = "John";

// function sayHi() {
//   setTimeout(() => {
//     alert("Hi, " + name);
//   }, 1000);
// }

// setTimeout(() => {
//   name = "Pete";
// }, 1);

// sayHi(); // what will it show: "John" or "Pete"?

// ////////////////////////////

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?

// //////////////////////////
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // ?  0
// alert(counter()); // ?  1
// alert(counter2()); // ?  0

//   //////////////
//   function Counter() {
//     let count = 0;

//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
//   let counter = new Counter();

//   alert( counter.up() ); // ?
//   alert( counter.up() ); // ?
//   alert( counter.down() ); // ?

/////////////////

// Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi();

///////////////////////////////

// sum(1)(2) = 3
// sum(5)(-1) = 4

// sum(2)(3)
// function sum(a) {
//   return (b) => {
//     console.log(a + b);
//   };
// }


///////////////////////////////
// What will be the result of this code?

// let a = 1;
// function func() {
//   console.log(x); // ?
//   let x = 2;
// }

// func();



// https://javascript.info/closure
// https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/