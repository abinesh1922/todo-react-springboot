import React, { use, useState } from 'react'
import { getDataById } from '../service/Service';
const SearchTodo = () => {

    const [id, setId] = useState("");
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false)

    const showTodoById= async (e)=>{
        e.preventDefault();
        try{
            if (!id) {
                setError("Please enter an ID");
                return;
            }
            setLoading(true)
            const result = await getDataById(id)
            setTodo(result)
        } catch(e){
            throw (e.message)
        } finally{
            setLoading(false)
            setToggle(true)
        }
    }
    return (
        <>
            <form onSubmit={(e)=>showTodoById(e)}>

                {/*Search By Id*/}
                <input type='text' className='border' value={id} placeholder='Todo-Id' onChange={(e)=>{
                    setId(e.target.value)
                }} />

                <button type='submit'>Search</button>

                {loading && <p>Loading....</p>}

                {toggle && (
                    <div>
                        <h1>Id: {todo.id}</h1>
                        <h1>Title: {todo.title}</h1>
                        <h2>Description: {todo.description}</h2>
                        <h3>status: {todo.isCompleted ? "completed" : "pending"}</h3>   
                    </div>
                )}

            </form>
        </>
    )
}

export default SearchTodo