import React, { useState } from 'react'

const TodoList = (props) => {
    const { todo } = props;

    return (
        <div>
            {todo.map((data, idx) => {
                return (
                    <div className="list" key={idx}>
                        {
                            Object.keys(data).map((k, id) => {
                                if (k == "isCompleted") {
                                    return (
                                        <h3 key={id}>{k} - {data[k] ? "True" : "False"}</h3>
                                    )
                                }  
                                return (
                                    <h3 key={id}>{k} - {data[k]}</h3>
                                )
                            })
                        }
                    </div>
                );
            })
            }
        </div>
    )
}

export default TodoList