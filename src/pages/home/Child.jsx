import { memo } from "react";

function Child({ func }) {

  console.log('child render');

  return (
    <div>

      <h1>Hello Im child component</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore maxime voluptas, cum eius incidunt, repellat animi voluptate voluptates totam doloremque aut quia rem eum id reprehenderit aliquam ipsa magnam fuga.</p>




    </div>
  )
}

export default memo(Child);