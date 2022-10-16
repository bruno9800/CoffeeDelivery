import styled from "styled-components";


export const Container = styled.div`
    header {
        font-weight: 700;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 1rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

`




export const Input = styled.input`
    background: ${props => props.theme["base-input"]};
    border-radius: 4px;
    padding: 0.75rem;
    outline: 0;
    border: 1px solid #E6E5E5;

    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};
    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }

    &:focus {
        border:1px solid ${props => props.theme["yellow-dark"]};
    }

    &.secundary {
        max-width: 200px;
    }

`

export const InputOptional = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8125rem 0.75rem;
    background: ${props => props.theme["base-input"]};
    border-radius: 4px;
    padding: 0.75rem;
    border: 1px solid #E6E5E5;

    input {
        flex: 1;
        outline: 0;
        border: 0;
        background: transparent;
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};

        &::placeholder {
        color: ${props => props.theme["base-label"]};
        }
    }

    span {
        font-size: 0.75rem;
        font-style: italic;
        color: ${props => props.theme["base-label"]};
    }

    &:focus-within {
        border:1px solid ${props => props.theme["yellow-dark"]};

        span {
            visibility: hidden;
        }
    }
`