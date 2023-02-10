import { BrowserRouter, Route, Routes } from "react-router-dom";
import Works from "../pages/Works";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Workcs from "../pages/Workcs";
import Work from "../pages/Work";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Works" element={<Works />} />
                <Route path="contact" element={<Contact /> }/>
                <Route path="workcs" element={<Workcs />} />
                <Route path="works/:id" element={<Work />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;