//https://neog.camp/guide/mark-10


 const billAmount = document.querySelector("#bill-amt") ;
 
 const cashGiven = document.querySelector("#cash-given");
 
 const checkButton= document.querySelector("#check");

  const message= document.querySelector("#error-message");

//  console.log(cashGiven.value);
//  billAmount.addEventListener


 checkButton.addEventListener("click", function validateBillnCashAmt(){
    if( billAmount.value >0){
        if(cashGiven.value >= billAmount.value){
            const amountTobeReturned = cashGiven.value;

            calculateChange(amountToBeReturned);

        } else{
            showMessage(
                "The cash provided should atleast be equal to the bill amount"
            );
             
        }

    } else{
          message.innerText = "The bill amount should be greater than 8"
    }
});

function calculateChange();


function showMessage(){
    message.style.display="block";
    message.innerText = message;
}