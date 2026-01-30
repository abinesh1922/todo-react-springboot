import React, { useState } from 'react'

const TodoList = (props) => {
    const { todo } = props;

    return (
        todo.map((data, idx) => {
            return (
                <div>
                    <div key={idx}>
                        {
                            Object.keys(data).map((k, id)=>{
                                return(
                                    <h2 key={id}>{k} - "{data[k]}"</h2>
                                )
                            })
                        }
                    </div>
                </div>
            );
        })
    )
}

export default TodoList