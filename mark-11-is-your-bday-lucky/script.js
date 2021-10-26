
 const dateOfBirth = document.querySelector("#date-of-birth");

 const luckyNumber = document.querySelector("#lucky-number");

 const checkNumberBtn = document.querySelector("#check");

 /* Testing input reception
 checkNumberBtn.addEventListener("click", function getValues(){
     console.log(typeof dateOfBirth.value, luckyNumber.value);
 })
 */


 function checkNumberIsLucky(){
     const bdate=dateOfBirth.value;
     const sum = calculateSum(bdate);
     console.log(sum);
 }

 function calculateSum(bdate){
     bdate= bdate.replaceAll("-","");
     let sum=0;

     for(let i=0; i<bdate.length; i++){

        sum += Number(bdate.charAt(index))

     }

     return sum;

 }

 checkNumberBtn.addEventlistener(){

 }
