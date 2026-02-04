import { NavLink } from "react-router";

export default function Header() {

  const handleScroll = () => {
    const menuId = document.getElementById('menu');
    menuId.scrollIntoView({ behavior: 'smooth' })

  }
  return (
    <div className="h-10 fixed w-full top-0 hover:bg-black bg-black opacity-30 text-white">


      <nav className="flex  h-10 items-center hover:text-white ">
        <NavLink className="hover:bg-white hover:text-black px-5 py-2" to={'/about'}>HOME</NavLink>

        <NavLink
          onClick={handleScroll}

          className="hover:bg-white hover:text-black px-5 py-2">MENU</NavLink>

        <NavLink className="hover:bg-white hover:text-black  px-5 py-2" to={'/about'}>ABOUT</NavLink>
        <NavLink className="hover:bg-white hover:text-black  px-5 py-2" to={'/about'}>CONTACT</NavLink>

      </nav>

    </div>
  )
}
