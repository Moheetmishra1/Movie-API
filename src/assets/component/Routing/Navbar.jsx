import { NavLink } from "react-router-dom";



export default function Navbar(){



    return (
      <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>SignUp</NavLink>
        </nav>

        </>
    )
}