import React, { Component } from 'react';
import Auxx from './../../hoc/Auxx';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummery from './../../components/Burger/OrderSummery/OrderSummery';

const INGREDIENT_PRICES = {
    cheese: 2,
    meat: 0.5,
    bacon: 1
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasableState(updatedIngredients)
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
            this.updatePurchasableState(updatedIngredients);
        }else{
            return;
        }
    }

    updatePurchasableState(updatedIngredients){
        const ingredient = updatedIngredients;//[...this.state.ingredients];
        const sum = Object.keys(ingredient)
        .map(igKey=>{
            return ingredient[igKey]
        })
        .reduce((sum, el)=>{
            return sum + el;
        },0);

        this.setState({purchasable: sum>0});
    }

    purchaseHandler=()=>{
        this.setState({purchasing: true});
    }

    cancelPurchase= ()=>{
        this.setState({purchasing: false});
    }

    continuePurchase = () =>{
        alert("You continue");
    }

    render() {
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Auxx>
                <Modal show={this.state.purchasing} closeModal={this.cancelPurchase}>
                    <OrderSummery
                     ingredients={this.state.ingredients}
                     cancelPurchase={this.cancelPurchase}
                     continuePurchase={this.continuePurchase}
                     price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdd={this.addIngredient}
                 ingredientRemove={this.removeIngredient} 
                 disabled={disabledInfo}
                 purchasable = {this.state.purchasable}
                 price={this.state.totalPrice}
                 ordered={this.purchaseHandler}/>
            </Auxx>
        );
    }
}

export default BurgerBuilder;