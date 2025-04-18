import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../api/apiService";
//import { useNavigate } from "react-router-dom";

const Form = () => {
  //const navigate = useNavigate();
  const queryClient = useQueryClient();

  //
  const [errors, setErrors] = useState({});

  //
  const validateForm = () => {
    const newErrors = {};
    if (!userdata.name || userdata.name.trim().length < 3) {
      newErrors.name = "Names must be at least 3 characters long";
    }

    if (!userdata.technology) {
      newErrors.technology = "Technology is required";
    }

    if (!userdata.company) {
      newErrors.company = "Company is required";
    }

    if (!userdata.description || userdata.description.trim().length < 20) {
      newErrors.description =
        "Description must be at least 20 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [userdata, setUserdata] = useState({
    name: "",
    company: "",
    technology: "",
    description: "",
  });

  // const addMutation = useMutation({
  //   mutationFn: (userdata) => {
      
  //    return createUsers(
  //       userdata.name,
  //       userdata.company,
  //       userdata.technology,
  //       userdata.description
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["users"] });
  //     setUserdata({
  //       name: "",
  //       company: "",
  //       technology: "",
  //       description: "",
  //     });
    
      
  //   },
  //   onError: () => {
  //     console.log(`Error encountered while adding user`);
  //   },
  // });

  const {
    mutate: addUser,
    isLoading,
   
  } = useMutation({
    mutationFn: (userdata) => {
      return createUsers(
        userdata.name,
        userdata.company,
        userdata.technology,
        userdata.description
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setUserdata({
        name: "",
        company: "",
        technology: "",
        description: "",
      });
    },
    onError: () => {
      console.log(`Error encountered while adding user`);
    },
  });
  
  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const handleSubmit = () => {
    if (validateForm()) {
      addUser(userdata);
    }
  };



  return (
 
    <div className="flex flex-col space-y-4 w-full">
    <h2 className="text-2xl font-semibold text-purple-700 mb-2 text-center">
      Create a New User
    </h2>

    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
      value={userdata.name}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />
       {errors.name && (
        <span className="text-red-500 text-sm">{errors.name}</span>
      )}
    <input
      type="text"
      name="technology"
      placeholder="Enter your technology"
      value={userdata.technology}
      onChange={handleChange}
      required
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />
       {errors.technology && (
        <span className="text-red-500 text-sm">{errors.technology}</span>
      )}

    <input
      type="text"
      name="company"
      placeholder="Enter your company"
      required
      value={userdata.company}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />
    {errors.company && (
        <span className="text-red-500 text-sm">{errors.company}</span>
      )}

    <input
      type="text"
      name="description"
      placeholder="Enter your description"
      value={userdata.description}
      required
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-100"
    />
    {errors.description && (
        <span className="text-red-500 text-sm">{errors.description}</span>
      )}

    <button
      // onClick={() => addMutation.mutate(userdata)}
      onClick={handleSubmit}
      disabled={addUser.isLoading}
      className="bg-purple-600  cursor-pointer text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-50"
    >
      {isLoading ? "Adding..." : "Add User"}
    </button>
  </div>
  );
};

export default Form;
