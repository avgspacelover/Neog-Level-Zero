 const sides = document.querySelectorAll(".side-input");

 const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

 const output = document.querySelector("#output");


 function calculateSumOfSquares(a,b){

    const soq = a*a + b*b ;
    return soq;
 }

 function calculateHypotenuse(){

   const sumOfSquares=  calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

   const hypoLength = Math.sqrt(sumOfSquares);

   output.innerText = "The hypotenuse Length is " + hypoLength + ".";
 }

 

 hypotenuseBtn.addEventListener("click", calculateHypotenuse);