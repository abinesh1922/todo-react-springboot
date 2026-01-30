import React, { useState } from 'react'
import TodoList from './TodoList';

const AddTodo = () => {

  const [flag, setFlag] = useState();

  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");

  const [discription, setDiscription] = useState("");

  const [time, setTime] = useState("")

  const style = {
    fontSize: "20px"
  }

  const addToList = () => {
    setTodoList((prev) => [...prev, {
      todo,
      discription,
      time
    }])
  }

  const changeflag = () => {
    setflag(!flag);
  }
  const addTime = (e) => {
    setTime(e.target.value)
    console.log("Time: " + e.target.value);
  }

  const addDiscription = (e) => {
    setDiscription(e.target.value);
    console.log("Discription: " + discription)
  }

  const addTodo = (e) => {
    setTodo(e.target.value);
    console.log("Todo: " + todo);
  }

  return (
    <div className='add'>
        <input style={style} placeholder='write your Todo' type='text' value={todo} onChange={(e) => addTodo(e)}></input>
        <input placeholder='discription' type='text' value={discription} onChange={(e) => addDiscription(e)}></input>
        <input type="datetime-local" onChange={(e) => addTime(e)} />
        
        <button onClick={(e) => { addToList(e), setFlag(!flag) }}>Add Task</button>
        <div className='list'>
          {flag && <TodoList todo={todoList} />}
        </div>

    </div>
  )
}

export default AddTodo