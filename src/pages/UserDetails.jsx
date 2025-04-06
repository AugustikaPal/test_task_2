import React from "react";
import { useParams } from "react-router-dom";
import { useQuery,} from "@tanstack/react-query";
import { fetchUserById } from "../api/apiService";

const UserDetails = () => {
  const params = useParams();
  const userId = params.id;


  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", userId],
    queryFn:()=> fetchUserById(userId),
  });
  //const {name} = data?.data?.name || "undeff";
 
  //const {name} = data?.data?.name || 0;

  {
    isLoading && <>Loading...</>;
  }
  {
    isError && <>Error loading user</>;
  }
  return (
    <div>
      <h2>Individual User Details </h2>
      <div>User id : {params.id}</div>
      <div>Username : {data?.data?.name}</div>
      <div>Company : {data?.data?.company}</div>
      <div>Technology : {data?.data?.technology}</div>
      <div>Description : {data?.data?.description}</div>
    </div>
  );
};

export default UserDetails;
