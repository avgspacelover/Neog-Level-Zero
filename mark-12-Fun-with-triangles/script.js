 const input= document.querySelectorAll(".angle-ip");
 
 const isTriangleBtn = document.querySelector("#triangle-check");
 
 const output = document.querySelector("#output");

 
 function calculateSumOfAllAngles(angle1, angle2, angle3 ){
    let a= Number(angle1), b= Number(angle2), c= Number(angle3);
    if(a<=0 || b<=0 || c<=0){
      output.innerText = "Invalid Input, please enter a non-zero postiive value"
      return 0;
    }
    const sumofangles =  a + b + c;
    return sumofangles;
 }

 
 function isTriangle(){
     
    const sumOfangles =calculateSumOfAllAngles(input[0].value, input[1].value, input[2].value);
    console.log(sumOfangles);
   if(sumOfangles >0){
     if(sumOfangles === 180){

         output.innerText = "The angles form a Triangle!";

     } else {

         output.innerText = "The angles don't form a Triangle!";

     }
   }

 }


 isTriangleBtn.addEventListener("click", isTriangle);
