//https://neog.camp/guide/mark-10


 const billAmount = document.querySelector("#bill-amt") ;
 
 const cashGiven = document.querySelector("#cash-given");
 
 const checkButton= document.querySelector("#check");

 const message= document.querySelector("#error-message");
 
 const availableNotes = [2000,500,100,50,20,10,5,1];

 const noOfNotes = document.querySelectorAll('.numofnotes');


//  console.log(cashGiven.value);
//  billAmount.addEventListener


 checkButton.addEventListener("click", function validateBillnCashAmt(){
    
    hideMessage();
    if( billAmount.value >0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);

        } else{
            showMessage("Do you want to WASH PLATES??");
             
        }

    } else{
        showMessage("Invalid Bill Amount");
    }
});

function hideMessage(){
    message.style.display="none";


}

function calculateChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes= Math.trunc( amountToBeReturned/availableNotes[i]);// 0/2000=0

        amountToBeReturned %= availableNotes[i]; //0%2000=0
        noOfNotes[i].innerText = numberOfNotes;
    }

};


function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}