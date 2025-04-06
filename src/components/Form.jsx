import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../api/apiService";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [userdata, setUserdata] = useState({
    name: "",
    company: "",
    technology: "",
    description: "",
  });

  const addMutation = useMutation({
    mutationFn: (userdata) => {
      
      createUsers(
        userdata.name,
        userdata.company,
        userdata.technology,
        userdata.description
      );
    },
    onSuccess: (userdata) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    
      
    },
    onError: () => {
      console.log(`Error encountered while adding user`);
    },
  });

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };



  return (
    // <div className="flex flex-col w-full ">

      
    //   <h2>Create a new user : </h2>
    //   <input
    //     placeholder="Enter your name"
    //     type="text"
    //     name="name"
    //     onChange={handleChange}
    //     value={userdata.name}
    //   />
    //   <input
    //     placeholder="Enter your technology"
    //     type="text"
    //     name="technology"
    //     onChange={handleChange}
    //     value={userdata.technology}
    //   />
    //   <input
    //     placeholder="Enter your company"
    //     type="text"
    //     name="company"
    //     onChange={handleChange}
    //     value={userdata.company}
    //   />
    //   <input
    //     placeholder="Enter your description"
    //     type="text"
    //     name="description"
    //     onChange={handleChange}
    //     value={userdata.description}
    //   />
    //   <button onClick={() => { addMutation.mutate(userdata);}}>Add</button>
    //   {/* <button onClick={()=>{navigate('/details')}}>View all names</button> */}
    // </div>

    <div className="flex flex-col space-y-4 w-full">
    <h2 className="text-2xl font-semibold text-purple-700 mb-2 text-center">
      Create a New User
    </h2>

    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      value={userdata.name}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />

    <input
      type="text"
      name="technology"
      placeholder="Enter your technology"
      value={userdata.technology}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />

    <input
      type="text"
      name="company"
      placeholder="Enter your company"
      value={userdata.company}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />

    <input
      type="text"
      name="description"
      placeholder="Enter your description"
      value={userdata.description}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />

    <button
      onClick={() => addMutation.mutate(userdata)}
      disabled={addMutation.isLoading}
      className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-50"
    >
      {addMutation.isLoading ? "Adding..." : "Add User"}
    </button>
  </div>
  );
};

export default Form;
