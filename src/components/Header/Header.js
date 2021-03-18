import React from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
const Header = () =>{
    return(
        <>
            <div className="header">
                <div className="search">
                    Search
                </div>
                <div className="Notification">
                    <NotificationsIcon/>
                </div>
                <div className="Profile">
                    <img></img>
                    <div>Sietran Brook</div>
                </div>
            </div>
        </>
    )
}

export default Header;