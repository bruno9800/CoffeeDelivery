import styled from "styled-components";


export const ContainerCheckout = styled.div`
    display: flex;
    margin-top: 2.5rem;
    gap: 2rem;

    form {
        flex: 1;

    }

    aside {
        flex-basis: 448px;

        strong {
            display: block;
            font-size: 1.125rem;
            color: ${props => props.theme["base-subtitle"]};

            margin-bottom: 1rem;
        }
    }
`


export const ListProductsStyle = styled.div`
    background-color: ${props => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 2.5rem;
    border-radius: 6px 44px;


    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.75rem;

        button {
            background: ${props => props.theme.yellow};
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.75rem 0.5rem;

            border: 0;
            outline: none;
            border-radius: 6px;

            //text
            color: ${props => props.theme.white};
            font-stretch: 100;
            font-weight: bold;
            font-size: 0.875rem;
            line-height: 1.6;
            text-transform: uppercase;
            font-weight: 700;
            cursor: pointer;

            transition: .1s color;
            &:hover:enabled {
                background: ${props => props.theme["yellow-dark"]};
            }
            &:disabled {
                cursor: not-allowed;
            }
            
        }
    }
`