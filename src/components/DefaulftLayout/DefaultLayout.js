import { Outlet } from "react-router-dom";
import CoverHeader from "../CoverHeader";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function DefaultLayout() {
    return (
        <>
            <Header />
            <CoverHeader />
            <div className='LayoutContainer min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;