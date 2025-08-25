import { NavLink, Outlet } from "react-router"
import './nav.css'

function Navbar() {
    return (
        <div>
            <div className="header">
                <div>
                    <NavLink className="nav" to="/" ><h2>Navbar</h2></NavLink>
                </div>
                <div>
                    <ul className="ul-link">
                        <li>
                            <NavLink className="link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/college">College</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/user">User</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/user/list">List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default Navbar;