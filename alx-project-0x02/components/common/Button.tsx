import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
    children,
    size="medium",
    shape="rounded-md",
    type="button",
    onClick,
    className=""
}) => {
    const sizeClasses: Record<string, string> = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;
