import { NavLink } from "react-router";

export function College() {
    return(
        <div style={{textAlign:"center", padding:"20px"}}>
            <h1 style={{color:"gold"}}> College Page</h1>
            <hr />
            <div className="navlink-item">
                <NavLink className="navLinks" to='/'>Student </NavLink>
                <NavLink className="navLinks" to='/'>Department </NavLink>
                <NavLink className="navLinks" to='/'>Courses </NavLink>
            </div>
            
        </div>
    )
}