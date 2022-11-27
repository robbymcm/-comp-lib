import React from 'react';

type ButtonProps = {
    label: string;
    onClick: (e: any) => unknown;
};

const Button = ({ label, onClick }: ButtonProps) =>
    <button onClick={onClick}>
        {label}
    </button>;

export default Button;