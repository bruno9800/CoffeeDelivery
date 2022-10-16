import { createContext, ReactNode, useReducer } from "react";
import {
	addProductAction,
	decrementProductAction,
	deleteAllProductsAction,
	deleteProductFromCartAction,
	IncrementProductByIdAction,
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
	decrementProductFromCart: (id: string) => void;
	incrementProductById: (id: string) => void;
	deleteProductById: (id: string) => void;
	deleteAllProducts: () => void;
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
				dispatch(IncrementProductByIdAction(data.id, data.quant));
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

	function decrementProductFromCart(id: string) {
		if (products.find((coffee) => coffee.id === id)) {
			try {
				dispatch(decrementProductAction(id));
			} catch (err) {
				console.error(
					"ERROR! Algo aconteceu ao tentar retirar a unidade\n" + err
				);
			}
		}
	}

	function incrementProductById(id: string) {
		dispatch(IncrementProductByIdAction(id, 1));
	}

	function deleteProductById(id: string) {
		try {
			dispatch(deleteProductFromCartAction(id));
		} catch (err) {
			console.error(err);
		}
	}

	function deleteAllProducts() {
		try {
			dispatch(deleteAllProductsAction());
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<CartContext.Provider
			value={{
				products,
				AddProductToCart,
				totalValue,
				decrementProductFromCart,
				incrementProductById,
				deleteProductById,
				deleteAllProducts,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
