import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import AddTodo from '../components/AddTodo'
import SearchTodo from '../components/SearchTodo';

const Home = () => {
    const [flag, setFlag] = useState();
    return (
        <div>
            <div>
                <h1>Todo-Lite</h1>
                <button className="homeBtn" onClick={() => setFlag(!flag)}> {flag ? "Close Todo" : "Add Todo"}</button>
            </div>
            <SearchTodo />
            {flag && <AddTodo />}
        </div>
    )
}

export default Home