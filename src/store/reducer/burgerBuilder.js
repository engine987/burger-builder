import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = {
        [action.ingredientName] : state.ingredients[action.ingredientName] + 1
    };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };

    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredient = {
        [action.ingredientName] : state.ingredients[action.ingredientName] - 1
    };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true

    };

    return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
    return updateObject({
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        error: false,
        totalPrice: 4,
        building: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_INGREDIENT: return addIngredient(state, action);
        case actions.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actions.SET_INGREDIENTS: return setIngredients(state, action);
        case actions.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
        default: return state;
    }
};

export default reducer;