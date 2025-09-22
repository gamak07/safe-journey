import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
}

export default function Button({ className, children, onClick, type, disabled }: Props) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
