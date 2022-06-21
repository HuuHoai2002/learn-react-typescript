import React from 'react';

interface InputProps {
  name: string;
  type: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className="min-w-[500px] p-3 rounded-md outline-none border border-gray-200 focus:border-blue-500 placeholder:text-gray-300 transition-all"
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  );
};

export default Input;
