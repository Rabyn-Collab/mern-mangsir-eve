import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext.jsx"


export default function Home() {

  const { todos } = useContext(TodoContext);

  return (
    <div>

      <h1>Hello Jee</h1>





      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.username}</h2>
          <p>{todo.email}</p>
        </div>
      ))}


    </div>
  )
}