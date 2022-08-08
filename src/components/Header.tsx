import React from 'react';
import Typography from '@mui/material/Typography';
import './styles/Header.scss';

const Header = (props: any) => {
    return (
        <Typography className='header-container' variant='h3' margin={2} >
            DND 5 Spells
        </Typography>
    )
}

export default Header;