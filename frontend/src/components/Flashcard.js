import React, { useState } from "react";

function Flashcard({ english, turkish }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="side front">
          <h2>English</h2>
          <p>{english}</p>
        </div>
        <div className="side back">
          <h2>Turkish</h2>
          <p>{turkish}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
