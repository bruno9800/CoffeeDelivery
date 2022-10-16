import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 6px;
    padding: 2.5rem;

    .input-grow {
        display: flex;
        gap: 0.75rem;
        width: 100%;

        &.primary{
            > input {
            flex-basis: 200px;
            }

            > div {
                flex: 1;
            }
        }

        &.secundary {
            .bairro {
                flex-basis: 200px;
            }
            .cidade {
                flex: 1;
            }
            .uf {
                width: 60px;
            }
        }
        
    }
`


export const HeaderForm = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
    .icon {
        color: ${props => props.theme["yellow-dark"]};
    }
    div {
        flex: 1;
        span {
            display: block;
            color: ${props => props.theme["base-text"]};
            font-size: 0.875rem;
            &:first-child {
                color: ${props => props.theme["base-subtitle"]};
                font-size: 1rem;
                margin-bottom: 2px;
            }
        }
    }
`