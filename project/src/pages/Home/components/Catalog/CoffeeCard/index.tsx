import { AddCardStyled, Card, CardContent, CounterItem } from "./styles";

import coffee from '../../../../../assets/coffees/Type=Americano.png'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
    return (
        <Card>
            <CardContent>
                <img src={coffee} alt="" />
                <div className="tags">
                    <span>TRADICIONAL</span>
                    <span>TRADICIONAL</span>
                </div>
                <h2>Expresso Tradicional</h2>
                <p>O tradicional café feioto com água quente e grão moidos</p>

                 
                <footer>
                    <div className="value">
                        <span>R$</span>
                        <strong>9,90</strong>
                    </div>
                    <div className="options">
                        <CounterItem>
                            <button>
                                <Minus 
                                    size={14}
                                    weight='bold'
                                />
                            </button>
                            <span>1</span>
                            <button>
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