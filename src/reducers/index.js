import { combineReducers } from 'redux';
import { fetchCardsReducer } from './fetchCardsReducer';

export default combineReducers({
    cards: fetchCardsReducer
});