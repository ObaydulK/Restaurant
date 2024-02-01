import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NevBar/NavBar";

const Main = () => {
    const noheaderfooter = location.pathname.includes('login')
    return (
        <div>
            {noheaderfooter || <NavBar />}
            <Outlet />
            {noheaderfooter || <Footer />}
        </div>
    );
};

export default Main;