import { NavLink } from "react-router";
import DropdownMenuUser from "./DropDownMenuUser.jsx";
import { useSelector } from "react-redux";

export default function Header() {

  const { user } = useSelector(state => state.userSlice);
  return (
    <div className="px-5 py-2 flex justify-between">

      <h1>Shopping</h1>



      {user ? <DropdownMenuUser user={user} /> : <nav className="flex gap-5 items-center">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register" className={'bg-blue-500 px-4 py-2 rounded-2xl text-white'}>Register</NavLink>
      </nav>
      }



    </div>
  )
}