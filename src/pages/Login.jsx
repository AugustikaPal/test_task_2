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
        console.log(data?.firstName ,"---fname");
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
    console.log(formdata);
    mutate(formdata);

   
  };

  {
    isLoading && <p>Loading...</p>;
  }
  {
    isError && <p>Error logging user</p>;
  }

  return (
    <div>
      <h3>Login:</h3>
      <input
        placeholder="Enter your name"
        name="username"
        value={formdata.username}
        onChange={handleChange}
      />
      <input
        placeholder="Enter your password"
        name="password"
        value={formdata.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
