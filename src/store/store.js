import storage from "redux-persist/lib/storage";
import { favWordReducer } from "./slices/favWordSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const favWordSlicePersistConfig = {
  key: "favWord",
  storage,
};

const rootReducer = combineReducers({
  favWord: persistReducer(favWordSlicePersistConfig, favWordReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
