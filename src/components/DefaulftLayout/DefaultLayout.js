import { Outlet } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="LayoutContainer">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;