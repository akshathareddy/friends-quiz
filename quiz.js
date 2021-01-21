var readLineSync = require('readline-sync');
var chalk = require('chalk');
var proceed = chalk.bold.red;
var levelUpgrade = chalk.blue.bold.bgWhite;
var success = chalk.bold.green;
var score = 0;


//asks the user if he/she wants to continue
function nextLevel(){
  var res = readLineSync.keyInYN(proceed("Do you want to continue?"));
  return res;
}

//updates level
function scoreCheck(){
  var level;
  if(score%3==0)
  {
    level = score/3;
      if(level<3){
        console.log(levelUpgrade("Congratulations!!! You've reached Level: "+level));
        if(!nextLevel())  
          return "exit"
      }
  }    
}

//checks for the correct answers
function quiz(que,ans){
  var userAns = readLineSync.question(que);
  if(ans==userAns){
     score++;
     return scoreCheck();
  } 
}

//users with high scores
var highScore = [
  {
    name: 'Akki',
    score: 9
  }
];

//questions and answers list
var listOfQA = [
  {
    question: "What's my favourite color?",
    answer: 'black'
  },
  {
    question: "coffee? or hot chocolate?",
    answer: 'hot chocolate'
  },
  {
    question: "jeans? or shorts?",
    answer: "jeans"
  },
  {
    question: "winter? or summer?",
    answer: "winter"
  },
  {
    question: "talking? or texting?",
    answer: "texting"
  },
  {
    question: "dark colors? or light?",
    answer: "dark colors"
  },
  {
    question: "makeup? or no makeup?",
    answer: "no makeup"
  },
  {
    question: "dancing? or singing?",
    answer: "dancing"
  },
  {
    question: "How many schools did I go to?",
    answer: 3
  }
]


console.log("This is a Quiz on how well you know Akki \n")
var userName = readLineSync.question("Who are You?");
console.log(new Array(30).join(" "),"Akki's Quiz");

/*
  This loop calls 2 functions to update scores and levels
 */
for(var qa=0;qa<listOfQA.length;qa++){
  if(quiz(listOfQA[qa].question,listOfQA[qa].answer)=="exit")
  {
    console.log(proceed("You quit the QUIZ!!"));
    break;
  }
}

//checks if the user has made a new highscore
highScore.some(function(index){
  if(index.score==score)
    console.log(success("Yayy..!! You've reached a new high score"))
});

console.log(chalk.underline("Hey "+chalk.keyword('orange')(userName)+", your score is:",score));