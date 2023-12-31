'use client'

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
} from "react-hook-form";
import { BiDollar, BiPound } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
    title?: string;
    subtitle?: string;


}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors,
    title,
    subtitle,

}) => {
    return ( 
        <>
        {title && <div className="font-medium">{title}</div>}
        {subtitle && <div className="font-light text-gray-600">{subtitle}</div>}
        <div className="w-full relative">
            {formatPrice && (
                <BiPound
                    size={23}
                    className="
                    text-gray-700
                    absolute
                    top-8
                    left-3
                    "
                />
            )}
            <input 
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                peer
                w-full
                p-5
                pt-8
                font-light
                bg-white
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${formatPrice ? 'pl-9' : 'pl-4'}
                ${errors[id] ? 'border-green-500' : 'border-neutral-300'}
                ${errors[id] ? 'focus:border-green-500' : 'focus:border-black'}
                `}
            />
            <label 
                className={`
                absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-6
                z-10
                origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-green-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
    </>
);
}
 
export default Input;