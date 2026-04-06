import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="px-5 py-2 flex justify-between">

      <h1>Shopping</h1>
      <nav className="flex gap-5 items-center">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register" className={'bg-blue-500 px-4 py-2 rounded-2xl text-white'}>Register</NavLink>
      </nav>
    </div>
  )
}