import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
  error = "",
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 ${
          error
            ? "focus:ring-red-500 border border-red-500"
            : "focus:ring-purple-500"
        } ${className}`}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </>
  );
};

export default Input;
