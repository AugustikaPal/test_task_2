
import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    />
  );
};

export default Input;
