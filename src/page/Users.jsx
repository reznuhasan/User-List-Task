import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get(`https://dummyjson.com/users`);
            console.log(res.data);
        }
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Users
