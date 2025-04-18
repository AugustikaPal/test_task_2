import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/apiService";
import { Link } from "react-router-dom";

const Details = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false,
  });
  {
    isLoading && <>Loading...</>;
  }
  {
    isError && <>OOps ! , Error in bringing users from api</>;
  }

  return (
  
    <div>
    <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">User Details</h2>
    <div className="space-y-3">
   
        {[...(data || [])].reverse().map((user) => (
    <div
      key={user.id}
      className="bg-purple-100 text-purple-900 px-4 py-2 rounded shadow hover:bg-purple-200 transition"
    >
      <Link to={`/dashboard/${user.id}`} className="block font-medium">
        {user.name}
      </Link>
    </div>
  ))}
    </div>
  </div>
  );
};

export default Details;
