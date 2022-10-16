import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${props => props.theme["base-button"]};
    display: flex;
    border-radius: 6px;
    padding: 0.5rem ;
    height: 2rem;

    button {
        background: transparent;
        border: 0;
        color: ${props => props.theme.purple};
        line-height: 1;
        cursor: pointer;

        &:disabled {
            color: ${props => props.theme["base-title"]};
        }

        &:hover:enabled {
            color: ${props => props.theme["purple-dark"]};
        }
        
    }
`