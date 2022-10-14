import styled from "styled-components";


export const Container = styled.div`
    header {
        font-weight: 700;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 1rem;
    }

    main {
        background: ${props => props.theme["base-card"]};
        border-radius: 6px;
        padding: 2.5rem;
        
        form { 
            display: flex;
            flex-direction: column;
            gap: 1rem;

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
        }
    }
`

export const HeaderMain = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
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