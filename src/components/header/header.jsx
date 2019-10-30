import React from 'react';
import classes from './header.module.css'
import carry from './carry.png';
import hamburger from './hamburger.png'

let Header = () =>{
    return(
        <div className={classes.main}>
            <div className={classes.logo}>Fulogy</div>
            <div className={classes.buttons}>
                <img src={carry} alt=""/>
                <img src={hamburger} alt=""/>
            </div>
        </div>
    )
}

export default Header;