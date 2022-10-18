import React from 'react'
import { useState } from 'react';
import './todo.css';

const Todo = () => {

    const [todoList, setTodoList] = useState([ 'eat', 'sleep', 'code', 'play' ]);
    const myname = 'mubassir';
    // todoText
    const [todoText, setTodoText] = useState("");

    const addTodo = () => {
        setTodoList( [ todoText , ...todoList ] );
    }

    const removeTodo = (index) => {
        // todoList.splice(index, 1);
        console.log(index);
        let temp = todoList;
        temp.splice(index, 1);
        // setTodoList(temp);
        setTodoList([...temp]);
    }

    const displayTodo = () => { 
        return todoList.map( (task, i) => ( <div className='card bg-primary mt-4'>
            <div className='card-body d-flex justify-content-between'>
                <p className='todo-text'>
                <i class="fa-solid fa-square-pen"></i> &nbsp;
                    {task} </p>

                <button className='btn btn-danger' onClick={ () => { removeTodo(i) } } >delete</button>
            </div>
        </div>
        ));
    }

  return (
    <div className='container'>
        <h1 className='display-4 text-center'>My TODO List</h1>
        <hr />

        <div className='input-group'>
            <input className='form-control' onChange={ (e) => { setTodoText(e.target.value); } } />
            <button className='btn btn-primary' onClick={addTodo}>
                <i className="fas fa-plus-circle"></i> Add Task
            </button>
        </div>

        { displayTodo() }

    </div>
  )
}

export default Todo