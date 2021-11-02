







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

 function isPalindrome(str){

    if ((reversestring(str))== str){

        return true;

    } else{

        return false;
    }
 }

 if(date.month){
     console.log("hey");
 }
 
  function dateToString(date){

    var dateStr = { day: '' , month: '' , year: ''};


    if (date.day <10){
        
        dateStr.day = '0' + date.day;

    } else{
        
        dateStr.day = date.day.toString();

    }

    if (date.month <10){
        
        dateStr.month = '0' + date.month;

    } else{
        
        dateStr.month = date.month.toString();

    }

    if (date.year <10){
        
        dateStr.year = '0' + date.year;

    } else{
        
        dateStr.year = date.year.toString();

    }
      
    
    
      
      

    




  }

  var date={
      day: '5',
      month: "12",
      year: "2020",
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