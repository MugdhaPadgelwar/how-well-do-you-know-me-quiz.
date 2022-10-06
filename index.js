var readlineSync = require('readline-sync');
var question = [
  {
    question: "In which city do I live for my college?\n a. Nagpur \n b.Pune \n c.Mumbai \n d.Nashik\n",
    correctOpt: "a",
    answer: "I live in Nagpur."
  },
  {
    question: "which is my favourite  series?\n a. Stranger Things  \n b.Friends \n c.Dark \n d.The office\n",
    correctOpt: "c",
    answer: "Obsessed with Dark."
  },
  {
    question: "What is my date of birth?\n a.29 July 1999  \n b.28 July 2004 \n c.27 July 2002 \n d.29 July 2002\n",
    correctOpt: "d",
    answer: "My date of birth is 29 July 2002."
  },
  {
    question: "Which food item makes me the happiest ?\n a.Pizza \n b.Momos \n c.Fries  \n d.Burger\n",
    correctOpt: "b",
    answer: "Momos are my happy food."
  },

  {
    question: "What is my favourite Chocalate ?\n a.Dairy Milk \n b.Kitkat \n c.5 star \n d.Munch\n",
    correctOpt: "b",
    answer: "Kitkat is my favourite."
  },

]

var score = 0;
var userName = readlineSync.question("What is your name?");
console.log("\nWelcome " + userName);
console.log("\n-------------Here we Go-------------");
function play(question, correctOpt, answer) {


  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === correctOpt.toUpperCase()) {
    console.log("\n Great,you are right!\n");
    score = score + 1;
  }
  else {
    console.log("\n Sad,you are wrong!\n");
    score = score - 1;
    console.log(answer + "\n");
  }
  console.log("Your score: " + score + "\n");
  finalScore(score);
}

for (let i = 0; i < question.length; i++) {

  var currentQue = question[i];
  play(currentQue.question, currentQue.correctOpt, currentQue.answer);

}


function finalScore(score) {
  console.log("Your final score is: " + score);
}
