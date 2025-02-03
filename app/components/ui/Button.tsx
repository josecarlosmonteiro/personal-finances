import { ButtonHTMLAttributes } from "react";

type BtnVariant = "primary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
}

export function Button({ className, variant = 'primary', ...rest }: Props) {
  const variantStyle: Record<BtnVariant, string> = {
    primary: 'bg-yellow-600 text-gray-700 hover:bg-yellow-500',
  }

  return (
    <button
      {...rest}
      className={`p-2 px-4 rounded shadow font-semibold duration-200 ${variantStyle[variant]} ${className}`}
    />
  )
}