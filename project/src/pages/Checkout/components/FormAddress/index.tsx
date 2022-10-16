import { FormRegisters } from "./FormRegisters";
import { Container } from "./styles";

export function FormAddress() {
	return (
		<Container>
			<header>
				<strong>Complete seu Pedido</strong>
			</header>

			<div>
				<FormRegisters />
			</div>
		</Container>
	);
}
