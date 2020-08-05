import { combineReducers } from 'redux';

import { cardsReducer } from './cardsReducer';
import { appReducer} from './appReducer';

export const rootReducer = combineReducers({
    cards: cardsReducer,
    app: appReducer
})