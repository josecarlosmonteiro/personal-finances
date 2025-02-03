import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

export function Input({ id, label, className, required, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-yellow-500 text-sm font-semibold"
      >
        {label} {label && required && "*"}
      </label>
      <input
        {...rest}
        className={`
          px-1 h-9 text-sm bg-black bg-opacity-10 border-b-2 border-black focus:border-yellow-500 duration-200 
          ${className}
        `}
      />
    </div>
  )
}