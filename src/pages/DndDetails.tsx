import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import './DndDetails.scss'

const DndDetails = (props: any) => {

    let location = useLocation();

    const [spellDetail, setSpellDetail] = useState<any>();

    useEffect(() => {
        const state: any = location.state;
        fetchDetails(state);
    }, [location]);

    const fetchDetails = async (state: any) => {
        if (state) {
            axios.get(`http://www.dnd5eapi.co${state.url}`).then(serviceRes => {
                if (serviceRes && serviceRes.data) {
                    setSpellDetail(serviceRes.data);
                }
            })
        }
    }


    return (
        <div className="details-container">
            <Typography variant='h3' margin={3} className="details-container__header">
                Spell Detail
            </Typography>
            <Typography variant='h6' fontWeight={'500'} marginLeft={3} className={'spell'}>
                <b>Spell Name</b> : {spellDetail?.name}
            </Typography>
            <Typography variant='h6' fontWeight={'500'} marginLeft={3} textAlign={'justify'} className={'desc'}>
                <b>Spell Description</b> : {spellDetail?.desc[0]}
            </Typography>
            <Typography variant='h6' fontWeight={'500'} marginLeft={3} textAlign={'justify'} className={'desc'}>
                <b>Higher Level</b> : {spellDetail?.higher_level[0]}
            </Typography>
            <Typography variant='h6' fontWeight={'500'} marginLeft={3} textAlign={'justify'} className={'desc'}>
                <b>Material</b> : {spellDetail?.material}
            </Typography>
            <Typography variant='h6' fontWeight={'500'} marginLeft={3} textAlign={'justify'} className={'desc'}>
                <b>Range</b> : {spellDetail?.range}
            </Typography>
        </div>
    )
}

export default DndDetails;