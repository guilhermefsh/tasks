import styled from "styled-components";

interface FormContainerProps {
    $height: string
}

export const FormContainer = styled.form<FormContainerProps>`
    width:620px;
    height:${({ $height }) => $height};;
    border-radius:20px;
    background-color:var(--blueColor);
    padding:30px;
    display:flex;
    flex-direction:column;
    gap:22px;
    color:var(--black);
    filter: drop-shadow(8px 8px 8px var(--DarkSlateBlue));
`

export const FildStyle = styled.fieldset`
    display:flex;
    flex-direction:column;
    font-size:1.5rem;
    input, textarea{
        padding:6px;
        font-size:1.4rem;
        border-radius:10px;
        width:100%;
        background-color:var(--grayColor)
    }
`
export const ButtonStyle = styled.button`
    width:100%;
    padding: 8px;
    font-size:1.5rem;
    border-radius:10px;
    border:1px solid var(--DarkBlue);
    cursor: pointer;
    background-color:var(--DarkBlue);
    color:var(--whiteColor);
    filter: drop-shadow(8px 8px 8px var(--DarkSlateBlue));
`
export const Title = styled.h1`
    font-size:2rem;
    text-transform:uppercase;
    color:var(--DarkBlue);
    text-align:center;
    filter: drop-shadow(8px 8px 8px var(--DarkSlateBlue));
`

