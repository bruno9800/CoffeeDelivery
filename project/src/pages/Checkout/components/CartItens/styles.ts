import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0.5rem 0.25rem;

    > span {
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        font-weight: 700;
        text-align: right;
    }
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
        height: 64px;
        width: auto;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        > span{
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1rem;
            display: block;
        }

    }

    .actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > button {
            background: ${props => props.theme["base-button"]};
            border-radius: 6px;
            border: 0;
            outline: none;
            
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
            height: 2rem;
            padding: 0 0.5rem;
            cursor: pointer;

            color: ${props => props.theme["base-text"]};
            text-transform: uppercase;
            line-height: 1.6;
            font-size: 0.75rem;
            text-align: center;
            .icon {
                color: ${props => props.theme["purple"]};
            }

            &:hover {
                background: ${props => props.theme["base-hover"]};
            }
        }
    }

`