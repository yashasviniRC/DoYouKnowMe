var readlineSync = require("readline-sync");
var userName = readlineSync.question("your name please! ");
var score = 0;
console.log("Welcome "+ userName +" to the quiz")

var questions =[{question:"Name of my homeTown ?",answer:"bhopal"},
{question:"Name of my 1st pet?",answer:"toto"},
{question:"favorite iceCream flavour?",answer:"chocolate"}];

function playGame(question,answer) 
{
    var userAnswer= readlineSync.question(question);
    if ( userAnswer === answer)
    {
        console.log("right!");
        score=score+1;

    }
    else
    {
     console.log("oops!");
     score =score-1;
    }
    console.log("current score: ",score)
}
for ( var i=0; i<questions.length ; i++)
{
    var currentQuestion= questions[i];
    playGame(currentQuestion.question, currentQuestion.answer)
}
console.log("\n total score:" + score )
