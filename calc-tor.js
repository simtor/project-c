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


const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const minimumNumber = 1;
 
function getNumberOne(min = 1, max = 100) {
  var x = Math.random() * (max - min) + min;
  return x;
}
 
function getNumberTwo(min = 1, max = 100) {
  var y = Math.random() * (max - min) + min;
  return y;
}

let correctAswers = [];
var sum = correctAswers.reduce(function(a, b){
    return a + b;
}, 0);
 

console.log(sum); // Prints: 15
function askForAnswer(z, s) {
  return new Promise((resolve) => {
    rl.question("Plese input your answers: ", (input) => {
      var r = z + s;
      if (r == input) {
        console.log("Thats right");
        correctAswers.push(1);
        // console.count(correctAswers);
      } else {
        console.log("Thats wrong");
      }
      resolve();
      console.count(correctAswers);
     //console.log(correctAswers);
    });
  });
}
 
rl.question("Enter the number of times you want to play: ", async (answer) => {
  for (let i = 0; i < answer; i++) {
    var z = Math.floor(getNumberOne(this.x));
    console.log(z);
    var s = Math.floor(getNumberTwo(this.y));
    console.log(s);
 
    await askForAnswer(z, s);
  }
  rl.close();
});