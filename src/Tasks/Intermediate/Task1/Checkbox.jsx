
export default function Checkbox({todos,setTodosList,newTodo,setNewTodo,handleAddClick,handleDelete,toggleComplete}){
    return(
        <>
            <h1>Todo List</h1>
            <ol>
                {
                    todos.map((todo)=>(
                        <li 
                        key={todo.text} 
                        style={{textDecoration: todo.completed ? 'line-through':'none'}}
                        >
                            <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(todo.text)} />
                            <h3>{todo.text}</h3>
                            <button onClick={()=>handleDelete(todo.text)}>Delete</button>
                        </li>
                    ))
                }
            </ol>

            <br />
            <input 
            type="text" 
            value={newTodo} 
            onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter Todo"/>
            <button onClick={()=>handleAddClick(newTodo)} >Add</button>
        </>
    )
}