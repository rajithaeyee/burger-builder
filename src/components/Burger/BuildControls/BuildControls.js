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
        <p>Current Price : <strong>$ {props.price.toFixed(2)}</strong></p>
            {controls.map(
                control=>{
                    return< BuildControl key={control.Label}
                     label={control.Label} type={control.type}
                     added={() => props.ingredientAdd(control.type)}
                     removed={()=>props.ingredientRemove(control.type)}
                    />
                }
            )}
            <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
    );
}

export default buildControls;