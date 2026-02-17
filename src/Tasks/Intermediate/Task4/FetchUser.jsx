import { useState , useEffect } from "react";
import UserList from "./UserList";

export default function FetchUser(){
    const [users,setUsers] = useState([])
    const [error,setErrors] = useState(null);
    const [loading,setLoading] = useState(false);
    const [fetchTrigger,setFetchTrigger] = useState(false)

    useEffect(()=>{
        if(!fetchTrigger) return;
        const controller = new AbortController();

        const FetchUsers = async () =>{
            try{
                setLoading(true);
                setErrors(null);
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users',
                    {signal:controller.signal}
                );
                if(!response.ok){
                    throw new Error('Failed to fetch users')
                }

                
                const data = await response.json();
                console.log(data)
                setUsers(data);

            }catch(err){
                if(err.name!=='AbortError'){
                    setErrors(err.message);
                }
            }finally{
                setLoading(false)
            }
        }

        FetchUsers()
        return ()=> controller.abort();

    },[fetchTrigger])

    return(
        <>
            <h1>Data Fetcher</h1>
            <button onClick={()=>setFetchTrigger(prev => !prev)}>Fetch</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>❌ {error}</p>}
            <UserList users={users}/>
        </>
    );
}