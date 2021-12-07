import React from "react";
import "./App.css";
//, { useState }

const tedTalks = {
  Productivity: [
    { name: "How to Get Your Brain to Focus"
    },
    { name: "The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU"
    },
    { name: "The Secret of Becoming Mentally Strong | Amy Morin | TEDxOcala"
    },
    { name: "Why We Fear And Hold Back From What We Want | Stuti Singh | TEDxSevenoaks"
    },
    { name: "Inside the mind of a master procrastinator | Tim Urban"
    }
  ],

  Depression: [
    { name: "I Am Depressed | Dianna Paige | TEDxAllendaleColumbiaSchool"
    },
    { name: "This could be why you're depressed or anxious | Johann Hari"
    },
    { name: "Lift Depression With These 3 Prescriptions- Without-Pills | Susan Heitler | TEDxWilmington"
    }
  ],
  Aesthetics: [
    { name: "Looks aren't everything. Believe me, I'm a model. | Cameron Russell"
    },
    { name: "What makes you special? | Mariana Atencio | TEDxUniversityofNevada "
    },
    { name: "Why You Think You're Ugly | Melissa Butler | TEDxDetroit"
    }
  ],
  Entrepreneurship: [
    { name: "Entrepreneurship As A State Of Mind | Mr. Ankur Warikoo | TEDxSBSC"
    },
    { name: "How I became the youngest entrepreneur | Tilak Mehta | TEDxGSMC"
    },
    { name: "What they don't tell you about entrepreneurship | Mark Leruste | TEDxCardiff"
    }
  ]
};

var emojiLib = Object.keys(emojiDictionary);

export default function App() {
  const [selectedTheme, setTheme] = useState("productivity");

  function themeSelector(theme){
    setTheme(theme);

  }

  

  function listInteract(theme){
    console.log(theme);
  }

  return (
    <div className="ted-App">
     

       <div id="flap">
         <span id="head-text">TED</span>
         <span id="head-text-2">Recommended Talks</span>

           
             
       </div>
       <div id="theme">
         <h1>Themes</h1>
         <hr/>
         <p>
            Pick out a theme to view the best Ted Talks of the same!
         </p>
       </div>
       <nav id="nav">
          <ul>
            <li>
              <div>

             
                 {Object.keys(tedTalks).map((theme) => (
                  <button onClick={() => themeSelector(theme)}>
             
                    {theme}

                  </button>
             

                ))}
              </div>
            </li>
            

          </ul>
          

        </nav>
      <div id-="lists">

        <hr/>

        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {tedTalks[selectedTheme].map((topic) => (
              <li
                key={topic.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
              {" "}
              <div style={{ fontSize: "larger" }}> {topic.name} </div>
              {/* <div style={{ fontSize: "smaller" }}> {topic.rating} </div> */}
            </li>
            ))}
          </ul>
        </div>


        
      </div>

       










    </div>
  );
}
