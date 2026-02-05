import React, { useState } from 'react'
import TodoList from './TodoList';
import {postData} from '../service/Service'

const AddTodo = () => {

  const [flag, setFlag] = useState();

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

  const changeflag = () => {
    setflag(!flag);
  }
  const completed = () => {
    setIsCompleted(!isCompleted);
    console.log("Boolean: ", !isCompleted);
  }

  const addDescription = (e) => {
    setDescription(e.target.value);
    console.log("Description: " + description)
  }

  const addTitle = (e) => {
    setTitle(e.target.value);
  }

  const addData=()=>{
    setData({
      title,
      description,
      isCompleted
    })
  }

  return (
    <form className='add' style={{display:"flex",flexDirection: "row", gap:"2rem"}}>

      <div style={{ display: "flex", flexDirection: "column" }}>

        <input style={style} placeholder='write your Title' type='text' value={title} onChange={(e) => addTitle(e)}></input>

        <input placeholder='description' type='text' value={description} onChange={(e) => addDescription(e)}></input>
        
        <input type="checkbox" checked={isCompleted} onClick={() => completed()} />

        <button onClick={(e) => { e.preventDefault()
          addToList()
          const data={
            title,
            description,
            isCompleted
          }
          postData(data)
          console.log(data)}}>Add Task</button>
      </div>
      <TodoList todo={todoList} />

    </form>
  )
}

export default AddTodo