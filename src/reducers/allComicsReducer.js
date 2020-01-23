import initialState from './initialState';
import { FETCH_ALL_COMICS, RECIEVE_ALL_COMICS } from '../actions/actionTypes';

export default function characters(state = initialState.allComics, action) {
  switch (action.type) {
    case FETCH_ALL_COMICS:
      return action;
    case RECIEVE_ALL_COMICS:
      let newStateAllComic;
      newStateAllComic = action.allComics;
      return newStateAllComic;
    default:
      return state;
  }
}
