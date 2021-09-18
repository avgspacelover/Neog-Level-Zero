//exercise-2

var name= prompt("Tell your name");

var answer= "Welcome here, " + name;

alert(answer);

//exercise-3

var translatebtn= document.querySelector("#translatebtn");

translatebtn.addEventListener("click", function clickevent(){
    console.log("clicked");
})

//exercise-4
var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");

translatebtn.addEventListener("click", function clickevent(){
    console.log("clicked");
    console.log("input",input.value);
})

//live-exercise

// 1-("#textInput")
// 2-(".btn-primary") 
// 3-("#input-btn) 
// 4-("[name=translator]")

//exercide-5
var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");
var output= document.querySelector("#output");
output.innerText="Translated script will be displayed here!"

translatebtn.addEventListener("click", function clickevent(){
    console.log("clicked");
    console.log("input",input.value);
})