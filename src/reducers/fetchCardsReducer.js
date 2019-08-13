import { FETCH_CARDS, FETCH_CARDS_COMPLETED, FETCH_CARDS_ERROR } from '../actions/types';

const initialState = {
    fetchCardsStarted: false,
    fetchCardsError: '',
    cardsList: [],
    memberId: 0
}

export const fetchCardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                fetchCardsStarted: true,
                fetchCardsError: '',
                cardsList: []
            };
        case FETCH_CARDS_ERROR:
            console.log('action.payload', action.payload);
            return {
                ...state,
                fetchCardsStarted: false,
                fetchCardsError: action.payload
            };
        case FETCH_CARDS_COMPLETED:
            return {
                ...state,
                fetchCardsStarted: false,
                fetchCardsError: '',
                cardsList: action.payload
            };
        case 'SET_USER':
            const { m } = action.payload
            return {
                ...state,
                memberId: m
            };
        default:
            return {
                ...state
            };
    }
};