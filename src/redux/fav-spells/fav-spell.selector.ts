import { createSelector } from 'reselect';

const selectSpells = (state: any) => state.spells;

export const selectSpellList = createSelector(
    [selectSpells],
    (spells) => {
        return spells.spells
    }
)

