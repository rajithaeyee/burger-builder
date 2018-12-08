import React from 'react';
import './BurgerIngredient.css'
const burgerIngredient = (props) => {
    let ingredients = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredients = <div className="BreadBottom"></div>
            break;
        case 'bread-top':
            ingredients = (<div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
                <div className="Seeds1"></div>
            </div>);
            break;
        case 'meat':
            ingredients = <div className="Meat"></div>
            break;
        case 'cheese':
            ingredients = <div className="Cheese"></div>
            break;
        case 'lettuce':
            ingredients = <div className="Lettuce"></div>
            break;
        case 'bacon':
            ingredients = <div className="Bacon"></div>
            break;
        default:
            ingredients = null;
            break;
    }

}


export default burgerIngredient;