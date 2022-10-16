import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Container } from "./styles";

export function PurchaseDetails() {
	const entrega: number = 6.5;
	const { totalValue } = useContext(CartContext);
	return (
		<Container>
			<div>
				<span>Total de itens</span>
				<span className="price">R$ {totalValue.toFixed(2)}</span>
			</div>
			<div>
				<span>Entrega</span>
				<span className="price">R$ {entrega.toFixed(2)}</span>
			</div>
			<div className="total">
				<span>Total</span>
				<span className="price">R$ {(totalValue + entrega).toFixed(2)}</span>
			</div>
		</Container>
	);
}
