import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:90vh;
    
    @media(max-width:1280px) {
        flex-direction:column;
        margin: 40px 0;
        gap:40px;
    }
`