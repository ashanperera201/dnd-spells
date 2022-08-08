import { FavoriteSpellConstants } from './constants';

const INITIAL_STATE = {
    spells: []
}

const favSpellsReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FavoriteSpellConstants.ADD_FAVORITE_SPELL:
            return {
                ...state,
                spells: [...state.spells, action.payload]
            }
        default:
            return { ...state }
    }
}

export default favSpellsReducer;