 

 var price = document.querySelector("#price");

 var qty = document.querySelector("#qty");

 var curPrice = document.querySelector("#cur-price");
 
 var btn = document.querySelector("#btn");

 var output = document.querySelector("#output");


 function calculateProfitnLoss(initialPrice,quantity,finalPrice){
  
    if(initialPrice<=0 || quantity<=0 ||finalPrice<=0 ){
      showOutput("Invalid Input, please enter a non-zero postiive value");
   }

    if(initialPrice>finalPrice){
        
        var loss = (initialPrice-finalPrice)*quantity;
        
        var lossPerc = (loss/initialPrice)*100;

        showOutput(`Hey the Loss is ${loss} and the Loss Percentage is ${lossPerc.toFixed(2)}%`);

    }else if(finalPrice>initialPrice){
        
        var profit = (finalPrice-initialPrice)*quantity;
        
        var profitPerc = (profit/initialPrice)*100;

        showOutput(`Hey the Profit is ${profit} and the Profit Percentage is ${profitPerc.toFixed(2)}%`);

    }  else{

        showOutput("No Pain, No Gain and No Gain, No Pain!");

    }

 }

 function showOutput(message){

    output.innerText =message;
 }

 function clickHandler(){

    var initPrice = Number(price.value);

    

    var qtty = Number(qty.value);
    

    var cp = Number(curPrice.value);
    

    calculateProfitnLoss(initPrice,qtty,cp);
 }


 btn.addEventListener('click', clickHandler);
