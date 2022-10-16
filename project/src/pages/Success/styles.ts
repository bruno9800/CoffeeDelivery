import styled, { keyframes } from "styled-components";


const IllustrateAnimation = keyframes`   
    from {
        transform: translate(-278px, 0px);
        opacity: 0.1;    
    }

    to {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`

const IllustrateAnimationSecundary = keyframes`
    0%{
        rotate: 0;
        transform: translate(0px, 0px);
    }
    50%{
        rotate: 3deg;
        transform: translate(5px, -6px);
    }
    75% {
        rotate: 0deg;
        transform: translate(0px, 0px);
    }
    90% {
        rotate: 1deg;
        transform: translate(2px, -2px);
    }
    100%{
        rotate: 0;
        transform: translate(0);
    }
`

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    img {
        animation: ${IllustrateAnimation} 1s ease-in 0s normal, ${IllustrateAnimationSecundary} 1s ease-in-out 1s normal;
        
    }

`

export const Heading = styled.h2`
    font-size: 2rem;
    font-weight: 800;

    color: ${props => props.theme["yellow-dark"]};
`

export const Subtitle = styled.span`
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
    font-stretch: 100;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;

    header {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        align-items: flex-start;
    }

    .infos {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 2.5rem;
        gap: 2rem;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 6px 36px; 
            padding: 1px; 
            background:linear-gradient(90deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%); 
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude; 
        }
    }
    
`

//linear-gradient(90deg, rgba(219,172,44,1) 100%, rgba(128,71,248,1) 100%)


export const BoxInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
        display: flex;
        flex-direction: column;
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;

        strong {
            font-family: 'Roboto', 'sans-serif';
            font-size: 1rem;
        }

    }
`

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;

    border-radius: 1000px;

    .icon {
        color: ${props => props.theme.white};
    }

`

export const IconBoxPin = styled(IconBox)`
    background: ${props => props.theme.purple};
`

export const IconBoxTimer = styled(IconBox)`
    background: ${props => props.theme.yellow};
`

export const IconBoxCurrency = styled(IconBox)`
    background: ${props => props.theme["yellow-dark"]};
`