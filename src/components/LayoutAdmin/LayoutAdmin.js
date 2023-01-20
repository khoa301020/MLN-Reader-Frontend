import { Outlet, Link } from "react-router-dom";
// import Header3 from '../Header3/Header3'
import mlnLogo from '../../assets/icons/mlnLogo.png';

function LayoutAdmin() {
    return (
        <>
            <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
                <div class="grid grid grid-cols-12">
                    <div class="col-start-1 col-span-2 bg-zinc-900 h-screen py-5 px-5">
                        <div class='flex flex-row justify-center mt-5'>
                        <Link to="/">
                            <img className="w-full" src={mlnLogo} alt="logo" />
                        </Link>
                        </div>                        
                    </div>
                    <div class="col-start-3 col-span-10 bg-zinc-100 pt-10 px-10">
                        <div class='w-full h-fit bg-white px-7 py-5 mb-10 rounded-lg'>lai</div>
                        <div class='w-full h-fit bg-white px-7 py-5 mb-10 rounded-lg'><Outlet /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;