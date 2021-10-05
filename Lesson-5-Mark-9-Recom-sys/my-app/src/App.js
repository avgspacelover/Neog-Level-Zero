import React from "react";
import "./App.css";
//, { useState }

// var emojiDictionary = {
//   "😊": "smiling",
//   "😳": "disbelief",
//   "😔": "sad",
//   "🥡": "takeout box",
//   "❤️": "love",
//   "😑": "annoyance"
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

  return (
    <div className="Emoji-App">
      {/* <h1>{heading}</h1>

      <h4> Welcome to Emoji Translation DB!</h4>
      <br />

      <h5>
        Enter the Emoji to see it's meaning <br /> or <br />
        Hover over the palette below
      </h5>

      <br />

      <input onChange={emojiInteract} />

      <h2 style={{ fontWeight: "bold" }}> {meaning}</h2>

      <br />

      <h3> Emoji Database </h3>
      <br />

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

           <li>
             hello

           </li>
           fuck

           <li>
             you

           </li>

           <li>

           </li>

          </ul>
       </nav>










    </div>
  );
}
