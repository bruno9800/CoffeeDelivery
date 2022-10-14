import { useContext, useState } from "react";
import { CoffeeProps } from "../../../../../utils/coffees";


import { AddCardStyled, Card, CardContent, CounterItem } from "./styles";
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { CartContext } from "../../../../../context/CartContext";

export function CoffeeCard(props:CoffeeProps) {
    const { AddProductToCart } = useContext(CartContext)
    const [quantAddToCar, setQuantAddToCar] = useState(1);

    function handleAddQuant(){
        setQuantAddToCar(state => state+1);
    }
    function handleReduceQuant() {
        setQuantAddToCar(state => state-1);
    }

    function handleAddProductToCart() {
        const ProductToAdd = {
            ...props,
            quant: quantAddToCar
        }
        AddProductToCart(ProductToAdd)
    }

    const {imgSrc, description, name, price, tags} = props;

    return (
        <Card>
            <CardContent>
                <img src={`/coffees/Type=${imgSrc}.png`} alt="" />
                <div className="tags">
                    {tags.map( tag => {
                        return (
                            <span key={tag}>{tag.toUpperCase()}</span>
                        )
                    })}
                </div>
                <h2>{name}</h2>
                <p>{description}</p>

                 
                <footer>
                    <div className="value">
                        <span>R$</span>
                        <strong>{String((price*quantAddToCar).toFixed(2))}</strong>
                    </div>
                    <div className="options">
                        <CounterItem>
                            <button onClick={handleReduceQuant} disabled={quantAddToCar===1}>
                                <Minus 
                                    size={14}
                                    weight='bold'
                                />
                            </button>
                            <span>{quantAddToCar}</span>
                            <button onClick={handleAddQuant} disabled={quantAddToCar===10}>
                                <Plus 
                                    size={14}
                                    weight='bold'
                                />
                            </button>
                        </CounterItem>

                        <AddCardStyled onClick={handleAddProductToCart}>
                            <ShoppingCartSimple size={20} weight='fill'/>
                        </AddCardStyled>
                    </div>
                </footer>
            </CardContent>
        </Card>
    )
}