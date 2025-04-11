import React from 'react'

type ButtonProps = {
  onClick?: () => void;
  children: String | React.ReactNode;
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button({ onClick, children, type = "primary", className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${className}
      ${type === "primary" ? "bg-primary text-white" : "bg-secondary text-black"}
      px-6 py-2 rounded-md cursor-pointer opacity-100
      hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    `}>{children}</button>
  )
}
