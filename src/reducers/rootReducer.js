import { combineReducers } from 'redux';
import characters from './characterReducer';
import comics from './comicsReducer';
import stories from './storiesReducer';

const rootReducer = combineReducers({
  characters,
  comics,
  stories
});

export default rootReducer;
