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


function validateNumber(q){
  if (z>s){      
    var q = Math.random() * (max - min) + min;
    console.log("Number Changed");
    console.log(q, "+", s);
  }else{
    console.log("Your a genius")
  }
  return q
}
 
let correctAswers = [];
function askForAnswer(z, s) {
  return new Promise((resolve) => {
    rl.question("Please input a number answer: ", (input) => {
      var r = z + s;
      if (r == input) {
        console.log("Thats right");
        correctAswers.push("Right");
      } else {
        console.log("Thats wrong");
      }
      resolve(input);
    });
  });
}
 
var output = "";
 
console.time("concatenation");
 
for (var p = 1; p < 1e6; p++) {
  output += p;
}

  function markResult(mark){
  if (mark < 0) {
    console.log('unfortunately you failed better next time. :)');
  }
  else if (mark >= 0 && mark <= 49){
    console.log('unfortunately you failed better next time. :)');
  }
  else if (mark >= 50 && mark <= 60) {
    console.log("Congratulations you have a pass");
  }
  else if (mark >= 61 && mark<= 80) {
    console.log("Congratulations you have a merit");
  }
  else if (mark >= 81 && mark<= 100) {
    console.log("Congratulations you have a Distinction");
  }
  else {
    console.log("Something went wrong with the coded");
  }
  return mark
} 


rl.question("Enter the number of times you want to play: ", async (answer) => {
  let currentAnswer = null;
    while (currentAnswer === null || isNaN(currentAnswer)) {
      currentAnswer = answer;
    }

  for (let i = 0; i < answer; i++) {
    var z = Math.floor(getNumberOne(this.x));
    var s = Math.floor(getNumberTwo(this.y));
    // console.log(z);
    // console.log(s);
    console.log(z, "+", s);
 
    let questionAnswer = null;
    while (questionAnswer === null || isNaN(questionAnswer)) {
      questionAnswer = await askForAnswer(z, s);
    }
  }
  rl.close();
  console.log("You got: ", correctAswers.length, "/", answer, "right");
  var percentage = (correctAswers.length / answer);
  var mark = (Math.trunc(percentage*100));
  console.log(mark, "%");
   markResult(mark);
  validateNumber(q);
  console.timeEnd("concatenation");
});









