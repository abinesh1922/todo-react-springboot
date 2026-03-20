import React, { useEffect, useState } from 'react'
import AddTodo from '../components/AddTodo'
import SearchTodo from '../components/SearchTodo'
import { getAllTodo } from '../service/Service'


const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        const fetchTodos = async () => {
            const list = await getAllTodo();
            setTodos(list)
            console.log("Type: ",typeof list);
            console.log("data: ",list);
        }

        fetchTodos();
    },[])

    const [currentPage, SetcurrentPage] = useState(1);
    const [todosPerPage, SetTodosPerPage] = useState(6);

    const lastIndex = currentPage * todosPerPage;
    const StartingIndex = lastIndex - todosPerPage;

    const currentPost = todos.slice(StartingIndex, lastIndex)

    const pagination= (page) => SetcurrentPage(page)
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
                        <b>List of Todos</b>
                        {Array.isArray(todos) && currentPost.map((item, id)=>{
                            return(
                                <div key={id} className="bg-gray-50 border rounded-md p-3 mt-3 shadow-sm">
                                    <p className="text-gray-600"> {item.id} </p>
                                    <h2 className="font-semibold text-blue-600"> {item.title} </h2>
                                    <p className="text-gray-600"> {item.description} </p>

                                </div>
                            )
                        })}
                    </div>
                    <div className='flex space-x-5'>
                        <button className='border' onClick={() => pagination(currentPage-1)}>Last</button>
                        <button className='border' onClick={() => pagination(currentPage+1)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
