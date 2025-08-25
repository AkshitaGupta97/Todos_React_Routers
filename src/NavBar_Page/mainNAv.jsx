import { Route, Routes } from "react-router"; // Navigate => import it
import Navbar from "./Navbar";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import PageNotFound from "./Pagenotfound";
import { College } from "./College";
import { Student } from "./student";
import { Department } from "./Department";
import { Course } from "./Course";
import { User } from "./User";
import UserDetails from "./UserDetails";

function MainNav() {
    return (
        <div>
           {/*  <Navbar /> */}


            <Routes>

                <Route path="/" element={<Navbar/>}>  {/* i want navbar to show on specific pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}  />
                    <Route path="/contact" element={<Contact />} /> 
                    {/*<Route path="/user" element={<User />} /> */}
                    {/* <Route path="/user/:id" element={<UserDetails />} /> */}  {/* it will be rendered when the we go to user id */}
                    <Route path="/user/list?" element={<User />} />  {/* "/user/list?" => here list is optional  */}
                    {/* <Route path="/user/list" element={<User />} /> */}
                    <Route path="/user/:id/:name?" element={<UserDetails />} />  {/* this pages will render based on user id */}
                    {/* <Route path="/user/:id/name" element={<UserDetails />} /> */}
                </Route>

                {/*
                    <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}  />
                <Route path="/contact" element={<Contact />} />
                
                */}

                {/*
                    <Route path="in">
                        <Route path="in/user">
                            <Route path="/in/user/login" element={<About />}/>
                            <Route path="/in/user/about" element={<Contact />}/>
                        </Route>
                    </Route>
                */}

                <Route path="/college" element={<College />} >
                    <Route path="student" element={<Student />} /> {/* <Route index element={<Student />} /> */}
                    <Route path="department" element={<Department />} />
                    <Route path="course" element={<Course />} />
                </Route>

                <Route path="/*" element={<PageNotFound />} />
                {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>
    )
}
export default MainNav;