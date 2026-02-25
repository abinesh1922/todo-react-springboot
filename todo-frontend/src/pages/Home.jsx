import React, { useEffect, useState } from 'react'
import AddTodo from '../components/AddTodo'
import SearchTodo from '../components/SearchTodo'
import { getAllTodo } from '../service/Service'


const Home = () => {
    const [Todos, setTodos] = useState([])
    useEffect(()=>{
        const fetchTodos = async () => {
            const list = await getAllTodo();
            setTodos(list)
            console.log("Type: ",typeof list);
            console.log("data: ",list);
        }

        fetchTodos();
    },[])

    return (
        <>
            <div className='min-h-screen bg-gray-100'>

                {/* nav bar */}
                <nav className='bg-blue-600 text-white shadow-md h-12 flex items-center px-6'>
                    <div className="flex justify-between items-center w-full">
                        <h1 className="text-lg font-semibold">Todo-Lite</h1>

                        <div className="md:flex space-x-8">
                            <a href="#" className="hover:text-gray-200">Home</a>
                            <a href="#" className="hover:text-gray-200">About</a>
                            <a href="#" className="hover:text-gray-200">Services</a>
                            <a href="#" className="hover:text-gray-200">Contact</a>
                        </div>
                    </div>
                </nav>

                {/* Center Button */}
                <div className="bg-white flex items-center space-x-50 h-180">
                    
                    {/* Add Todo Component */}
                    <div className="bg-amber-600 h-30 w-100 text-white mx-10 rounded-md">
                        <AddTodo />
                    </div>

                    <div className=" mt-6 rounded-md">
                        <SearchTodo />
                    </div>
                    <div>
                        <h1>List of Todos</h1>
                        {Array.isArray(Todos) && Todos.map((item, id)=>{
                            return (
                                <div key={id}>{
                                    Object.keys(item).map((k, idx)=>{
                                        if(k==="title"){
                                            return (
                                                <h2 key={idx}>{k} - {item[k]}</h2>
                                            )
                                        }
                                        return null;
                                    })}
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
