import React from 'react'
import './SwipeButtons.css'

import ReplayIcon from '@material-ui/icons/Replay';
import CancelIcon from '@material-ui/icons/Cancel';
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton"
function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            

            <IconButton className="swipeButtons__left">
                <CancelIcon fontSize="large"/>
            </IconButton>
           
           <IconButton className="swipeButtons__star">
               <GradeIcon fontSize="large"/>
           </IconButton>

           <IconButton className="swipeButtons__right">
               <FavoriteIcon fontSize="large"/>
           </IconButton>

           <IconButton className="swipeButtons__lightning">
               <FlashOnIcon fontSize="large"/>
           </IconButton>
        </div>
    )
}

export default SwipeButtons
