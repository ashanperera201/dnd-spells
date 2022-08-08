import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import './DndHome.scss';
import Header from '../components/Header';
import SpellList from '../components/SpellList';
import FavoriteSpellsPopup from '../components/FavoriteSpellsPopup';

const DndHomePage = (props: any) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <FavoriteSpellsPopup {...props} open={open} handleClose={() => setOpen(false)} />
            <div className='spell-container'>
                <Header />
                <div className='spell-container__action'>
                    <Button variant="contained" onClick={() => setOpen(true)}>View Favorites</Button>
                </div>
                <div className="spell-container__table">
                    <SpellList />
                </div>
            </div>
        </Fragment>
    )
}

export default DndHomePage;