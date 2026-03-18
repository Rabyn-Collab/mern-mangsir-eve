import { useContext } from "react";
import { Button } from "../../components/ui/button.jsx";
import { faker } from "@faker-js/faker";
import { TodoContext } from "../../context/TodoContext.jsx";

export default function AddForm() {
  const { addTodo, todos } = useContext(TodoContext);

  return (
    <div>

      {todos.length > 0 && <p>Number of todos: {todos.length}</p>}

      <Button onClick={() => addTodo({
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      })}>Add todo</Button>



    </div>
  )
}