import { createStore, combineReducers } from 'redux';
import favSpellsReducer from './fav-spells/fav-spell.reducer';

const reducers = combineReducers({
    spells: favSpellsReducer,
})

const store = createStore(
    reducers,
)

export default store;