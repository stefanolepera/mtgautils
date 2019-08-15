import { combineEpics } from 'redux-observable';
import { fetchCardsEpic } from './fetchCardsEpic';

export default combineEpics(
    fetchCardsEpic
);