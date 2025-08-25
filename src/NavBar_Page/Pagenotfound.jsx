import { Link } from "react-router"
export default function PageNotFound() {
    return (
        <div style={{color:"white", margin:" 12px", textAlign:"center"}}> 
            <h2>404 Error</h2>
            <h2>Page Not Found</h2>
            <div>
                <Link to="/" style={{color:"pink", textDecoration:"none"}}>Go to Home Page</Link>
            </div>
            <img style={{marginTop:"20px", width:"60%"}} src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-8.png" alt="" />
        </div>
    )
}