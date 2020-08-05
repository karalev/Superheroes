import { FETCH_CARDS, FILTER_CARDS, SORT_CARDS } from "./types";

export function fetchCards() {
    return async dispatch => {
        // I couldn't find another way to request an array of entries from superheroapi API.
        const response = await fetch('https://superheroapi.com/api.php/1021052214994020/search/black');
        const json = await response.json()
        dispatch({ type: FETCH_CARDS, payload: json.results })
    }
}

export function filterCards(filter) {
    return dispatch => dispatch({ type: FILTER_CARDS, payload: filter })
}

export function sortCards(option) {
    return dispatch => dispatch({ type: SORT_CARDS, payload: option })
}
