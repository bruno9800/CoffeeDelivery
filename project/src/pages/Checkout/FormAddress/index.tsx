import { MapPinLine } from "phosphor-react";
import { Container, Input, HeaderMain, InputOptional } from "./styles";

export function FormAddress() {
	return (
		<Container>
			<header>
				<strong>Complete seu Pedido</strong>
			</header>

			<main>
				<HeaderMain>
					<MapPinLine size={22} className="icon" />
					<div>
						<span>Endereço de entrega</span>
						<span>Informe o Endereço onde deseja receber o seu pedido</span>
					</div>
				</HeaderMain>
				<form action="">
					<Input type="text" placeholder="CEP" className="secundary" />
					<Input type="text" placeholder="Rua" />
					<div className="input-grow primary">
						<Input type="number" placeholder="Número" />
						<InputOptional>
							<input type="text" placeholder="Complemento" />
							<span>Opcional</span>
						</InputOptional>
					</div>
					<div className="input-grow secundary">
						<Input type="text" className="bairro" placeholder="BAIRRO" />
						<Input
							type="text"
							className="cidade"
							placeholder="CIDADE"
							pattern="[a-zA-Z]*"
						/>
						<Input
							type="text"
							className="uf"
							placeholder="UF"
							pattern="[a-zA-Z]*"
						/>
					</div>
				</form>
			</main>
		</Container>
	);
}
