const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const minimumNumber = 1;
 
rl.question(
  "Enter the maximum number of the randomly generated value: ",
  (answer) => {
    var i;
    for (i = 0; i < answer; i++){
      // const minimumNumber = 1;
    function getNumberOne(min = 1, max = 100){
      var x = Math.random() * (max - min) + min;
      return (x);
    // console.log(x);
    }

    function getNumberTwo(min = 1, max = 100){
      var y = Math.random() * (max - min) + min;
      return (y);
    // console.log(x);
    }

    var z = (Math.floor(getNumberOne(this.x)));
    console.log(z)
    var s = (Math.floor(getNumberTwo(this.y)));
    console.log(s)

    var r = (z + s);
    console.log(r);

    }
  }
);

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
