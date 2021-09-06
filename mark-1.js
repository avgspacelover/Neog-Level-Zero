//mark-1

//EX- 01

console.log("siddharth");


//EX- 02
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log(userName);

//EX- 03
console.log("Welcome " + userName);

// EX - 04
 var variable = readlinesync.question("whats your name? ");
 console.log("Hello " + variable);

 //Ex- 05
 var age = readlinesync.question("whats your age?");

 if (age>=25){
     console.log("right");

 } else {
     console.log("wrong");

 }

 //EX- 06
var city=readlineSync.question("Is your City New Delhi(Y/N)?");
var ct=0;
if (city=="Y"){
    ct++;
    console.log(ct);

} 

// EX- 07

function addition(n1,n2){
    var sum= n1 +n2;
    return sum;
}

addition(5,4);

//EX- 08


var count=0;
function quizcheck(userq, sysans){
    var userans=readlineSync.question(userq);
    if(userans==sysans){
        count++;
        console.log("Correct!\nScore(till now): "+ count);

    } else {
        count--;
        console.log("Wrong!\nScore(till now): "+ count);
    }



}

//EX 09

 for(var i=0;i<=5; i++){
     console.log(i +" siddharth");
 }

//HW: Star Pattern

for(var i=0;i<=5;i++){

    for(var j=0;j<=i;j++){
        console.log("*");

    }
    
}

//EX- 10

var list = ["milk","butter","jam", "juice","eggs"];
console.log(list[0]);
console.log(list[1]);
console.log(list[list.length-1]);

//EX-11

for(var i=0;i<=(list.length-1); i++){
    console.log(list[i]);
}

