import { useReducer } from "react";
import todoReducer from './reducers/todoReducers'


function App() {

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  })

  // const [todos, SetTodos] = useState([])
  // const [todo, SetTodo] = useState()

  const submitHandle = e => {
    e.preventDefault()
    //SetTodos([...todos, todo])
    //SetTodo('');
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  }

  const onChange = e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }

  return (
    <>
      <h1>App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} type="submit">Ekle</button>
      </form>

      <ul>
        {
          state.todos.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
