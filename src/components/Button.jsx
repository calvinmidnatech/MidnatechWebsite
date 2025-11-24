import React from 'react';

const Button = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  const baseStyles = 'px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 text-white hover:-translate-y-0.5 hover:from-blue-700 hover:via-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;

