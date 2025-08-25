import { Link } from "react-router"
export function User() {
    const userData = [
        {id:1, name:"Akshita", course:"BCA"},
        {id:2, name:"Anil", course:"BBA"},
        {id:3, name:"Simran", course:"MCA"},
        {id:4, name:"Reena", course:"BTECH"},
        {id:5, name:"Himanshu", course:"MBA"},
    ]
    return(
        <div style={{padding:"40px", border:"2px solid orange", borderRadius:"8px", textAlign:"center", margin:"20px"}}>
            <h3 style={{color:"aquamarine"}}> User Page...</h3>
            <hr />
            {
                userData.map((item) => (
                    <div style={{textDecoration:"none"}}>
                                {/* <Link to={"/user/"+ item.id} >  = means pages will render based on id given to them */} 
                        <h4><Link to={"/user/"+ item.id} > <span style={{color:"blanchedalmond"}}>{item.name}</span> - <span style={{color:"orange"}}>{item.course}</span> </Link></h4>
                    </div>
                ))
            }
        </div>
    )
}