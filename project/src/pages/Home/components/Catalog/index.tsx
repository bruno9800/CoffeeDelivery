import { CoffeeCard } from "./CoffeeCard";
import { Container, Content } from "./styles";



export function Catalog() {
    return (
        <Container>
            <strong>Nossos cafés</strong>
            <Content>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </Content>
        </Container>
    )
}