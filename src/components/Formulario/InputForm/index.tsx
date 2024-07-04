import styled from "styled-components";
// import { UseFormRegister, RegisterOptions } from "react-hook-form";
import { InputProps } from "../../../Interfaces/InputProps";

const ErrorStyle = styled.p`
    color:var(--Red);
    font-size:1.3rem;
`

export const InputForm = ({ name, placeholder, type, rules, error, maxLength, register }: InputProps) => {

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                {...register(name, rules)}
            />
            {error && <ErrorStyle>{error}</ErrorStyle>}
        </>
    )
}
