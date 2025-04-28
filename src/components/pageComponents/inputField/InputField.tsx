import React from 'react';

import { InputFieldProps } from './InputFieldInterface';
export const InputField: React.FC<InputFieldProps> = ({
    type = 'text',
    label,
    error,
    icon,
    iconPosition = 'left',
    ...props
}) => {
    const hasIcon = !!icon;
    const isIconLeft = hasIcon && iconPosition === 'left';
    const isIconRight = hasIcon && iconPosition === 'right';

    return (
        <div >
            {label && (
                <label htmlFor={props.id} >
                    {label}
                </label>
            )}
            <div >
                {isIconLeft && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    {...props}
                    style={{
                        height : props.height,
                        width: props.width
                    }}
                />
                {isIconRight && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {icon}
                    </div>
                )}
            </div>
            {error && (
                <p >{error}</p>
            )}
        </div>
    );
};

