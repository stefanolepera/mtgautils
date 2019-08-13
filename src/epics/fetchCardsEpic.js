import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_CARDS, FETCH_CARDS_ERROR } from '../actions/types';
import { fetchCardsCompleted } from '../actions/fetchCardsAction';
import { API_END_POINT } from '../utils/constants';

export const fetchCardsEpic = ($action) => $action.pipe(
    ofType(FETCH_CARDS),
    switchMap(action =>
        ajax.getJSON(`${API_END_POINT}${action.payload}`).pipe(
            map(response => fetchCardsCompleted(response.data)),
            catchError(error => of({
                type: FETCH_CARDS_ERROR,
                payload: error.response ? error.response.details : 'Network Error!'
            }))
        )
    )
);