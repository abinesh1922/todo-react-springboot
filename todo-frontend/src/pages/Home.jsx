import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import AddTodo from '../components/AddTodo'

const Home = () => {
    const [flag, setFlag] = useState();
    return (
        <>
            <h1>Todo-Lite</h1>
            <button className="homeBtn" onClick={() =>setFlag(!flag)}> {flag ? "Close Todo" : "Add Todo"}</button>
            {flag && <AddTodo />}
        </>
    )
}

export default Home