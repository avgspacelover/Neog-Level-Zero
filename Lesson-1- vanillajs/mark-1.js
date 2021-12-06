//MARK-1 ASSIGNMENT
//QUIZ FOR FRIENDS

var readlineSync = require('readline-sync');


var quespool=[{
    question: "Who is my favorite superhero?\n",
    ans: "Batman"
  }, {
    question: "Who is my favorite director?\n",
    ans: "christopher nolan"
  }, {
    question: "Whats is my favorite TV Show?\n",
    ans: "brooklyn nine-nine"
  }, {
    question: "Whats is my favorite movie?\n",
    ans: "Interstellar"
  }, {
    question: "Whats is my favourite dish?\n",
    ans: "kheer"
  },  {
    question: "Whats is my favourite sport?\n",
    ans: "football"
  },{
    question: "Who is my favorite sportsperson?\n",
    ans: "rafael nadal"
  }, {
    question: "Who is my favorite music artist\n",
    ans: "ajr"
  }];
  
console.log("How well do you know Siddharth?\n\n");

var countit=0;

for (var i=0; i<quespool.length ;i++){
    var ques= quespool[i].question;
    var answ= quespool[i].ans;
    quizxx(ques,answ);

}
var highscore= [];
var max=0;

for (var i=0; i<highscore.length;i++){
    if (highscore[i]>max){
        max=highscore[i];
    }
}

if(countit>max){
    console.log("Congrats, you set the high score!");
}


highscore.push(countit); 


function quizxx(ques,answ){
        
    var userans=readlineSync.question(ques);
    if(userans.toLowerCase==answ){
        countit++;
        console.log("Correct!\nScore(till now): "+ countit);

    } else {
        countit--;
        console.log("Wrong!\nScore(till now): "+ countit);
    }



}


