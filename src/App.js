import "./App.css";
import React, { useState, useRef } from "react";
import words from "./words.json";

function App() {
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * words.length)
  );
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const inputRef = useRef();
  console.log(words.length);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === words[randomNum].turkish.toLowerCase()) {
      setAnswer("");
      setScore(score + 1);
      changeRandom();
    } else {
      setAnswer("WRONG");
    }
  };

  const handleChange = (e) => {
    const inputAnswer = e.target.value;
    const correctTurkish = words[randomNum].turkish;

    let isMatching = true;
    let isWrong = false;

    for (let i = 0; i < inputAnswer.length; i++) {
      if (inputAnswer[i] !== correctTurkish[i]) {
        isMatching = false;
        isWrong = true;
        break;
      }
    }

    if (isWrong) {
      e.target.style.color = "red";
    } else if (isMatching) {
      e.target.style.color = "green";
    } else {
      e.target.style.color = "initial";
    }

    setAnswer(inputAnswer);
  };

  const changeRandom = () => {
    setRandomNum(Math.floor(Math.random() * words.length));
  };
  console.log(words[randomNum].turkish);
  return (
    <div className="App flex flex-col items-center h-screen">
      <p className="text-9xl">{words[randomNum].english}</p>
      <p className="text-2xl mt-4">{words[randomNum].example}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          ref={inputRef}
          className="bg-zinc-100 border border-zinc-300 rounded-3xl mt-12 text-center p-4 pl-8 text-7xl min-w-64 focus:outline-none"
        />
      </form>
      <p>SKOR: {score}</p>
      {answer.length > 0 && (
        <p>
          DOĞRULUK:{" "}
          {answer === words[randomNum].turkish ? "İyi gidiyorsun" : "Değiştir!"}
        </p>
      )}
    </div>
  );
}

export default App;
