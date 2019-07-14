import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { tap, map, switchMap, catchError, ignoreElements, take, debounceTime, filter, retry } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_CARDS, FETCH_CARDS_ERROR } from '../actions/types';
import { fetchCardsCompleted } from '../actions/fetchCardsAction';
import { API_END_POINT } from '../utils/constants';

export const fetchCardsEpic = (action$) => action$.pipe(
    ofType(FETCH_CARDS),
    debounceTime(250),
    switchMap(action$ =>
        ajax.getJSON(`${API_END_POINT}${action$.payload}`)
            .pipe(
                map(response => fetchCardsCompleted(response.data)),
                catchError(error => of({
                    type: FETCH_CARDS_ERROR,
                    payload: error.response.details
                }))
            )
        )
);

export const tryEpic = (action$) => action$.pipe(
    ofType('SET_USER'),
    take(1),
    switchMap((action$) => 
        ajax.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${action$.payload.m}`).pipe(
            retry(3),
            filter(Boolean),
            tap(response => console.log('response', response)),
            switchMap(response =>
                ajax.getJSON(`https://jsonplaceholder.typicode.com/comments?postId=${response[1].id}`).pipe(
                    tap(response => console.log('response', response)),
                    ignoreElements()
                )
            )
        )
    )
);