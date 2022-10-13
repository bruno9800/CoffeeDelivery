import { AddCardStyled, Card, CardContent, CounterItem } from "./styles";


import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'


import { CoffeeProps } from "../../../../../utils/coffees";
import { useState } from "react";

export function CoffeeCard({imgSrc, description, name, price, tags}:CoffeeProps) {
    const [quantAddToCar, setQuantAddToCar] = useState(1);

    function handleAddQuant(){
        setQuantAddToCar(state => state+1);
    }
    function handleReduceQuant() {
        setQuantAddToCar(state => state-1);
    }

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
                        <strong>{String(price).padEnd(4, '0')}</strong>
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
                            <button onClick={handleAddQuant}>
                                <Plus 
                                    size={14}
                                    weight='bold'
                                />
                            </button>
                        </CounterItem>

                        <AddCardStyled>
                            <ShoppingCartSimple size={20} weight='fill'/>
                        </AddCardStyled>
                    </div>
                </footer>
            </CardContent>
        </Card>
    )
}