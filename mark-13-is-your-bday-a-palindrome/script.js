function reversestring(str) {
    /*
    var listOfChars = str.split('');
    var reverselist = listOfChars.reverse();
    var reversedstr = reverselist.join();

    return reversedstr ;
    same as below
    */

    var reversedstr = str.split('').reverse().join();

}

function isPalindrome(str) {

    return ((reversestring(str)) == str)
}



function dateToString(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    };


    if (date.day < 10) {

        dateStr.day = '0' + date.day;

    } else {

        dateStr.day = date.day.toString();

    }

    if (date.month < 10) {

        dateStr.month = '0' + date.month;

    } else {

        dateStr.month = date.month.toString();

    }

    if (date.year < 10) {

        dateStr.year = '0' + date.year;

    } else {

        dateStr.year = date.year.toString();

    }

}

var date = {
    day: 5,
    month: 12,
    year: 2020,
}

function getAllDateformats(date) {

    var dateStr = dateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [dmmyyyy, mddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}


function checkPalindromeForAllFormats(date) {

    var lisOfPalindromes = getAllDateformats(date);

    var isitPalindrome = false;

    for (let i = 0; i <= lisOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {

            isitPalindrome = true;
            break;
        }
    }

    return isPalindrome;

}

function leapyear(year) {

    if (year % 400 == 0) {
        return true;
    }

    if (year % 100 == 0) {
        return false;
    }

    if (year % 4 == 0) {
        return true;

    }

    return false;

}

function getNextDate(date) {

    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month == 2) {
        if (leapyear(year)) {
            If(day >29)
              day=1;
              month++;
            
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }

    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if(month>12){
        month=1;
        year++;
    }

    return {
        day:day,
        month: month,
        year: year,
    }


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