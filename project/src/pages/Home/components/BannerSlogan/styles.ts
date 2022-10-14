import styled from "styled-components";

import { linearGradient, transparentize } from 'polished'


export const BannerContainer = styled.div`
    position: relative;
    padding: 5.75rem 0;

    .linear {
        background: ${props => linearGradient({
            colorStops: [ props.theme.background , transparentize( 0.87, props.theme["yellow-dark"]),props.theme.background],
            toDirection: 'to bottom',
        })};
    }
    
`


export const BannerContent = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;

    background: ${props => linearGradient({
    colorStops: [ props.theme.background , transparentize(1, '#fff'),props.theme.background],
    toDirection: 'to right',
  })};

    @media (max-width: 1080px) {
        justify-content: end;
        > div {
            position: absolute;
            max-width: 500px;

            left: 0;
        }

        img {
            align-self: flex-end;
        }
        
    }

  
`


export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    h2 {
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme["base-title"]};
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const SkillsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;

`


export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        border-radius: 1000px;
        line-height: 1;
        color: ${props => props.theme.white};

        &.primary {
            background: ${props => props.theme["yellow-dark"]};
        }

        &.secundary {
            background: ${props => props.theme["base-text"]};
        }

        &.tertiary {
            background: ${props => props.theme["yellow"]};
        }

        &.quaternary {
            background: ${props => props.theme["purple"]};
        }
    }
    span {
        color: ${props => props.theme["base-text"]};
    }
`