import { ButtonProps } from './ButtonComponentInterface';

export const Buttoncomponent: React.FC<ButtonProps> = ({
    label,
    className,
    ...props
}) => {
    return <button id={props.id} className={className}>{label}</button>;
}