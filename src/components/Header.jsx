import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="flex  items-baseline justify-between px-5">

      <h1>Redux</h1>

      <nav>
        <NavLink to={'/form/add'}>Add Form</NavLink>
      </nav>


    </div>
  )
}
