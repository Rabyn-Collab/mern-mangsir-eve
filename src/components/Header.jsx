import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="flex  items-baseline justify-between px-5">

      <h1>Apis</h1>

      <NavLink to={'/add-form'}>Add Form</NavLink>




    </div>
  )
}
