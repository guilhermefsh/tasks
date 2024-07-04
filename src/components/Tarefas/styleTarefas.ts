import styled from "styled-components";


export const Container = styled.div`
    width:620px;
    height:650px;
    border-radius:20px;
    background-color:var(--blueColor);
    padding:30px;
    display:flex;
    flex-direction:column;
    gap:22px;
    color:var(--black);
    filter: drop-shadow(8px 8px 8px var(--DarkSlateBlue));

    h2{
    font-size:2rem;
    text-transform:uppercase;
    color:var(--DarkBlue);
    text-align:center;
    filter: drop-shadow(8px 8px 8px var(--DarkSlateBlue));
    }

    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:40px;
        flex-wrap:wrap;
    }
`

export const Tasks = styled.li`
    width:220px;
    background-color:var(--DarkBlue);
    border-radius:20px;
    padding:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;

    button{
        padding:0.5rem;
        border-radius:10px;
        margin: 0px 10px;
        cursor:pointer;
    }
`
export const InfoTask = styled.p`
    font-size:1rem;
    font-weight:600;
`
