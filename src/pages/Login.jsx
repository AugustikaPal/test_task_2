import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { validateUser } from "../api/authService";

const Login = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const useLoginMutation = () => {
    return useMutation({
      mutationFn: validateUser,
      
      onSuccess: (data) => {
        console.log(data, " logged in");
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
