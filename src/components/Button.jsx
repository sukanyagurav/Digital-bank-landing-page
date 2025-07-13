import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-l font-semibold from-green-500 text-white to-cyan-400  rounded-4xl py-3 px-8">
      {children}
    </button>
  );
};

export default Button;
