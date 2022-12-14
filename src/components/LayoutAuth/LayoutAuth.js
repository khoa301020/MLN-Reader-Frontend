import { Outlet } from "react-router-dom";
import Header from '../Header/Header'

function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="LayoutContainer">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;