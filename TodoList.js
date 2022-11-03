import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function TodoList() {
    //  

    const [todo, setTodo] = useState({description: "", date: ""});
    const [todos, setTodos] = useState([]);
    const columns = [{field: "description"},{field: "date"}]
    
    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ description: "", date: ""});
    }

    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />            
            <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
            <button onClick={addTodo}>Add</button>

            <table>
                <tr><td>Description</td><td>Date</td></tr>
                <tbody>
                {
                todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td></tr>)
                }
                </tbody>
            </table> 
        </div>
    )

}

export default TodoList;