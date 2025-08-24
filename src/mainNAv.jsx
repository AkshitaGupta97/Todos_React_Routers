import { Route, Routes } from "react-router"; // Navigate => import it
import Navbar from "./NavBar_Page/Navbar";
import { Home } from "./NavBar_Page/home";
import { About } from "./NavBar_Page/about";
import { Contact } from "./NavBar_Page/contact";
import PageNotFound from "./Pagenotfound";
import { College } from "./College";

function MainNav() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}  />
                <Route path="/contact" element={<Contact />} />
                <Route path="/college" element={<College />} />
                <Route path="/*" element={<PageNotFound />} />
                {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>
    )
}
export default MainNav;