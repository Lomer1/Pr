import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Button from "./UI/buttons/Button";
import SignIn from './UI/signIn/SignIn';

const SideBar = () => {

    const[menuActive, setMenuActive] = useState(false)


    const menuClick = () => {
        if (menuActive == true) {
            setMenuActive(false)
        } else {
            setMenuActive(true)
        }
    }

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
          html.style.overflow = menuActive ? "hidden" : "auto";
        }
      }, [menuActive]);

    return ( 
        <div className="saidBar">
            <div style={{marginTop: 20}}>logo</div>
            <div className={menuActive ? 'saidBar_links active':'saidBar_links'}>
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
            <div className={menuActive ? 'menu active':'menu'} onClick={e => menuClick()}>
                <span></span>
            </div>
        </div>
     );
}

export default SideBar;