import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 00.75rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
     
        &.total {
        span {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${props => props.theme["base-subtitle"]};
        }
    }
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
        text-align: right;

        &.price {
            font-size: 1rem;
        }
    }
`