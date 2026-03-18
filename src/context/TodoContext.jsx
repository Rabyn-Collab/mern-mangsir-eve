import { createContext, useReducer } from "react"
const TodoContext = createContext();

const initialValue = {
  todos: []
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload]
      }
    default:
      return state;
  }
}


const TodoProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialValue);

  const addTodo = (todo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }

  return <TodoContext.Provider value={{ todos: state.todos, addTodo }} >
    {children}
  </TodoContext.Provider>
}



export { TodoContext, TodoProvider }