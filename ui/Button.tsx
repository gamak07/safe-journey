import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ className, children, onClick, type }: Props) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
