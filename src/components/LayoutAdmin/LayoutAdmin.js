import { Outlet, Link } from "react-router-dom";
import {TeamOutlined, ReadOutlined, CommentOutlined, LogoutOutlined} from '@ant-design/icons';

import mlnLogo from '../../assets/icons/mlnLogo.png';

function LayoutAdmin() {
    return (
        <>
            <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
                <div class="grid grid grid-cols-12">
                    <div class="col-start-1 col-span-10  min-h-screen bg-zinc-100 pt-10 px-10">
                        <div class='flex flex-row justify-between items-center w-full h-fit bg-zinc-900 px-7 py-5 mb-10 rounded-lg'>
                            <div class='flex flex-row items-center'>
                                <img class="h-10 w-10 rounded-full" src="https://i.imgur.com/Cual95Q.png" alt="" />
                                <div class='ml-3 text-zinc-100'>Admin</div>
                            </div>
                            <div class='p-2 bg-cyan-500 rounded-full hover:bg-cyan-400 hover:text-white'><LogoutOutlined /></div>
                        </div>
                        <div class='w-full h-fit bg-white px-7 py-5 mb-10 rounded-lg'><Outlet /></div>
                    </div>
                    <div class="col-start-11 col-span-2 h-full bg-zinc-900 py-5">
                        <div class='flex flex-row justify-center mt-5'>
                        <Link to='/'>
                            <img className="w-full px-5" src={mlnLogo} alt="logo" />
                        </Link>
                        </div>
                        <div class='w-full h-px bg-zinc-800 my-10'></div>
                        <Link to='/dashboard/users' class='no-underline'>
                            <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                            <TeamOutlined /> <span className="ml-3">Thành viên</span>
                            </div>
                        </Link>
                        <Link to='/dashboard/mangas' class='no-underline'>
                            <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                            <TeamOutlined /> <span className="ml-3">Truyện tranh</span>
                            </div> 
                        </Link> 
                        <Link to='/dashboard/lightnovels' class='no-underline'>
                            <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                            <ReadOutlined /> <span className="ml-3">Tiểu thuyết</span>
                            </div>  
                        </Link>
                        <Link to='/dashboard/comments' class='no-underline'>
                            <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                            <CommentOutlined /> <span className="ml-3">Bình luận</span>
                            </div>  
                        </Link>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;