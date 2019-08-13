import { combineEpics } from 'redux-observable';
import { fetchCardsEpic, tryEpic } from './fetchCardsEpic';

export default combineEpics(
    fetchCardsEpic,
    tryEpic
);