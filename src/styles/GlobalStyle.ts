import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}

:root{
    --colorBackGround:#050505;
    --blueColor:#337ca0;
    --blackColor:#050505;
    --whiteColor:#ffff;
    --DarkSlateBlue:#483D8B;
    --DarkBlue:#00008B;
    --Red:#FF0000;
    --grayColor:#D3D3D3;
    --greenColor:#008000;
    font-family:sans-serif;
}

fieldset{
    border:none;
}

body{
    background:var(--blackColor);
    color:var(--whiteColor)
}
`