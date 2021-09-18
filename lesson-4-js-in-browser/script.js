// https://replit.com/@tanaypratap/lessonfourapi


var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");
var output= document.querySelector("#output");



translatebtn.addEventListener("click", function clickevent(){
    console.log("ok");
    output.innerText="Language:"+ input.value;
});


