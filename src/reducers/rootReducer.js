import { combineReducers } from "redux";
import characters from "./characterReducer";
import comics from "./comicsReducer";
import stories from "./storiesReducer";
import allComics from "./allComicsReducer";

const rootReducer = combineReducers({
  characters,
  comics,
  stories,
  allComics
});

export default rootReducer;
