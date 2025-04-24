
import React, { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'datetime-local' | 'month' | 'url' | 'week' | 'tel';
    label?: string;
    error?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    errorClassName?: string;
    icon?: React.ReactNode; // For a potential icon
    iconPosition?: 'left' | 'right'; // Position of the icon
}


