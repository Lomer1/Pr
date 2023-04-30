import React from 'react';
import {Link} from 'react-router-dom'
import Button from "./UI/buttons/Button";
import SignIn from './UI/signIn/SignIn';

const SideBar = () => {
    return ( 
        <div className="saidBar">
            <div style={{marginTop: 20}}>logo</div>
            <div className="saidBar_links">
                <Link to = '/ReactMarket'>
                    <Button>Dashboard</Button>
                </Link>
                <Link to = '/Analitics'>
                    <Button>Analitics</Button>
                </Link>
                <Link to = '/Analitics'>
                    <Button>Reports</Button>
                </Link>
                <Link to = '/Analitics'>
                    <Button>Campaigns</Button>
                </Link>
                <Link to = '/Analitics'>
                    <Button>Inbox</Button>
                </Link>
                <Link to = '/Analitics'>
                    <Button>Setting</Button>
                </Link>
            </div>
            <SignIn></SignIn>
            <div className="menu">
                <span></span>
            </div>
        </div>
     );
}

export default SideBar;