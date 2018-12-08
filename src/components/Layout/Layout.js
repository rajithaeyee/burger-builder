import React from 'react'
import Auxx from './../../hoc/Auxx';
import './Layout.css';
const layout = (props) => {

    return (
        <Auxx>
            <div>Toolbar,SideDrawer,Backdrop</div>
            <main className="Content">
                {props.children}
            </main>
        </Auxx>
    );
}

export default layout;