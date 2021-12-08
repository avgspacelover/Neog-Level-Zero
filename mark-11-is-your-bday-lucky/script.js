
 const dateOfBirth = document.querySelector("#date-of-birth");

 const luckyNumber = document.querySelector("#lucky-number");

 const checkNumberBtn = document.querySelector("#check");

 const outputBox = document.querySelector("#output");

 /* Testing input reception
 checkNumberBtn.addEventListener("click", function getValues(){
     console.log(typeof dateOfBirth.value, luckyNumber.value);
 })
 */
 




 function comparevalues(sum,luckyNumber){
     if(sum%luckyNumber==0){
         outputBox.innerText="Your Birthday is Lucky!";

     } else{
        outputBox.innerText="Your birthday is not Lucky";
     }

 }

 function checkBirthdayIsLucky(){
     const bdate=dateOfBirth.value;
     console.log(bdate);
     const sum = calculateSum(bdate);
     if(sum&&bdate){
         comparevalues(sum,luckyNumber.value);
     } else{
         outputBox.innerText="Please enter both the fields!!!!";
     }
 }

 function calculateSum(bdate){
     bdate= bdate.replaceAll("-","");
     console.log(bdate);
     let sum=0;

     for(let i=0; i<bdate.length; i++){

        sum = sum + Number(bdate.charAt(i));   // typecasting string => number

     }

     return sum;

 }

 checkNumberBtn.addEventListener('click', checkBirthdayIsLucky);
