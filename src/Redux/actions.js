import { FETCH_CARDS, FILTER_CARDS, SORT_CARDS, SHOW_LOADER, HIDE_LOADER } from "./types";

export function fetchCards() {
    return async dispatch => {
        dispatch({type: SHOW_LOADER});
        // I couldn't find another way to request an array of entries from superheroapi API.
        const response = await fetch('https://superheroapi.com/api.php/1021052214994020/search/black');
        const json = await response.json();
        dispatch({ type: FETCH_CARDS, payload: json.results });
        dispatch({type: HIDE_LOADER});
    }
}

export function filterCards(filter) {
    return { type: FILTER_CARDS, payload: filter }
}

export function sortCards(option) {
    return { type: SORT_CARDS, payload: option }
}
