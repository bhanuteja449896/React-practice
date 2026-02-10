import { useState } from "react";

export function UseFetchTodo(Url){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        if(!url) return;
        setLoading(true);
        fetch(url)
        .then(data =>{
            setTodos(data);
            setLoading(false);
        })
        .catch(()=>{
            setTodos([]);
            setLoading(false);
        })
    },[url]);

    return {
        todos, loading
    };

}