import { Outlet } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CoverHeader from "../CoverHeader";

function DefaultLayout() {
    return (
        <>
            <Header />
            <CoverHeader />
            <div className="LayoutContainer" class='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;