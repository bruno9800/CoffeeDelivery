import { ProductType } from "../../context/CartContext";


export enum ActionTypes {
    ADD_PRODUCT =   'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    INCREMENT_PRODUCT_BY_ID= 'INCREMENT_PRODUCT_BY_ID',
    DECREMENT_PRODUCT_BY_ID= 'DECREMENT_PRODUCT_BY_ID',
    DELETE_PRODUCT_BY_ID = 'DELETE_PRODUCT_BY_ID',
    DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS'
}


export function addProductAction(newProduct: ProductType) {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            newProduct,
        },
    }
}

export function IncrementProductByIdAction(id: string, quantToIncrement: number) {
    return {
        type: ActionTypes.INCREMENT_PRODUCT_BY_ID,
        payload: {
            id,
            quantToIncrement,
        }
    }
}

export function decrementProductAction(id: string){
    return {
        type: ActionTypes.DECREMENT_PRODUCT_BY_ID,
        payload: {
            id,
        }
    }
}

export function deleteProductFromCartAction(id: string) {
    return {
        type: ActionTypes.DELETE_PRODUCT_BY_ID,
        payload: {
            id,
        }
    }
}


export function deleteAllProductsAction(){
    return {
        type: ActionTypes.DELETE_ALL_PRODUCTS
    }
}