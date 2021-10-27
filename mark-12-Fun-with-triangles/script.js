 const input= document.querySelectorAll(".angle-ip");
 
 const isTriangleBtn = document.querySelector("#triagle-check");
 
 const output = document.querySelector("#output");

 
 function calculateSumOfAllAngles(angle1, angle2, angle3 ){

    const sumofangles = Number(angle1 + angle2 + angle3);
    return sumofangles;
 }

 
 function isTriangle(){
     
    const sumOfangles =calculateSumOfAllAngles(input[0].value, input[1].value, input[2].value);

    if(sumOfangles == 180){
        
        output.innerText = "The angles form a Triangle!";

    } else {

        output.innerText = "The angles don't form a Triangle!";

    }

 }


 isTriangleBtn.addEventListener("click", isTriangle);