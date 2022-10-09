import { MapPin, ShoppingCart } from 'phosphor-react'
import { Container, Content, ItemCar } from './styles'

export function Header() {
    return(
        <Container>
            <img src="./logo.png" alt="" />

            <Content>
                <span>
                   <MapPin size={20} className='icon'/>
                   Petrolina, PE 
                </span>
                <button>
                    <ShoppingCart weight='fill' size={20} className='car'/>
                    {
                        true && <ItemCar className='count'>2</ItemCar>
                    }
                    
                </button>
            </Content>
        </Container>
    )
}