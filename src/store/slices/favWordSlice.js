import { createSlice } from "@reduxjs/toolkit";

const favWordSlice = createSlice({
  name: "favWord",
  initialState: {
    favWord: [],
  },
  reducers: {
    addFavWord: (state, action) => {
      const wordExist = state.favWord.find(
        (item) => item.english === action.payload.english
      );
      if (wordExist) {
        alert("This word is already in your favorite list.");
        return;
      }

      state.favWord.push({
        english: action.payload.english,
        turkish: action.payload.turkish,
        example: action.payload.example,
      });
      alert("Word added to your favorite list.");
    },
    removeFavWord: (state, action) => {
      state.favWord = state.favWord.filter(
        (item) => item.english !== action.payload.english
      );
    },
  },
});

export const { addFavWord, removeFavWord } = favWordSlice.actions;
export const favWordReducer = favWordSlice.reducer;
