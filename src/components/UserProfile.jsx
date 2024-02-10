import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const [user, setUser] = useState([])
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const res = await axios.get(`https://dummyjson.com/users/${id}`)
                setUser(res.data)
            }
            fetchData()
        }
    }, [])
    if (user.length === 0) return "loading"
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="border-2 border-gray-700 w-54 rounded-full mr-12">
                <img src={user.image} alt="" className="w-40 p-2" />
            </div>
            <div className="pl-4 mt-2 leading-10">
                <h3 className="text-3xl mb-5">First Name: {user.firstName}</h3>
                <h3 className="font-medium">Last Name: {user.lastName}</h3>
                <h3 className="font-medium">Email: {user.email}</h3>
                <h3 className="font-medium">Address: {user?.address?.address},{user?.city}</h3>
                <h3 className="font-medium">Company Name: {user?.company?.name}</h3>
            </div>
        </div>
    )
}

export default UserProfile
