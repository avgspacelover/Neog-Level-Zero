// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json


var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");
var output= document.querySelector("#output");
//

function clickevent(){
    console.log("ok");
    output.innerText=" Language: "+ input.value;
    
}



translatebtn.addEventListener("click", clickevent);


