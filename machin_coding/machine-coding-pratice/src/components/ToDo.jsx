import React, { useState } from 'react'

function ToDo() {

    const [todos,setTodos] = useState([]);
    const [inputTodo,setInputTodo] = useState("");
    const [idCounter,setIdCounter] = useState(0);

    const onAddClick = (e)=>{
           const todo = {
            id:idCounter,
            text:inputTodo,
            completed:false
           }
           setTodos([...todos,todo]);
           setIdCounter(idCounter+1);
           setInputTodo("");
    }

    const onChange =(e)=>{
         setInputTodo(e.target.value);
    }

    const onDelete = (id)=>{
         setTodos(todos.filter(todo => todo.id !== id));
    }

    const onCheckBoxClick =(id)=>{
        setTodos(
          todos.map((todo)=>
          todo.id === id ? {...todo,completed:!todo.completed}: todo
        )
      );
    }

  return (
    <div style={{margin:"auto",}}>
        <h2>ToDo List</h2>
        <input
        value={inputTodo}
        onChange={onChange}
        type="text"
        placeholder='Enter TODO'
        />
        <button onClick={onAddClick}>Add</button>
        {
            todos.map((todo,index)=>
                (
                  <div key={index} style={{marginTop:"10px", display:"flex",gap:"10px" , 
                    alignItems:"center",
                    maxWidth:"400px"
                  }}>
                    <input type="checkbox" onChange={()=>onCheckBoxClick(todo.id)}/>
                    <span style={{textDecoration: todo.completed ? 'line-through':'none'}}>{todo.text}</span>
                    <button onClick={()=>onDelete(todo.id)}>Delete</button>
                  </div>
                )
            
        )}
    </div>
  )
}

export default ToDo