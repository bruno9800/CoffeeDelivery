import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Container, Content, ItemCar } from "./styles";

export function Header() {
	const { products } = useContext(CartContext);
	const HowMuchIsInTheCart = products.reduce((acc, acur) => {
		return acc + acur.quant;
	}, 0);
	return (
		<Container>
			<Link to="/">
				<img src="./logo.png" alt="" />
			</Link>

			<Content>
				<span>
					<MapPin size={20} weight="fill" className="icon" />
					Petrolina, PE
				</span>
				<Link to="/checkout" className="button">
					<ShoppingCart weight="fill" size={20} className="car" />
					{!!products.length && (
						<ItemCar className="count">{HowMuchIsInTheCart}</ItemCar>
					)}
				</Link>
			</Content>
		</Container>
	);
}
