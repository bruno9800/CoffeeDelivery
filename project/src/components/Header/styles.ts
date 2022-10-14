import styled from "styled-components";


export const Container = styled.header`
    max-width: 1152px;
    margin: 0 auto;
    padding: 2rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 40px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
        display: flex;
        gap: 4px;
        padding: 0.5rem;
        align-items: center;

        background: ${props => props.theme["purple-light"]};

        color: ${props => props.theme["purple-dark"]};
        font-size: 0.875rem;
        line-height: 1.3;
        border-radius: 6px;

        .icon {
            color: ${props => props.theme.purple};
            border: 0;
        }
    }

    .button {
        position: relative;
        background: ${props => props.theme["yellow-light"]};
        color: ${props=> props.theme["yellow-dark"]};
        border: 0;
        border-radius: 6px;

        padding: 0.5rem;

        display: flex;
        align-items: center;

        cursor: pointer;

        .car {
            background: transparent;
            border: none;
        }

        .count {
            visibility: hidden;
        }

        &:hover{
            .count {
                visibility: visible;
            }
        }

    }

`

export const ItemCar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: -.5rem -.5rem;

    background: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 1000px;
    width: 20px;
    height: 20px;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
`