import UserCard from './UserCard'


export default function UserList({users}){

    return(
        <div>
            <h2>Users List</h2>
            {
                users.map(user=>(
                    <UserCard key={user.id} user={user}/>
                ))
            }
        </div>
    )
}