import React from "react";
import "./App.css";
//, { useState }

// const tedTalks = {
//   productivity: [
//     { name: "How to Get Your Brain to Focus"
//     },
//     { name: "The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU"
//     },
//     { name: "The Secret of Becoming Mentally Strong | Amy Morin | TEDxOcala"
//     },
//     { name: "Why We Fear And Hold Back From What We Want | Stuti Singh | TEDxSevenoaks"
//     },
//     { name: "Inside the mind of a master procrastinator | Tim Urban"
//     }
//   ],

//   depression: [
//     { name: "I Am Depressed | Dianna Paige | TEDxAllendaleColumbiaSchool"
//     },
//     { name: "This could be why you're depressed or anxious | Johann Hari"
//     },
//     { name: "Lift Depression With These 3 Prescriptions- Without-Pills | Susan Heitler | TEDxWilmington"
//     }
//   ],
//   aesthetics: [
//     { name: "Looks aren't everything. Believe me, I'm a model. | Cameron Russell"
//     },
//     { name: "What makes you special? | Mariana Atencio | TEDxUniversityofNevada "
//     },
//     { name: "Why You Think You're Ugly | Melissa Butler | TEDxDetroit"
//     }
//   ],
//   entrepreneurship: [
//     { name: "Entrepreneurship As A State Of Mind | Mr. Ankur Warikoo | TEDxSBSC"
//     },
//     { name: "How I became the youngest entrepreneur | Tilak Mehta | TEDxGSMC"
//     },
//     { name: "What they don't tell you about entrepreneurship | Mark Leruste | TEDxCardiff"
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
          

           <li>
              <button onClick={listInteract}>
             
                Productivity

              </button>
             

            </li>
            

            <li>
              <button onClick={listInteract}>

                Depression

              </button>

            </li>

            <li>
              <button onClick={listInteract}>

               Aesthetics

              </button>

            </li>
            
            <li>
              <button onClick={listInteract}>

                Entrepreneurship 
                
              </button>           

            </li>

          </ul>
          

        </nav>
        <div id-="lists">
          <hr/>
        
        </div>

       










    </div>
  );
}