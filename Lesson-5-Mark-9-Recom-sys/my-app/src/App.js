import React from "react";
import "./App.css";
//, { useState }

// const tedTalks = {
//   productivity: [
//     { name: "Eloquent JavaScript"
//     },
//     { name: "You Don't Know JS"
//     }
//   ],

//   depression: [
//     {
//       name: "Shiva Trilogy"
//     },
//     {
//       name: "Harry Potter and the Sorcerer's Stone"
//     }
//   ],
//   Aesthetics: [
//     {
//       name: "Never Split the Difference"
//     },
//     {
//       name: "Loonshots",
//       rating: "5/5"
//     }
//   ],
//   Entrepreneurship: [
//     {
//       name: "Never Split the Difference"
      
//     },
//     {
//       name: "Loonshots"
//     }
//   ]
// };

// var emojiLib = Object.keys(emojiDictionary);

export default function App() {
  // const [meaning, setMeaning] = useState("");

  // var heading = "Emoji Pedia";

  // function emojiInteract(event) {
  //   var userInput = event.target.value;

  //   var meaning = emojiDictionary[userInput];

  //   if (meaning === undefined) {
  //     meaning = "Unavailable in the database :(";
  //   }
  //   setMeaning(meaning);
  // }

  // function emojiClickHandle(emoji) {
  //   var meaning = emojiDictionary[emoji];
  //   console.log(emoji);
  //   setMeaning(meaning);
  // }

  function listInteract(theme){
    console.log(theme);
  }

  return (
    <div className="Emoji-App">
      {/* 

      

      

      <h2 style={{ fontWeight: "bold" }}> {meaning}</h2>

      

      {emojiLib.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandle(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
       */}

       <div id="flap">
         <span id="head-text">TED</span>
         <span id="head-text-2">Recommended Talks</span>

           
             
       </div>
       <div id="theme">
         <h1>Themes</h1>
         <hr/>
       </div>
       <nav id="nav">
          <ul>

           <li onClick={listInteract}>
             Productivity

            </li>

            <li>
             Depression

            </li>

            <li>
             Aesthetics

            </li>
            
            <li>
             Entrepreneurship            

            </li>

          </ul>
          

        </nav>
        <div id-="lists">
          <hr/>
        
        </div>

       










    </div>
  );
}
