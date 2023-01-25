import { Outlet } from "react-router-dom";
import Header2 from '../Header2/Header2'

function DefaultLayout() {
    return (
        <>
            <Header2 />
            <div className="LayoutContainer bg-zinc-100">
                <Outlet />
            </div>
        </>
    );
}

export default DefaultLayout;