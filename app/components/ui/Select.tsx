import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, id, required, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-yellow-500 text-sm font-semibold"
      >
        {label} {label && required && "*"}
      </label>
      <select
        {...rest}
        className={`
          px-1 h-9 text-sm bg-black bg-opacity-10 border-b-2 border-black focus:border-yellow-500 duration-200 
          ${className}
        `}
      />
    </div>
  )
}