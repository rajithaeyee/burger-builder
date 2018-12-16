import React from 'react';
import Button from './../../UI/Button/Button';

const orderSummery = (props)=>{
    const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    } );

    return (
    <div>
        <h3>Your Order</h3>
        <p>Your Order contains following ingredients</p>
        <ul>
             {ingredientSummary}
        </ul>
        <p><strong>Total Price : $ {props.price.toFixed(2)}</strong></p>
        <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
    </div>);
}

export default orderSummery;