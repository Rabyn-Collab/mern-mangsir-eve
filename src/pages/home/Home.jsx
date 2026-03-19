import { useCallback, useState } from "react";
import Child from "./Child.jsx";
import { Button } from "../../components/ui/button.jsx";

export default function Home() {

  const [count, setCount] = useState(0);


  const func = useCallback(() => {
    console.log('hello jee');
  }, []);



  return (
    <div>




      <h3>{count}</h3>

      <Button onClick={() => setCount(count + 1)}>Increment</Button>


      <h1>This is home page</h1>


      <hr />
      <hr />
      <Child func={func} />



    </div>
  )
}