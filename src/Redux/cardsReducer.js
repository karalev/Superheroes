import { FETCH_CARDS, FILTER_CARDS, SORT_CARDS } from './types';
const initialState = {
    cards: [],
    filter: '',
    sortOption: ''
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS: 
            return { ...state, cards: action.payload }
        case FILTER_CARDS: 
            return { ...state, filter: action.payload }

        case SORT_CARDS:
            return { ...state, sortOption: action.payload }
        default: 
            return state 
    } 
};