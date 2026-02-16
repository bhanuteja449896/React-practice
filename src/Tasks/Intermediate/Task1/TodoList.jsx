import { useState } from "react";
import Checkbox from "./Checkbox";

export default function TodoList(){

    const [todosList,setTodosList] = useState([]);
    const [newTodo,setNewTodo] = useState('')

    const handleAddClick=()=>{
        if(newTodo === ''){
            alert('Please Enter Todo')
            console.log('Todo must not be empty');
            return;
        }
        if(todosList.some(t=>t.text===newTodo)){
            alert("Duplicates are not allowed")
            console.log('Duplicates are not allowed')
            return;
        }
        setTodosList([...todosList,{text:newTodo,completed:false}])
        setNewTodo('')
    }

    const handleDelete=(todo)=>{
        setTodosList(todosList.filter((todos)=>todos.text!==todo))
        console.log(todo+' deleted')
    }

    const toggleComplete=(text)=>{
        setTodosList(
            todosList.map((todo)=>
                todo.text === text ? {...todo , completed: !todo.completed} 
                : todo
            )
        )
    }

    return(
        <>
            <Checkbox
            todos={todosList}
            setTodosList={setTodosList}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            handleAddClick={handleAddClick}
            handleDelete={handleDelete}
            toggleComplete={toggleComplete}
            />
        </>
    )
}