 
 const quizForm = document.querySelector(".quiz-form");
 
 const submitAnswerBtn = document.querySelector("#submit-btn");

 const output = document.querySelector("#output");

 const correctAnswers = ["90°","Right angled","One","80","4"];


 function calculateScore() {

    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    console.log(formResults);
    
    for( let value of formResults.values()){

        console.log(formResults.value);

        if(value == correctAnswers[index]){
            score= score+1;
        }

        index= index+1;
    }

    output.innerText = "Your Score is " + score;

 }

 submitAnswerBtn.addEventListener('click',calculateScore);


