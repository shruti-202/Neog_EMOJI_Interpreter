import React, { useState } from "react";
import "./styles.css";

var emojiPedia = {
  "👩‍🎓": "Student",
  "👩‍🍳": "Woman Cook",
  "👩‍⚖️": "Woman Judge",
  "🤰": "Mother",
  "👩‍🔬": "Woman Scientist",
  "👩‍✈️": "Woman Pilot",
  "🤷‍♀️": "Woman Shrugging",
  "👩‍🌾": "Woman Farmer",
  "👩‍🔧": "Woman Mechanic",
  "👩‍💻": "Woman Technologist",
  "👸": "Princess",
  "👩‍🎨": "Woman Artist",
  "👩‍🚀": "Woman Astronaut",
  "👩‍🚒": "Woman Firefighter",
  "👮‍♀️": "Woman Police Officer"
};

var emojiDisplay = Object.keys(emojiPedia); //converting Objects into array in React

export default function App() {
  var [userType, setUserType] = useState("");
  function emojiTypeHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiPedia[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Oops! Sorry this emoji doesn't exists in our database";
    }
    setUserType(emojiMeaning);
  }
  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiPedia[emoji];
    setUserType(emojiMeaning);
    console.log("clicked", emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiTypeHandler}></input>
      <h4> Meaning of this Emoji:{userType}</h4>
      <ul>
        {emojiDisplay.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "1.9rem", padding: "0.3rem" }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
      <hr />
      <h5>Hope you find it useful:)</h5>
      <br></br>
    </div>
  );
}
