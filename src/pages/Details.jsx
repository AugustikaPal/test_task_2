import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/apiService'


const Details = () => {


    const {data,isLoading ,isError}=useQuery({
        queryKey:["users"],
        queryFn:fetchUsers
    })
{isLoading && <>Loading...</>}
{isError && <>OOps ! , Error in bringing users from api</>}

  return (
    <div>
      {
         data?.map((user)=>
            <div key={user.id}>
                <li>{user.name}</li>
            </div>
         )
      }
    </div>
  )
}

export default Details
