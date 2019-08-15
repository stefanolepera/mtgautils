import { of, from } from 'rxjs';
import { map, switchMap, catchError, debounceTime, } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_CARDS, FETCH_CARDS_ERROR } from '../actions/types';
import { fetchCardsCompleted } from '../actions/fetchCardsAction';
import { fetchData } from '../services/APIService';
import { API_END_POINT } from '../utils/constants';

export const fetchCardsEpic = (action$) => action$.pipe(
    ofType(FETCH_CARDS),
    debounceTime(250),
    switchMap(action$ =>
        from(fetchData(`${API_END_POINT}${action$.payload}`))
            .pipe(
                map(response => fetchCardsCompleted(response.data.data)),
                catchError(error => of({
                    type: FETCH_CARDS_ERROR,
                    payload: error.response.details
                }))
            )
        )
);