import { createContext, ReactNode, useReducer } from "react";
import {
	addProductAction,
	IncrementProductById,
} from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";
import { CoffeeProps } from "../utils/coffees";

export interface ProductType extends CoffeeProps {
	quant: number;
}

interface CartContextType {
	products: ProductType[];
	AddProductToCart: (data: ProductType) => void;
	totalValue: number;
}

export const CartContext = createContext({} as CartContextType);

// Finalizando a tipagem do Contexto

// Criando Provider ======================================================================

interface CartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartState, dispatch] = useReducer(
		cartReducer,
		// inicianlizando Reducer
		{
			products: [],
		}
	);

	const { products } = cartState;

	const totalValue: number = products.reduce((acc, current) => {
		return acc + current.price * current.quant;
	}, 0);

	function AddProductToCart(data: ProductType) {
		if (products.find((coffee) => coffee.id === data.id)) {
			try {
				dispatch(IncrementProductById(data.id, data.quant));
			} catch (err) {
				console.error(
					"ERROR! Não foi possivel adicionar mais unidades no produto selecionado\nTente adicionar acessando o carrinho\n" +
						err
				);
			}
		} else {
			try {
				dispatch(addProductAction(data));
			} catch (err) {
				console.error("ERROR! Produto não adicionado\n" + err);
			}
		}
	}
	console.log(totalValue.toFixed(2));

	return (
		<CartContext.Provider
			value={{
				products,
				AddProductToCart,
				totalValue,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
