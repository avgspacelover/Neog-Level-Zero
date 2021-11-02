







function reversestring(str){
    /*
    var listOfChars = str.split('');
    var reverselist = listOfChars.reverse();
    var reversedstr = reverselist.join();

    return reversedstr ;
    same as below
    */
    
    var reversedstr = str.split('').reverse().join();




 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*
 const bdate = document.querySelector("#birthday");
 
 const palBtn = document.querySelector("#palindrome-btn");

 const output = document.querySelector("#output");






 var flag=0;
 var diff=0;

 function depreciateDate(dates){ // 01-01-2022 => 01-23-4567

    //LOOK HERE -------------------------------------------------------------------------------- <-------

    
    




 }


 function reverseString(arr){
     

    const temp=arr;
    var newArr = [];

    for(let i=0; i<= arr.length;i++){
        newArr[i]=arr[(arr.length-i)];
    }
    var flag=1;
    for(let i=0; i<= arr.length;i++){
        if(newArr[i]!=arr[i]){
            flag=0;
            break;

        }
    }

    if (flag){
        return true;
    }
 }


 function palindrome(arr){
     
    arr= number(arr);
    
    if(reverseString(arr)){

      output.innerText = "Your Birthday is a Palindrome!";

    } else{
        var val=0;

        while(val){
            
            depreciateDate(arr);

            val=reverseString(arr);

        }

        output.innerText = "Sorry! Your Birthday is not a Palindrome. You missed by " + diff +" days.";

       
        

    }

 }

 function dateToString(bdate){

    const array=str.replaceAll("-","");
    
    palindrome(array);

 }

 palBtn.addEventListener("click", dateToString);

 */