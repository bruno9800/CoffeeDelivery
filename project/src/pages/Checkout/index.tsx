import { FormAddress } from "./components/FormAddress";
import { ContainerCheckout, ListProductsStyle } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import { useContext, useState } from "react";
import { FormPayment } from "./components/FormPayment";
import { CartContext } from "../../context/CartContext";
import { CartItens } from "./components/CartItens";
import { PurchaseDetails } from "./components/PurchaseDetails";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const addressSchema = yup.object({
	bairro: yup.string().required(),
	cep: yup.string(),
	cidade: yup.string(),
	complemento: yup.string(),
	numero: yup.number(),
	rua: yup.string(),
	uf: yup.string().max(3).uppercase(),
});

export interface AddressData extends yup.InferType<typeof addressSchema> {}

export function Checkout() {
	const navigate = useNavigate();
	const { products, deleteAllProducts } = useContext(CartContext);

	const [paymentSelected, setPaymentSelected] = useState("debit");
	const methods = useForm<AddressData>({
		resolver: yupResolver(addressSchema),
		defaultValues: {
			bairro: "",
			cep: "",
			cidade: "",
			complemento: "",
			numero: undefined,
			rua: "",
			uf: "",
		},
	});
	const onSubmit = (data: AddressData) => {
		const Adress = {
			...data,
			payment: paymentSelected,
		};

		deleteAllProducts();
		navigate(`/success/${data.cep}`, { state: { data: Adress } });
	};

	function handleTogglePayment(toggleValue: string) {
		if (toggleValue === "") return;
		setPaymentSelected(toggleValue);
		console.log(toggleValue);
	}

	function cartIsEmpty() {
		return products.length === 0;
	}

	return (
		<FormProvider {...methods}>
			<ContainerCheckout>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					id="address-form"
					action=""
				>
					<FormAddress />
					<FormPayment
						paymentSelected={paymentSelected}
						handleTogglePayment={handleTogglePayment}
					/>
				</form>
				<aside>
					<strong>Cafés selecionados</strong>
					<ListProductsStyle>
						{products.map((product) => {
							return (
								<CartItens
									key={product.id}
									imgSrc={product.imgSrc}
									name={product.name}
									price={product.price}
									quant={product.quant}
									id={product.id}
								/>
							);
						})}
						<footer>
							<PurchaseDetails />

							<button
								type="submit"
								form="address-form"
								disabled={cartIsEmpty()}
							>
								confirmar pedido
							</button>
						</footer>
					</ListProductsStyle>
				</aside>
			</ContainerCheckout>
		</FormProvider>
	);
}
