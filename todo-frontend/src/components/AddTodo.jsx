import React, { useMemo, useState } from 'react'
import TodoList from './TodoList';
import {postData} from '../service/Service'

const AddTodo = () => {

  const [todoList, setTodoList] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [isCompleted, setIsCompleted] = useState(false);

  const style = {
    fontSize: "20px"
  }

  const addToList = () => {
    setTodoList((prev) => [...prev, {
      title,
      description,
      isCompleted
    }])
  }

  const addDescription = (e) => {
    setDescription(e.target.value);
    console.log("Description: " + description)
  }

  const addTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <form className='flex flex-col '>

      <div style={{ display: "flex", flexDirection: "column" }}>

        <input style={style} placeholder='write your Title' type='text' value={title} onChange={(e) => addTitle(e)}></input>

        <input placeholder='description' type='text' value={description} onChange={(e) => addDescription(e)}></input>
        
        <input type="checkbox" checked={isCompleted} onChange={(e) => {
          setIsCompleted(e.target.checked)
          console.log(isCompleted)
          }} />

        <button onClick={(e) => { e.preventDefault()
          addToList()
          const data= {
            title,
            description,
            isCompleted
          }
          postData(data)
          console.log(data)}}>Add Task</button>
      </div>

      <div className='bg-green-200 text-black'>
        <TodoList todo={todoList} />
      </div>

    </form>
  )
}

export default AddTodo