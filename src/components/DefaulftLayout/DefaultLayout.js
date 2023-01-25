import { Outlet } from "react-router-dom";
import CoverHeader from "../CoverHeader";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function DefaultLayout() {
    return (
        <>
            <Header />
            <CoverHeader />
            <div className='LayoutContainer min-h-screen bg-zinc-800'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;