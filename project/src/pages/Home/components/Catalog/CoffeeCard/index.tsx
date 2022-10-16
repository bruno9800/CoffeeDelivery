import { useContext, useState } from "react";
import { CoffeeProps } from "../../../../../utils/coffees";

import { AddCardStyled, Card, CardContent } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { CartContext } from "../../../../../context/CartContext";
import { CounterItem } from "../../../../../components/CounterItem";

export function CoffeeCard(props: CoffeeProps) {
	const { AddProductToCart } = useContext(CartContext);
	const [quantAddToCar, setQuantAddToCar] = useState(1);

	function handleAddQuant() {
		setQuantAddToCar((state) => state + 1);
	}
	function handleReduceQuant() {
		setQuantAddToCar((state) => state - 1);
	}

	function handleAddProductToCart() {
		const ProductToAdd = {
			...props,
			quant: quantAddToCar,
		};
		AddProductToCart(ProductToAdd);
	}

	const { imgSrc, description, name, price, tags } = props;

	return (
		<Card>
			<CardContent>
				<img src={`/coffees/Type=${imgSrc}.png`} alt="" />
				<div className="tags">
					{tags.map((tag) => {
						return <span key={tag}>{tag.toUpperCase()}</span>;
					})}
				</div>
				<h2>{name}</h2>
				<p>{description}</p>

				<footer>
					<div className="value">
						<span>R$</span>
						<strong>{String((price * quantAddToCar).toFixed(2))}</strong>
					</div>
					<div className="options">
						<CounterItem
							quant={quantAddToCar}
							handleAddQuant={handleAddQuant}
							handleReduceQuant={handleReduceQuant}
						/>

						<AddCardStyled onClick={handleAddProductToCart}>
							<ShoppingCartSimple size={20} weight="fill" />
						</AddCardStyled>
					</div>
				</footer>
			</CardContent>
		</Card>
	);
}
