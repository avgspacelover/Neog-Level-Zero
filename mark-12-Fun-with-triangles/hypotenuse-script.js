 const sides = document.querySelectorAll(".side-input");

 const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

 const output = document.querySelector("#output");


 function calculateSumOfSquares(a,b){

   if(a<=0 || b<=0){
    output.innerText = "Invalid Input, please enter a non-zero postiive value";
    return 0;
   }else {
     const soq = a*a + b*b ;
     return soq;
   }
 }

 function calculateHypotenuse(){

   const sumOfSquares=  calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

   if(sumOfSquares>0){
    const hypoLength = Math.sqrt(sumOfSquares);

    output.innerText = "The length of the Hypotenuse is " + hypoLength.toFixed(2) + ".";
   }
 }

 

 hypotenuseBtn.addEventListener("click", calculateHypotenuse);
