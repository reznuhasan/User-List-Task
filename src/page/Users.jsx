import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [showUsers,setShowUsers]=useState([])
    const [searchName,setSearchName]=useState("")
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://dummyjson.com/users`);
            setUsers(res.data.users)
            setShowUsers(res.data.users)
        }
        fetchData()
    }, [])
    const searchByName=(e)=>{
        const userName=e.target.value;
        setSearchName(e.target.value)
        const findUser=users.filter(user=>user.firstName.toLowerCase().includes(userName.toLowerCase()))
       setShowUsers(findUser)
    }
    if (users.length === 0) return <h1>Loding..</h1>
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <label htmlFor=""></label>
                <input type="text" 
                name="search" 
                className="border-2 border-green-500 rounded-full p-2 placeholder-lime-800 mt-4 min-w-96 pl-4"  
                placeholder="search user name"
                onChange={searchByName}
                />
            </div>
            {
                (showUsers.length === 0) ? <h1 className="mt-2 text-3xl text-red-700">User No Found</h1>:
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {
                    showUsers.map(user =><UserCard user={user} key={user.id} />)
                }
            </div>

            }
            
        </div>

    )
}

export default Users
