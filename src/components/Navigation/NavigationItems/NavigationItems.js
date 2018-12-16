import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>{
    // if you want we can make it as repeating an array
    // const navItemsList = ["Link 1", "Link 2"];
    // const something = navItemsList.map(navItm=>{
    //     return <NavigationItem navName={navItm}/>
    // });
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active={true}>Link 1</NavigationItem>
            <NavigationItem link="/" active={false}>Link 2</NavigationItem>
        </ul>
    );
}

export default navigationItems;