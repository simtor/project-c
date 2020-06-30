// const readline = require("readline");
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
 
// const minimumNumber = 1;

// function getNumberOne(min = 1, max = 100) {
//   var x = Math.random() * (max - min) + min;
//   return x;
// }
 
// function getNumberTwo(min = 1, max = 100) {
//   var y = Math.random() * (max - min) + min;
//   return y;
// }

// let correctAswers = [];
// function askForAnswer(z, s) {
//   return new Promise((resolve) => {
//     rl.question("Please input a number answer: ", (input) => {
//       var r = z + s;
//       if (r == input) {
//         console.log("Thats right");
//         correctAswers.push("Right");
//       } else {
//         console.log("Thats wrong");
//       }
//       resolve(input);
//     });
//   });
// }
 
// var output = "";
 
// console.time("concatenation");
 
// for (var p = 1; p < 1e6; p++) {
//   output += p;
// }

//   function markResult(mark){
//   if (mark < 0) {
//     console.log('unfortunately you failed better next time. :)');
//   }
//   else if (mark >= 0 && mark <= 49){
//     console.log('unfortunately you failed better next time. :)');
//   }
//   else if (mark >= 50 && mark <= 60) {
//     console.log("Congratulations you have a pass");
//   }
//   else if (mark >= 61 && mark<= 80) {
//     console.log("Congratulations you have a merit");
//   }
//   else if (mark >= 81 && mark<= 100) {
//     console.log("Congratulations you have a Distinction");
//   }
//   else {
//     console.log("Something went wrong with the coded");
//   }
//   return mark;
// } 
// +

// rl.question("Enter the number of times you want to play: ", async (answer) => {
//   let currentAnswer = null;
//     while (currentAnswer === null || isNaN(currentAnswer)) {
//       currentAnswer = answer;
//     }

//   for (let i = 0; i < answer; i++) {
//     var z = Math.floor(getNumberOne(this.x));
//     var s = Math.floor(getNumberTwo(this.y));
//     if(s>=z){
//       console.log(s, "+", z);
//     }else{
//     console.log(z, "+", s);
//     }
//     let questionAnswer = null;
//     while (questionAnswer === null || isNaN(questionAnswer)) {
//       questionAnswer = await askForAnswer(z, s);
//     }
//   }

//   rl.close();
//   console.log("You got: ", correctAswers.length, "/", answer, "right");
//   var percentage = (correctAswers.length / answer);
//   var mark = (Math.trunc(percentage*100));
//   console.log(mark, "%");
//    markResult(mark);
//   console.timeEnd("concatenation");
// });

// const readline = require("readline");
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
 
// const minimumNumber = 1;
 
// rl.question(
//   "Enter the maximum number of the randomly generated value: ",
//   (answer) => {
//     var i;
//     for (i = 0; i < answer; i++){
//       // const minimumNumber = 1;
//     function getNumberOne(min = 1, max = 100){
//       var x = Math.random() * (max - min) + min;
//       return (x);
//     // console.log(x);
//     }

//     function getNumberTwo(min = 1, max = 100){
//       var y = Math.random() * (max - min) + min;
//       return (y);
//     // console.log(x);
//     }

//     var z = (Math.floor(getNumberOne(this.x)));
//     console.log(z)
//     var s = (Math.floor(getNumberTwo(this.y)));
//     console.log(s)

//     var r = (z + s);
//     console.log(r);

//     }
//   }
// );

// console.log('This is a random game')

// console.log('=============================')


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Input a number: ', number  => {
//   console.log(`Hey there ${number}!`);
//   readline.close();
// });



// function getrandom(max){
//     return Math.floor(Math.random() * Math.floor(max));
// }


// // function randomtwo(){
// //     return Math.random();
// // }

// // console.log(randomtwo(50));
// console.log(getrandom(100));
// // console.log(getrandom(100));
//sasas

// // var validate = require("validate.js");
// const readline = require("readline");
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
 
// const minimumNumber = 1;
 
// function getNumberOne(min = 1, max = 100) {
//   var x = Math.random() * (max - min) + min;
//   return x;
// }
 
// function getNumberTwo(min = 1, max = 100) {
//   var y = Math.random() * (max - min) + min;
//   return y;
// }

// let correctAswers = [];
// // var sum = correctAswers.reduce(function(a, b){
// //     return a + b;
// // }, 0);-
 
// // console.log(sum); // Prints: 15


// function askForAnswer(z, s) {
//   return new Promise((resolve) => {
//     rl.question("Plese input your answer: ", (input) => {
//       var r = z + s;
//       if (r == input) {
//         console.log("Thats right");
//         correctAswers.push('Right')
//         // let total = correctAswers.push('Right')
//         // console.log("You got: ",total);
//         // console.count(correctAswers);
//       } else {
//         console.log("Thats wrong");
//       }
//       resolve();
//     //   console.count(correctAswers);
//     //  console.log(correctAswers);
//     //console.log(correctAswers.length);
//     });
//   });
// }

// var output = "";

// console.time("concatenation");

// for(var p = 1; p<1e6; p++){
//     output +=p;
// }


// rl.question("Enter the number of times you want to play: ", async (answer) => {
//   //   if (answer === "") {
//   //     console.log("Hello")
//   //     console.log(`${answer}`)
//   //     // user pressed OK, but the input field was empty
//   // } else if (answer) {
//   //   console.log("Hello2")
//   //     // user typed something and hit OK
//   // } else {
//   //   console.log("Hello3")
//   //     // user hit cancel
//   // }
//   for (let i = 0; i < answer; i++) {
//     var z = Math.floor(getNumberOne(this.x));
//     console.log(z);
//     var s = Math.floor(getNumberTwo(this.y));
//     console.log(s);
//     await askForAnswer(z, s);
//   }
//   rl.close();
//   console.log("You got: ",correctAswers.length, "/", answer, "right");
//   var percentage = (correctAswers.length / answer);
//   console.log(Math.trunc(percentage*100));
//   console.timeEnd("concatenation");
// });

                        

// for (let i = 0; i < answer; i++) {
//   var z = Math.floor(getNumberOne(this.x));
//   console.log(z);
//   var s = Math.floor(getNumberTwo(this.y));
//   console.log(s);
//   await askForAnswer(z, s);
// }


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Input a number: ', number  => {
//   console.log(`Hey there ${number}!`);
//   readline.close();
// });



// function getrandom(max){
//     return Math.floor(Math.random() * Math.floor(max));
// }


// // function randomtwo(){
// //     return Math.random();
// // }

// // console.log(randomtwo(50));
// console.log(getrandom(100));
// // console.log(getrandom(100));

// const readline = require("readline");
 
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
 
// const minimumNumber = 1;
 
// rl.question(
//   "Enter the number of times you want to play: ",
//   (answer) => {
//     var i;
//     for (i = 0; i < answer; i++){
//       // const minimumNumber = 1;
//     function getNumberOne(min = 1, max = 100){
//       var x = Math.random() * (max - min) + min;
//       return (x);
//     // console.log(x);
//     }
  
//     function getNumberTwo(min = 1, max = 100){
//       var y = Math.random() * (max - min) + min;
//       return (y);
//     // console.log(x);
//     }
      
//     var z = (Math.floor(getNumberOne(this.x)));
//     console.log(z)
//     var s = (Math.floor(getNumberTwo(this.y)));
//     console.log(s)

//     rl.question(
//       "Plese input your answers: ",
//       (input) => {
//         var r = (z + s);
//         if (r == input){
//           // console.log(r);
//         console.log("Thats right")
//         }else{
//           console.log("Thats wrong")
//         }
//       }
//     )
//     break;
//     }
//   }
// );