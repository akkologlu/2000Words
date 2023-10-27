import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFavWord } from "../store/slices/favWordSlice";

function FavWord() {
  const dispatch = useDispatch();
  const { favWord } = useSelector((state) => state.favWord);
  console.log(favWord);
  return (
    <div>
      <h1>Favorite Words</h1>

      {favWord.map((item, index) => (
        <div key={index}>
          <h3>{item.english}</h3>
          <button
            onClick={() => {
              dispatch(removeFavWord({ english: item.english }));
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavWord;
