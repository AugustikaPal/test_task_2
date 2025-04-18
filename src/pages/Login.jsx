import React, { useState } from "react";
import Button from "../common/Button";
import { useMutation } from "@tanstack/react-query";
import { validateUser } from "../api/authService";
import "tailwindcss";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { useRevalidator } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const revalidator = useRevalidator();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const { mutate, isPending, isError } = useMutation({
    mutationFn: validateUser,
    onSuccess: (data) => {
      if (data?.firstName) {
        localStorage.setItem("token", data.accessToken);

        revalidator.revalidate();
        navigate("/dashboard");
      } else {
        setLoginError("Invalid credentials");
      }
    },
    onError: (error) => {
      console.log("Login error", error);
      const message =
        error?.response?.data?.message || "Error logging in. Please try again.";
      setLoginError(message);
    },
  });

  //console.log(isPending);
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-70">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate(formdata);
          }}
          className="space-y-5"
        >
          <div>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formdata.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 focus:outline-none cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? (
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.956 9.956 0 012.113-3.248m3.135-2.325A9.99 9.99 0 0112 5c4.478 0 8.269 2.943 9.543 7a9.98 9.98 0 01-4.198 5.303M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3l18 18"
                  />
                </svg>
              )}
            </button>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full py-3 font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>

        {loginError && (
          <p className="text-red-500 mt-4 text-center">{loginError}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
