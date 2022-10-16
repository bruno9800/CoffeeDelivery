import { Container, HeaderPayment, ToggleItem, ToggleRoot } from "./styles";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

interface PaymentProps {
	paymentSelected: string;
	handleTogglePayment: (value: string) => void;
}

export function FormPayment({
	paymentSelected,
	handleTogglePayment,
}: PaymentProps) {
	return (
		<Container>
			<HeaderPayment>
				<CurrencyDollar size={22} className="icon" />
				<div>
					<span>Pagamento</span>
					<span>
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</div>
			</HeaderPayment>

			<ToggleRoot
				type="single"
				value={paymentSelected}
				onValueChange={handleTogglePayment}
			>
				<ToggleItem value="credit">
					<CreditCard size={16} />
					CARTÃO DE CREDITO
				</ToggleItem>
				<ToggleItem value="debit">
					<Bank size={16} />
					CARTÃO DE DÉBITO
				</ToggleItem>
				<ToggleItem value="money">
					<Money size={16} />
					DINHEIRO
				</ToggleItem>
			</ToggleRoot>
		</Container>
	);
}
