const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const minimumNumber = 1;

function getNumberOne(min = 1, max = 100) {
  let x = Math.random() * (max - min) + min;
  return x;
}
 
function getNumberTwo(min = 1, max = 100) {
  let y = Math.random() * (max - min) + min;
  return y;
}

let correctAswers = [];
function askForAnswer(number1, number2) {
  return new Promise((resolve) => {
    rl.question("Please input a number answer: ", (input) => {
      let r = number1 + number2;
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
 
let output = "";
 
console.time("concatenation");
 
for (let p = 1; p < 1e6; p++) {
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
    console.log("Something went wrong with the code");
  }
  return mark;
}

rl.question("Enter the number of times you want to play: ", async (answer) => {

  for (let i = 0; i < answer; i++) {
    let number1 = Math.floor(getNumberOne(this.x));
    let number2 = Math.floor(getNumberTwo(this.y));
    if(number2>=number1){
      console.log(number2, "+", number1);
    }else{
    console.log(number1, "+", number2);
    }
    let questionAnswer = null;
    while (questionAnswer === null || isNaN(questionAnswer)) {
      questionAnswer = await askForAnswer(number1, number2);
    }
  }

  rl.close();
  console.log("You got: ", correctAswers.length, "/", answer, "right");
  let percentage = (correctAswers.length / answer);
  let mark = (Math.trunc(percentage*100));
  console.log(mark, "%");
   markResult(mark);
  console.timeEnd("concatenation");
});





// for (let i = 0; i < answer; i++) {
//   var number1 = Math.floor(getNumberOne(this.x));
//   var number2 = Math.floor(getNumberTwo(this.y));
//   if(number2>=number1){
//     console.log(number2, "+", number1);
//   }else{
//   console.log(number1, "+", number2);
//   }
//   let questionAnswer = null;
//   while (questionAnswer === null || isNaN(questionAnswer)) {
//     questionAnswer = await askForAnswer(number1, number2);
//   }
// }

  // let currentAnswer = null;
  //   while (currentAnswer === null || isNaN(currentAnswer)) {
  //     currentAnswer = await currentAnswer(answer);
  //   }
