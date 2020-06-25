const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question
function getNumberOne(min = 1, max = 100) {
    var x = Math.random() * (max - min) + min;
    console.log(Math.trunc(x))
  }
  getNumberOne();
//   (Math.trunc(getNumberOne(this.x))