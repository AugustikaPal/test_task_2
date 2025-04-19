// import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../api/apiService";
// import { getAuthToken } from "../utils/auth";

const UserDetails = () => {
  const params = useParams();
  const userId = params.id;
  // const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUserById(userId),
  });

 // const [userLoggedin, setUserLoggedIn] = useState(false);

  // useEffect(() => {
  //   const data = getAuthToken();

  //   if (data) {
  //     setUserLoggedIn(true);
  //   } else {
  //     userLoggedin(false);
  //     navigate("/");
  //   }
  // }, []);

  // if (userLoggedin === false) {
  //   return;
  // }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-gray-600">
        Loading user details...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-medium text-red-500">
        Error loading user.
      </div>
    );
  }
  const user = data?.data;
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        {user?.name}'s Details
      </h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-semibold">Company:</span> {user?.company}
        </div>
        <div>
          <span className="font-semibold">Technology:</span> {user?.technology}
        </div>
        <div>
          <span className="font-semibold">Description:</span>{" "}
          {user?.description}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
