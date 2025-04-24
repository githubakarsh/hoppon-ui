import { ButtonProps } from './ButtonComponentInterface';

export const Buttoncomponent: React.FC<ButtonProps> = ({
    label,
    className,
}) => {
    return <button className={className}>{label}</button>;
}