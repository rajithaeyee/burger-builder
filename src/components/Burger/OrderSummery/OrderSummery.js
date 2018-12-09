import React from 'react';

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
        <p>Continue to checkout</p>
    </div>);
}

export default orderSummery;