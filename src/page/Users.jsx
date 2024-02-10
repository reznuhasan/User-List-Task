import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import UserCard from "../components/UserCard";

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        console.log("hello")
        const fetchData=async()=>{
            const res=await axios.get(`https://dummyjson.com/users`);
            setUsers(res.data.users)
        }
        fetchData()
    },[])
    if(users.length===0) return <h1>Loding..</h1>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {
            users.map(user=><UserCard user={user} key={user.id}/>)
        }
    </div>
  )
}

export default Users
