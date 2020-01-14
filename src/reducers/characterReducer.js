import initialState from './initialState';
import {FETCH_CHARACTERS,RECIEVE_CHARACTERS} from '../actions/actionTypes';

export default function characters(state = initialState.characters, action){
    
    switch(action.type){
        case FETCH_CHARACTERS:
            return action;
        case RECIEVE_CHARACTERS:
            let newState;
            newState = action.characters;
            return newState;
        default:
            return state;

    }
}