const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What do you think of node.js? ",(answer)=>{
    // var max = parseInt(answer, 10);
    function getNumberOne(min = 1, max=answer) {
        var x = Math.random() * (max - min) + min;
        console.log(Math.floor(x))
      }
  rl.close();
});





var z = Math.floor(getNumberOne(this.x));
      console.log(z)