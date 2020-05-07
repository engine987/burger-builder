import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import Aux from "../../../hoc/Aux/Aux";

class OrderSummary extends Component {

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('Class: OrderSummary, Function: componentWillUpdate');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(iKey => {
                return <li key={iKey}>
                    <span style={{textTransform: 'capitalize'}}>{iKey}: {this.props.ingredients[iKey]}</span>
                </li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your burger has these ingredients :</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;