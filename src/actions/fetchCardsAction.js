import { FETCH_CARDS, FETCH_CARDS_COMPLETED, FETCH_CARDS_ERROR } from './types';

export const fetchCards = payload => ({ 
    type: FETCH_CARDS, payload 
});

export const fetchCardsCompleted = payload => ({ 
    type: FETCH_CARDS_COMPLETED, payload 
});

export const fetchCardsError = payload => ({ 
    type: FETCH_CARDS_ERROR, payload 
});
