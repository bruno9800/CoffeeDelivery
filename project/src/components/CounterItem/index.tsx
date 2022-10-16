import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface CounterItemProps {
	quant: number;
	handleReduceQuant: () => void;
	handleAddQuant: () => void;
}

export function CounterItem({
	quant,
	handleReduceQuant,
	handleAddQuant,
}: CounterItemProps) {
	return (
		<Container>
			<button
				onClick={handleReduceQuant}
				disabled={quant === 1}
				className="minus"
			>
				<Minus size={14} weight="bold" className="icon" />
			</button>
			<span>{quant}</span>
			<button onClick={handleAddQuant} disabled={quant === 10} className="plus">
				<Plus size={14} weight="bold" className="icon" />
			</button>
		</Container>
	);
}
