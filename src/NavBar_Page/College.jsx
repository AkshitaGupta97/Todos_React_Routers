import { Link, NavLink, Outlet } from "react-router";

export function College() {
    return(
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1 style={{color:"gold"}}> College Page</h1>
            <h2><Link to="/">Go to Home Page</Link></h2>
            <hr />
            <div className="navlink-item">
                <NavLink className="navLinks" to='student'>Student </NavLink>  {/* <NavLink className="navLinks" to=''>Student </NavLink> */}
                <NavLink className="navLinks" to='department'>Department </NavLink>
                <NavLink className="navLinks" to='course'>Courses </NavLink>
                
                <Outlet />
            </div>
            
        </div>
    )
}