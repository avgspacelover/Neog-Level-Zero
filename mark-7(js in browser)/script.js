// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
// https://replit.com/@tanaypratap/lessonfourapi


var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");
var output= document.querySelector("#output");

var url ="https://api.funtranslations.com/translate/ferb-latin.json";

function ferbtranslate(text){
    return url + "?" + "text=" + text;
}
//

function errorhandle(error){
    console.log("error occured", error);
    alert("server issues, try again in some time");
}

function clickevent(){
    console.log("ok");
    var textq= input.value;
    fetch(ferbtranslate(textq))
      .then(response => response.json())
      .then(json => { var translatedText = json.contents.translated;
                     console.log(json.contents.translated)
                      output.innerText = translatedText;
                    } 
           )

      .catch(errorhandle)
    
    
}



translatebtn.addEventListener("click", clickevent);


