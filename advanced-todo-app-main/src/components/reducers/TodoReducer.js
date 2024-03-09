function todoReducer(state, action) {
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.value
            }
        case 'ADD_TODO':
            return {
                ...state,
                todo: '',
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo !== action.todo)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo === action.oldTodo ? action.newTodo : todo)
            }
        default:
            return state
    }
}

export default todoReducer