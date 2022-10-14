import { ProductType } from "../../context/CartContext";


export enum ActionTypes {
    ADD_PRODUCT =   'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    INCREMENT_PRODUCT_BY_ID= 'INCREMENT_PRODUCT_BY_ID',
    ADRESS_REGISTER = 'ADRESS_REGISTER',
}


export function addProductAction(newProduct: ProductType) {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            newProduct,
        },
    }
}

export function IncrementProductById(id: string, quantToIncrement: number) {
    return {
        type: ActionTypes.INCREMENT_PRODUCT_BY_ID,
        payload: {
            id,
            quantToIncrement,
        }
    }
}