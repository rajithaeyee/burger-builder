import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {Label: "Meat", type:"meat"},
    {Label: "Chease", type:"cheese"},
    {Label: "Bacon", type:"bacon"}
]
const buildControls = (props)=>{
    
    return(
        <div className="BuildControls">
            {controls.map(
                control=>{
                    return< BuildControl key={control.Label}  label={control.Label} type={control.type}/>
                }
            )}
        </div>
    );
}

export default buildControls;