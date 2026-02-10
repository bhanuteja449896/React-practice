// Create useFetchTodos(url) that:

// Uses useState for todos and loading.

// Uses useEffect to fetch(url) and store data.

import { useEffect, useState } from "react";
import { UseFetchTodo } from "./UseFetchTodo";

export default function FetchTodo(){
    const [todos,setTodos] = UseFetchTodo("/api/todo");

    return(
        {todos.map(todo=>(
            <li key={todo.id} >{todo.text}</li>
        ))}
    );

}