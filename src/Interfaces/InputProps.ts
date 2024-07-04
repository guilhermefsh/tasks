export interface InputProps {
    name: string;
    placeholder?: string;
    type: string;
    rules?: RegisterOptions;
    register: UseFormRegister<any>;
    error?: string;
    maxLength?: number,
}