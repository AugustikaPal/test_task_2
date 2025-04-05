import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../api/apiService";

const Form = () => {
  const queryClient = useQueryClient();

  const [userdata, setUserdata] = useState({
    name: "",
    company: "",
    technology: "",
    description: "",
  });

  const addMutation = useMutation({
    mutationFn: (userdata) => {
      console.log("inside mutation ----18");
      console.log(userdata);
      createUsers(
        userdata.name,
        userdata.company,
        userdata.technology,
        userdata.description
      );
    },
    onSuccess: (userdata) => {
      console.log("user added", userdata);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      
    },
    onError: () => {
      console.log(`Error encountered while adding user`);
    },
  });

  const handleChange = (e) => {
    console.log(userdata);
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <h2>Create a new user : </h2>
      <input
        placeholder="Enter your name"
        type="text"
        name="name"
        onChange={handleChange}
        value={userdata.name}
      />
      <input
        placeholder="Enter your technology"
        type="text"
        name="technology"
        onChange={handleChange}
        value={userdata.technology}
      />
      <input
        placeholder="Enter your company"
        type="text"
        name="company"
        onChange={handleChange}
        value={userdata.company}
      />
      <input
        placeholder="Enter your description"
        type="text"
        name="description"
        onChange={handleChange}
        value={userdata.description}
      />
      <button onClick={() => { addMutation.mutate(userdata);}}>Add</button>
    </div>
  );
};

export default Form;
