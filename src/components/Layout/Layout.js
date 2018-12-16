import React from 'react'
import Auxx from './../../hoc/Auxx';
import './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';

const layout = (props) => {

    return (
        <Auxx>
            <Toolbar/>
            <div>Toolbar,SideDrawer,Backdrop</div>
            <main className="Content">
                {props.children}
            </main>
        </Auxx>
    );
}

export default layout;