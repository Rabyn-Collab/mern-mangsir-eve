import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>

      <h1>Formik</h1>

      <nav>
        <NavLink to={'/form/add'}>Add Form</NavLink>
      </nav>


    </div>
  )
}
