import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/apiService";
import { Link } from "react-router-dom";

const Details = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  {
    isLoading && <>Loading...</>;
  }
  {
    isError && <>OOps ! , Error in bringing users from api</>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {data?.map((user) => (
        <div key={user.id}>
          <Link to={`/dashboard/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Details;
