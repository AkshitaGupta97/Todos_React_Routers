import { Link, Outlet } from "react-router"
import './nav.css'

function Navbar() {
    return (
        <div>
            <div className="header">
                <div>
                    <Link className="nav" to="/" ><h2>Navbar</h2></Link>
                </div>
                <div>
                    <ul className="ul-link">
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="link" to="/college">College</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default Navbar;