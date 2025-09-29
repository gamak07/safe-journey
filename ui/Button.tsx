import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
  title?: string
}

export default function Button({ className, children, onClick, type, disabled, title }: Props) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled} title={title}>
      {children}
    </button>
  );
}
