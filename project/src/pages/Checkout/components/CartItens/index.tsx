import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CounterItem } from "../../../../components/CounterItem";
import { CartContext } from "../../../../context/CartContext";
import { Container, Content } from "./styles";

interface CartItemProps {
	id: string;
	imgSrc: string;
	name: string;
	quant: number;
	price: number;
}
export function CartItens({ imgSrc, name, price, quant, id }: CartItemProps) {
	const { decrementProductFromCart, incrementProductById, deleteProductById } =
		useContext(CartContext);

	return (
		<Container>
			<Content>
				<img src={`/coffees/Type=${imgSrc}.png`} alt="" />
				<div className="details">
					<span>{name}</span>
					<div className="actions">
						<CounterItem
							handleAddQuant={() => incrementProductById(id)}
							handleReduceQuant={() => decrementProductFromCart(id)}
							quant={quant}
						/>
						<button onClick={() => deleteProductById(id)}>
							<Trash size={16} className="icon" />
							remover
						</button>
					</div>
				</div>
			</Content>
			<span>R$ {(price * quant).toFixed(2)}</span>
		</Container>
	);
}
