import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Input, InputOptional } from "../styles";
import { Container, HeaderForm } from "./styles";

export function FormRegisters() {
	const { register } = useFormContext();
	return (
		<Container>
			<HeaderForm>
				<MapPinLine size={22} className="icon" />
				<div>
					<span>Endereço de entrega</span>
					<span>Informe o Endereço onde deseja receber o seu pedido</span>
				</div>
			</HeaderForm>

			<Input
				type="text"
				placeholder="CEP"
				className="secundary"
				{...register("cep")}
				required
			/>
			<Input type="text" placeholder="Rua" {...register("rua")} required />
			<div className="input-grow primary">
				<Input
					type="number"
					placeholder="Número"
					{...register("numero")}
					required
				/>
				<InputOptional>
					<input
						type="text"
						placeholder="Complemento"
						{...register("complemento")}
					/>
					<span>Opcional</span>
				</InputOptional>
			</div>
			<div className="input-grow secundary">
				<Input
					type="text"
					className="bairro"
					placeholder="BAIRRO"
					required
					{...register("bairro")}
				/>
				<Input
					type="text"
					className="cidade"
					placeholder="CIDADE"
					pattern="[a-zA-Z]*"
					required
					{...register("cidade")}
				/>
				<Input
					type="text"
					className="uf"
					placeholder="UF"
					required
					pattern="[a-zA-Z]*"
					{...register("uf")}
				/>
			</div>
		</Container>
	);
}
