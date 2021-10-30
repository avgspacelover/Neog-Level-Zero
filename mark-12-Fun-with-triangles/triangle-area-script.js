 const sides = document.querySelectorAll(".side-input");

 const hypotenuseBtn = document.querySelector("#area-btn");

 const output = document.querySelector("#output");


 

 function calculateArea(){

    const area = 0.5 * (Number(sides[0].value) * Number(sides[1].value));

    console.log(area);
 
    output.innerText = "The area of the triangle  is " + area + ".";
  }



 hypotenuseBtn.addEventListener("click", calculateArea);