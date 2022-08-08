import { FavoriteSpellConstants } from './constants';

export const addSpells = (spells: any) => ({
    type: FavoriteSpellConstants.ADD_FAVORITE_SPELL,
    payload: spells
});
