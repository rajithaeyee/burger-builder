import React,{Component} from 'react';
import Auxx from './../../hoc/Auxx';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

state= {
    ingredients:{
        meat:0,
        cheese:0,
        bacon:0
    }
}

    render(){
        return(
            <Auxx>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxx>
        );
    }
}

export default BurgerBuilder;