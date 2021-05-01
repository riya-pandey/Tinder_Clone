import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'




function Header() {
    return (
        <div className='header'>


        {/* Icon of person  */}
<IconButton>
<AccountCircleIcon style={{ fontSize: 40 }} className="header_icon">
         </AccountCircleIcon>
</IconButton>
    
<img
className="header_logo"
style={{width : "170px" ,height :"40px"}}
src="./Images/e.svg"
alt=""  />
<IconButton>
<ForumIcon fontSize="large" className="header_icon"></ForumIcon>
</IconButton>




        </div>
        
    )
}

export default Header;
