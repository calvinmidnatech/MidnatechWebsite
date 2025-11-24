import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/60 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

