import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export default function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 font-medium transition-all duration-200 rounded-none active:scale-95';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
