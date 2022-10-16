import { useLocation } from "react-router-dom";
import {
	BoxInfo,
	Container,
	Content,
	Heading,
	IconBoxCurrency,
	IconBoxPin,
	IconBoxTimer,
	Subtitle,
} from "./styles";

import IllustrationImg from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin } from "phosphor-react";
import { AddressData } from "../Checkout";

interface Props extends AddressData {
	payment: "debit" | "credit" | "money";
}

export function Success() {
	const { state } = useLocation();
	const data: Props = state.data;

	const paymentType = (pay: string) => {
		switch (pay) {
			case "debit":
				return "Cartão de Débito";
			case "credit":
				return "Cartão de Crédito";
			case "money":
				return "Pagamento a Vista";
		}
	};
	return (
		<Container>
			<Content>
				<header>
					<Heading>Uhu! Pedido confirmado</Heading>
					<Subtitle>
						Agora é só aguardar que logo o café chegará até você
					</Subtitle>
				</header>
				<div className="infos">
					<BoxInfo>
						<IconBoxPin>
							<MapPin size={16} weight="fill" className="icon" />
						</IconBoxPin>
						<div>
							<span>
								Entrega em{" "}
								<strong>
									{data.rua}, {data.numero}{" "}
								</strong>
							</span>
							<span>
								{data.bairro} - {data.cidade}, {data.uf}
							</span>
						</div>
					</BoxInfo>
					<BoxInfo>
						<IconBoxTimer>
							<MapPin size={16} weight="fill" className="icon" />
						</IconBoxTimer>
						<div>
							<span>Previsão de entrega</span>
							<strong>20 min - 30 min </strong>
						</div>
					</BoxInfo>
					<BoxInfo>
						<IconBoxCurrency>
							<CurrencyDollar size={16} weight="fill" className="icon" />
						</IconBoxCurrency>
						<div>
							<span>Pagamento na entrega</span>
							<strong>{paymentType(data.payment)}</strong>
						</div>
					</BoxInfo>
				</div>
			</Content>
			<img src={IllustrationImg} alt="" />
		</Container>
	);
}
