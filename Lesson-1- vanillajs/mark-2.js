// Suits_Fandom_Quiz[Level 1 assignment 1.2]

var readlineSync = require('readline-sync');

var questionbank= [
  {
    question:"Name the only protagonist in the show w/o a degree ",
    answer: "mike",
  },
  {
    question:"Which of the love interests of Harvey had the most conflicting relationship? ",
    answer: "scottie",
  },
  {
    question:"Who ousted Mike to the US govermment? ",
    answer:"sheila",
  },
  {
    question:"Who was Harvey's arch nemesis? ",
    answer:"tanner",
  },
  {
    question:"who had a history of always ducking Harvey? ",
    answer:"elliot",
  },
  {
    question:"In which season were Mike and Harvey on opposite sides of a hostile takeover battle? ",
    answer:"4",
  },
  {
    question:"who uses Mike's secret to get their name on the wall of the firm? ",
    answer:"louis",
  },
  {
    question:"which Law School does Rachel go to? ",
    answer:"columbia",    
  },
  {
    question:"who is harvey's best friend in SEC?(last name will do)",
    answer:"cahill",
  },
  {
    question:"who was the opposing counsel in the ultimate criminal lawsuit against Mike(last name will do)? ",
    answer:"gibbs",
  }

]
var score=0;
console.log(" Welcome to SUITS FANDOM QUIZ!");
console.log(" answer questions in small case and the names are set as they are called out in the show :)");

for (var i = 0; i < 10; i++) {

     var q = questionbank[i];
     game(q.question, q.answer);

 }

 var finalscore=score;
 
 console.log("The Final score is: ",finalscore);


function game(userq,userans){
  var userprompt = readlineSync.question(userq);

  if(userprompt==userans){
   score++;
   console.log("Correct! Your score is: "+ score);
  } else{
    score--;
    console.log('Wrong! Your score is: '+ score);
  }
}

var highcores = [{
         name: "vedant",
         score: 7,
     },
     {
         name: "riya",
         score: 3,
     },
     {
        name: "divyaansh",
         score: 6,
     }
 ];


