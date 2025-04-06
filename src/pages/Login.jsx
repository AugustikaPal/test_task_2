import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { validateUser } from "../api/authService";
import "tailwindcss";
import { redirect ,useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const useLoginMutation = () => {
    return useMutation({
      mutationFn: validateUser,
      
      onSuccess: (data) => {
        if(data?.firstName)
       { navigate('/dashboard');}
        else{
          alert("Invalid credentials")
        }
      },
      onError: (error) => {
        console.log("Login error", error);
      },
    });
  };

  const { mutate, isLoading, isError } = useLoginMutation();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    mutate(formdata);

   
  };

  {
    isLoading && <p>Loading...</p>;
  }
  {
    isError && <p>Error logging user</p>;
  }

  return (
    // <div className="flex flex-col m-auto  justify-center gay-y-[4px] w-[400px] max-w-sm p-8 space-y-6 rounded-md shadow-md">
    //   <h3 className="text-center">Login </h3>

    //   <div className="flex flex-col">
    //   <input
    //     placeholder="Enter your name"
    //     name="username"
    //     value={formdata.username}
    //     onChange={handleChange}
    //     className="w-full space-y-4 px-4 py-2 m-3 text-gray-700 bg-gray-200 rounded focus:outline-none"
    //   />
    //   <input
    //     placeholder="Enter your password"
    //     name="password"
    //     value={formdata.password}
    //     onChange={handleChange}
    //       className="w-full px-4 m-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none"
    //   />
    //   </div>
    //   <button onClick={handleClick}   className="w-full px-4 py-2 text-white font-semibold bg-purple-500 rounded hover:bg-purple-600 transition">Login</button>
    // </div>

    <div className="h-screen overflow-hidden  bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center justify-center">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-70">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h2>

      <form onSubmit={handleClick} className="space-y-5">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formdata.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {isError && (
        <p className="text-red-500 mt-4 text-center">Error logging in. Please try again.</p>
      )}
    </div>
  </div>
  
  
  );
  
};

export default Login;
