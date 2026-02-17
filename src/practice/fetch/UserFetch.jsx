import { useEffect, useState } from "react";

export default function UserFetch(){
    const [users,setUsers] = useState([]);
    const [fetchTrigger,setFetchTrigger] = useState(false);
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
        async function fetchUsers(){
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setUsers(data)
        }

        fetchUsers()

    },[fetchTrigger])

    return(
        <div>
            <h1>Users</h1>
            {
                users.map((user)=>{
                    return <li key={user.id}>{user.id} {user.name} hi</li>
                })
            }
            <button onClick={()=> setFetchTrigger(prev=>!prev)}>Show Users</button>

        </div>
    )
}