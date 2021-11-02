 

 var price = document.querySelector("#price");

 var qty = document.querySelector("#qty");

 var curPrice = document.querySelector("#cur-price");
 
 var btn = document.querySelector("#btn");

 var output = document.querySelector("#output");


 function calculateProfitnLoss(initialPrice,quantity,finalPrice){

    if(finalPrice>initialPrice){

        var profit = ((finalPrice-initialPrice)*quantity);

        var profitPerc = ((profit/initialPrice)*100);

        showOutput("Hey the Profit is ${profit} and the Profit Percentage is ${profitPerc}");

    } else if(initialPrice>finalPrice){

        var loss = ((initialPrice-finalPrice)*quantity);

        var lossPerc = ((loss/initialPrice)*100);

        showOutput("Hey the loss is ${profit} and the loss percentage is ${profitPerc}");

    } else{

        output.innerText = "No Pain, No Gain and No Gain, No Pain!";

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