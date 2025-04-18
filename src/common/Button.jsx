import React from "react";

const Button = ({ onClick, children, disabled, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
