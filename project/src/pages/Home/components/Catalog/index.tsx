import { CoffeeCard } from "./CoffeeCard";
import { Container, Content } from "./styles";

import { coffees } from "../../../../utils/coffees";


export function Catalog() {
    return (
        <Container>
            <strong>Nossos cafés</strong>
            <Content>
                {coffees.map( coffee => {
                    return (
                        <CoffeeCard 
                            key={coffee.id}
                            description={coffee.description}
                            imgSrc={coffee.imgSrc}
                            name={coffee.name}
                            price={coffee.price}
                            tags={coffee.tags}
                            id={coffee.id}
                        />
                    )
                })}
            </Content>
        </Container>
    )
}