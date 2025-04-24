import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
    label? : string,
    className? : string,
    icon? : React.ReactNode, 
}