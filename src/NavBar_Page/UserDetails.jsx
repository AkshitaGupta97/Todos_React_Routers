import { useParams } from "react-router"
import { Link } from "react-router";

export default function UserDetails() {
    const paramsData = useParams();

    console.log(paramsData)
    return (
        <div style={{color:"white", margin:" 12px", textAlign:"center"}}> 
            <h2>User Details Page</h2>
            <h4 style={{textDecoration:"none", color:"papayawhip"}}> <Link to="/user">Back</Link>  </h4>
            <hr />
            <h3 style={{color:"green"}}> User id is : <span style={{color:"white"}}>{paramsData.id}</span></h3>
        </div>
    )
}