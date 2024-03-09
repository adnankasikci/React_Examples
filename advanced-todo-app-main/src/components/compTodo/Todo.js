import React from 'react'
import { FaTrash, FaPenToSquare } from "react-icons/fa6";


export default function Todo({ item, dispatch }) {

    const todoDelete = () => {
        dispatch({
            type: 'DELETE_TODO',
            todo: item
        });
    }

    const todoUpdate = () => {
        const newTodoValue = prompt("Yeni değeri giriniz:");

        dispatch({
            type: 'UPDATE_TODO',
            oldTodo: item,
            newTodo: newTodoValue
        });
    }

    return (
        <>
            <li className='flex items-center justify-between p-2 mt-2 rounded-sm me-2'>
                <span>{item}</span>
                <div className='flex items-center gap-2 text-black'>
                    <FaPenToSquare className='cursor-pointer' onClick={todoUpdate} />
                    <FaTrash className='cursor-pointer' onClick={todoDelete} />
                </div>
            </li>
        </>
    )
}
