import initialState from './initialState';
import { FETCH_CHARACTERS_COMICS, RECIEVE_CHARACTERS_COMICS } from '../actions/actionTypes';

export default function characters(state = initialState.comics, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_COMICS:
      return action;
    case RECIEVE_CHARACTERS_COMICS:
      let newStateComic;
      newStateComic = action.comics;
      return newStateComic;
    default:
      return state;
  }
}
