

import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../api/apiService";
import Input from "../common/Input";
import Button from "../common/Button";
import { getAuthToken } from "../utils/auth";
import "tailwindcss"

const inputFields = [
  { name: "name", placeholder: "Enter your name" },
  { name: "technology", placeholder: "Enter your technology" },
  { name: "company", placeholder: "Enter your company" },
  { name: "description", placeholder: "Enter your description" },
];

const Form = () => {

  const queryClient = useQueryClient();
  const [errors, setErrors] = useState({});

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

  const { mutate: addUser, isPending } = useMutation({
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
    onError: (error) => {
      // console.log(`Error encountered while adding user`);
      console.error("Error encountered while adding user:", error?.response || error);
    },
  });


  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const token = getAuthToken();
console.log("Token in createUsers:", token);

  const handleSubmit = () => {
    console.log("inside add user button")
    if (validateForm()) {
      console.log(userdata,"--userdata");
      addUser(userdata);
      console.log(userdata);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <h2 className="text-2xl font-semibold text-purple-700 mb-2 text-center">
        Create a New User
      </h2>

      {inputFields.map(({ name, placeholder }) => (
        <Input
          key={name}
          name={name}
          value={userdata[name]}
          onChange={handleChange}
          placeholder={placeholder}
          error={errors[name]}
        />
      ))}

      <Button onClick={handleSubmit}  >
        {isPending ? "Adding..." : "Add User"}
      </Button>
    </div>
  );
};

export default Form;