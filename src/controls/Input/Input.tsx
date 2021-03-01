import React, { ChangeEvent } from 'react';

export interface InputProps {
    disabled: boolean;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, handleChange }) => (
    <input type="text" value={value} onChange={handleChange} />
);

export default Input;
