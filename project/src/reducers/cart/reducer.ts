import { ProductType } from "../../context/CartContext";
import { ActionTypes } from "./actions";


export interface CartStateType {
    products: ProductType[];
}

export function cartReducer(state: CartStateType, action: any) {
    switch(action.type) {
        case(ActionTypes.ADD_PRODUCT):
        console.log(action)
        console.log(state)
            return {
                ...state,
                products: [ ...state.products ,action.payload.newProduct]
            }
        case(ActionTypes.INCREMENT_PRODUCT_BY_ID):
            return {
                ...state,
                products: 
                    state.products.map( coffee => {
                    if(action.payload.id === coffee.id){
                        console.log(coffee)
                        return {
                            ...coffee,
                            quant: coffee.quant + action.payload.quantToIncrement
                        };
                    }else {
                        return {...coffee }
                    }
                })
            }
        case(ActionTypes.DECREMENT_PRODUCT_BY_ID):
            return {
                ...state,
                products:
                    state.products.map(coffee => {
                        if(action.payload.id === coffee.id){
                            return {
                                ...coffee,
                                quant: coffee.quant - 1
                            };
                        }
                        return coffee
                    })
            }
        case(ActionTypes.DELETE_PRODUCT_BY_ID):
            return {
                ...state,
                products: 
                    state.products.filter(coffee => {
                        console.log('verifica')
                        return coffee.id != action.payload.id;
                    })
            }
        case(ActionTypes.DELETE_ALL_PRODUCTS):
            return {
                ...state,
                products: []
            }
        default:
            return state
    }
}