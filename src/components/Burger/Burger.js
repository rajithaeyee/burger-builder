import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props)=>{
    const trasnformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map(
            (_,index)=>{
                return <BurgerIngredient key={igKey + index} type={igKey} />
            }
        );
    })
    
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {trasnformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;