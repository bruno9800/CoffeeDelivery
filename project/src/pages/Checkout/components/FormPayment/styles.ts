import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const Container = styled.div`
    background: ${props => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;

    padding: 2.5rem;
`

export const HeaderPayment = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
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

export const ToggleRoot = styled(ToggleGroup.Root)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const ToggleItem = styled(ToggleGroup.Item)`
    flex: 1;
    background: ${props => props.theme["base-button"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${props => props.theme["base-text"]};
    > * {
        color: ${props => props.theme.purple};
    }
    
    &:hover {
        background: ${props => props.theme["base-hover"]};
    }

    &[data-state=on] {
        background: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme.purple};
    }
`