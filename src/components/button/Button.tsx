import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  to?: string;
  type?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="px-8 py-3 min-w-[150px] text-md font-medium rounded-md bg-green-400 text-white hover:opacity-70 transition-all"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
