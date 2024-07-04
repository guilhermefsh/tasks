import styled from "styled-components";

export const NavStyle = styled.nav`
    background-color:var(--blueColor);
    height:80px;
    ul{
        display:flex;
        justify-content:space-around;
        align-items:center;
        list-style-type: none;
    }
    
    li{
        margin:20px 0;
    }

    a{
        color:var(--whiteColor);
        font-size:40px;
        align-items:center;

        &:hover{
            text-decoration:underline;
        }
    }
`