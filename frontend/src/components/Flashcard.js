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
          <p className="text-3xl ">{english}</p>
        </div>
        <div className="side back">
          <p className="text-3xl">{turkish}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
