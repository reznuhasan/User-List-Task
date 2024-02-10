import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import UserCard from "../components/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState([])
    const [searchName, setSearchName] = useState("")
    const [showAddForm, setShowAddForm] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://dummyjson.com/users`);
            setUsers(res.data.users)
            setShowUsers(res.data.users)
            const newArray = res.data.users
        }
        fetchData()
    }, [])
    // ************** search part ************
    const searchByName = (e) => {
        const userName = e.target.value;
        setSearchName(e.target.value)
        const findUser = users.filter(user => user.firstName.toLowerCase().includes(userName.toLowerCase()))
        setShowUsers(findUser)
    }
    // ********sorted part start**************
    const handleSelect = (e) => {
        // sorted by user name
        if (e.target.value === 'name') {
            const namesortedArray = [...users].sort((a, b) => {
                const nameA = a.firstName.toLowerCase();
                const nameB = b.firstName.toLowerCase();

                return nameA.localeCompare(nameB)
            })
            setShowUsers(namesortedArray)
        }
        // sorted by email
        else if (e.target.value === 'email') {
            const emailSortedArray = [...users].sort((a, b) => {
                const emailA = a.email.toLowerCase();
                const emailB = b.email.toLowerCase();

                return emailA.localeCompare(emailB)
            })
            setShowUsers(emailSortedArray)
        }
        // sorted by company name
        else if (e.target.value === 'company') {
            const companySortedArray = [...users].sort((a, b) => {
                const companyA = a.company.name.toLowerCase();
                const companyB = b.company.name.toLowerCase();

                return companyA.localeCompare(companyB)
            })
            setShowUsers(companySortedArray)
        }
    }
    const formShowBtn = () => {
        if(showAddForm===false){
            setShowAddForm(true)  
        }else{
            setShowAddForm(false)  
        }
    }
    // **************sorted part finish **************
    if (users.length === 0) return <h1>Loding..</h1>
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={formShowBtn}>
                  {(showAddForm===false)?"Add a New User Form" : "Remove User Form"} 
                </button>
            </div>
            {/* add form */}
            {
              (showAddForm===true)?
              <div className="max-w-md mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            User Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            placeholder="User Image"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressStreet">
                            Street
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="addressStreet"
                            type="text"
                            placeholder="Street"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressSuite">
                            Suite
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="addressSuite"
                            type="text"
                            placeholder="Suite"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressCity">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="addressCity"
                            type="text"
                            placeholder="City"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                            Company Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="companyName"
                            type="text"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>:""
            }
            

            {/* search input part */}
            <div>
                <input type="text"
                    name="search"
                    className="border-2 border-green-500 rounded-full p-2 placeholder-lime-800 mt-4 min-w-96 pl-4"
                    placeholder="search user name"
                    onChange={searchByName}
                />
            </div>
            {/* selected part */}
            <div>
                <select className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                    onChange={handleSelect}
                >
                    <option value="">Sorted User List</option>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="company">Company</option>
                </select>

            </div>
            {/* user list part */}
            {
                (showUsers.length === 0) ? <h1 className="mt-2 text-3xl text-red-700">User No Found</h1> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                        {
                            showUsers.map(user => <UserCard user={user} key={user.id} />)
                        }
                    </div>

            }

        </div>

    )
}

export default Users
