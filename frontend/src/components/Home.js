import React, { useState, useRef, useEffect } from "react";
import words from "../words.json";
import { TbBulb } from "react-icons/tb";
import { AiFillCheckCircle } from "react-icons/ai";
import { createWord } from "../api/api";

function Home() {
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * words.length)
  );
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const inputRef = useRef();
  const [wordCountHint, setWordCountHint] = useState(0);
  const [letterCountHint, setLetterCountHint] = useState(0);

  useEffect(() => {
    const correctWordArray = words[randomNum].turkish.split(/\s+/);
    const correctLetterCount = words[randomNum].turkish.replace(
      /\s+/g,
      ""
    ).length;
    setWordCountHint(correctWordArray.length);
    setLetterCountHint(correctLetterCount);
  }, [randomNum]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === words[randomNum].turkish.toLowerCase()) {
      setAnswer("");
      setScore(score + 1);
      changeRandom();
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
    setWordCountHint(0);
    setLetterCountHint(0);
  };
  return (
    <div className="App bg-gray-900 h-screen text-white flex flex-col items-center justify-center text-center">
      <p className="md:text-9xl text-5xl">{words[randomNum].english}</p>
      <p className="mid:text-2xl text-xl mt-4">{words[randomNum].example}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          ref={inputRef}
          className="bg-zinc-100 py-2 border border-zinc-300 rounded-3xl mt-12 text-center  md:text-7xl text-3xl md:min-w-64 focus:outline-none"
        />
      </form>

      {wordCountHint > 0 && letterCountHint > 0 && (
        <div className="flex items-center space-x-8 md:text-3xl text-xl mt-12">
          <TbBulb />
          <p>
            {wordCountHint} kelime ve {letterCountHint} harf içeriyor.
          </p>
        </div>
      )}
      <div>
        <button
          onClick={() => {
            createWord({
              english: words[randomNum].english,
              turkish: words[randomNum].turkish,
              example: words[randomNum].example,
            });
          }}
        >
          <p className="md:text-2xl text-xl mt-12">Kelime Listesine Ekle</p>
        </button>
      </div>
      <div className="flex items-center space-x-3 mt-24 md:text-5xl text-2xl">
        <AiFillCheckCircle />
        <p>{score}</p>
      </div>
    </div>
  );
}

export default Home;
