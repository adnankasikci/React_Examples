import React, { useReducer } from 'react'
import Todo from './Todo'
import ModuleCSS from './todo.module.css'
import todoReducer from './../reducers/TodoReducer';


function TodoForm() {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
    })

    const submitHandle = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo,
        })
    }

    const todoChange = e => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }


    return (
        <form onSubmit={submitHandle} className='flex flex-col p-5 text-white bg-gray-900 rounded-md w-[20rem] h-[25rem] lg:w-[25rem] lg:h-[25rem]'>
            <h1 className='text-xl font-bold text-center'>Bugün Planında Neler Var?</h1>
            <div className='p-[2px] bg-gradient-to-r from-[#4310D0] to-[#8E00F9] rounded-sm mt-5'>
                <input value={state.todo} onChange={todoChange} className='w-3/4 p-2 text-sm text-white bg-black rounded-sm focus:outline-0' type="text" placeholder='Yapılacaklar Listesine Ekle' />
                <button className='w-1/4 text-sm'>Yeni Ekle</button>
            </div>
            <ul className={ModuleCSS.todoList}>
                {
                    state.todos.map((item, index) => (
                        <Todo item={item} key={index} dispatch={dispatch} />
                    ))
                }
            </ul>
        </form >
    )
}

export default TodoForm
