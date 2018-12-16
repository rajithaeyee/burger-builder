import React from 'react';
import burgerLogo from './../../assests/images/burger-logo.png';
import './Logo.css';
const logo = (props)=>{
    return (
        <div className="Logo">
            <img src={burgerLogo} alt="logo"/>
        </div>
    );
}

export default logo;