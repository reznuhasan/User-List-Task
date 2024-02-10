
const UserCard = ({ user }) => {
    const { image, firstName, lastName, email } = user
    const { name } = user.company
    const { address, city } = user.address
    return (
        <div className='border-2 border-neutral-500	py-5 font-sans rounded hover:bg-green-200'>
            <div className="border-2 border-gray-700 w-32 rounded-full mx-auto mt-0">
                <img src={image} alt="" className="w-28 p-2" />
            </div>
            <div className="pl-4 mt-2">
                <h3 className="text-3xl">First Name:{firstName}</h3>
                <h3>Last Name:{lastName}</h3>
                <h3>Email Address:{email}</h3>
                <h3>Address:{address},{city}</h3>
                <h3>Company Name:{name}</h3>
            </div>

        </div>
    )
}

export default UserCard
