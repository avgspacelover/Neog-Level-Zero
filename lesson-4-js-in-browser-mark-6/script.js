// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
// https://replit.com/@tanaypratap/lessonfourapi


var translatebtn= document.querySelector("#translatebtn");
var input= document.querySelector("#text-input");
var output= document.querySelector("#output");

var url ="https://funtranslations.com/translate/minion.json";

function miniontranslate(text){
    var t = encodeURI(text);
    return `${url}?text=${t}`;
    
    
}
//

function errorhandle(error){
    console.log("error occured", error);
    alert("server issues, try again in some time");
}

function clickevent(){
    console.log("ok");
    var textq= input.value;
    fetch(miniontranslate(textq))
      .then(response => response.json())
      .then(json => { var translatedText = console.log(json.contents.translated);
                      output.innerText = translatedText;
                    } 
           )

      .catch(errorhandle)
    
    
}



translatebtn.addEventListener("click", clickevent);


