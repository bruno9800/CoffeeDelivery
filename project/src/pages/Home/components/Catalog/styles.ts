import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.375rem;

    strong {
        font-weight: 800;
        font-size: 2rem;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
    margin: auto;
    @media (max-width: 1088px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);
    }
`