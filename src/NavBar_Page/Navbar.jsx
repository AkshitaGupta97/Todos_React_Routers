import {Link} from "react-router"
import './nav.css'

function Navbar() {
    return(
        <div className="header">
            <div>
                <Link className="link"><h2>Navbar</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="link" to="/service">Service</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar;