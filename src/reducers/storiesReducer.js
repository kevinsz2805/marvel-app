import initialState from './initialState';
import { FETCH_CHARACTERS_STORIES, RECIEVE_CHARACTERS_STORIES } from '../actions/actionTypes';

export default function characters(state = initialState.stories, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_STORIES:
      return action;
    case RECIEVE_CHARACTERS_STORIES:
      let newStateStorie;
      newStateStorie = action.stories;
      return newStateStorie;
    default:
      return state;
  }
}
