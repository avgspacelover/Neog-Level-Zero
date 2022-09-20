 const sides = document.querySelectorAll(".side-input");

 const hypotenuseBtn = document.querySelector("#area-btn");

 const output = document.querySelector("#output");


 

 function calculateArea(){
  
   let a = Number(sides[0].value);
   let b= Number(sides[1].value);
  
   if(a<=0 || b<=0){
    output.innerText = "Invalid Input, please enter a non-zero postiive value";
   } else {

     const area = 0.5 *a*b ;

     console.log(area);
 
     output.innerText = "The area of the triangle  is " + area + ".";
   }
  }



 hypotenuseBtn.addEventListener("click", calculateArea);
