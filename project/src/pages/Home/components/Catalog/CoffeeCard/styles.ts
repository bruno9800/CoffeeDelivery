import styled from "styled-components";


export const Card = styled.div`
    position: relative;
    max-width: 256px;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    height: 19.375rem;

`

export const CardContent = styled.div`
    padding: 0 1.25rem;
    margin-top: -1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .tags {
        margin-top: .75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .25rem;
        span {
            background: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};
            border-radius: 100px;
            padding: 0.25rem .5rem;

            font-size: 0.625rem;
            font-weight: 700;
        }
    }

    h2 {
        margin-top: 1rem;
        font-size: 1.125rem;
    }

    p {
        margin-top: .5rem;
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 1.46875rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        div {
            display: flex;
        }

        .value {
            align-items: baseline;
            justify-content: center;
            gap: 0.25rem;
            color: ${props => props.theme["base-text"]};
            strong {
                font-size: 1.5rem;
            }
            span {
                font-size: 0.875rem;
            }
        }

        .options {
            align-items: center;
            gap: 0.5rem;
        }
        
    }

`

// export const CounterItem = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//     background: ${props => props.theme["base-button"]};
//     display: flex;
//     border-radius: 6px;
//     padding: 0.5rem ;

//     button {
//         background: transparent;
//         border: 0;
//         color: ${props => props.theme.purple};
//         line-height: 1;
//         cursor: pointer;

//         &:disabled {
//             color: ${props => props.theme["base-title"]};
//         }
//     }
// `

export const AddCardStyled = styled.button`
    background-color: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme.white};
    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
    outline: none;
    line-height: 1;
    cursor: pointer;

    transition: .1s;
    &:hover {
        background: ${props => props.theme.purple};
        color: ${props => props.theme["base-card"]};
    }

    &:active {
        transform: scale(0.98);
    }
`