import { Outlet, Link } from "react-router-dom";
import {TeamOutlined, ReadOutlined, CommentOutlined} from '@ant-design/icons';

import mlnLogo from '../../assets/icons/mlnLogo.png';

function LayoutAdmin() {
    return (
        <>
            <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
                <div class="grid grid grid-cols-12">
                    <div class="col-start-1 col-span-10 bg-zinc-100 pt-10 px-10">
                        <div class='w-full h-fit bg-white px-7 py-5 mb-10 rounded-lg'>
                            <div class="flex flex-col p-2 py-6 m-h-screen">
                                <div class="items-center justify-between w-full flex rounded-full p-2 mb-5 sticky">
                                    <input class="font-bold rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Nhập vào đây" />
                                    <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
                                        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class='w-full h-fit bg-white px-7 py-5 mb-10 rounded-lg'><Outlet /></div>
                    </div>
                    <div class="col-start-11 col-span-2 bg-zinc-900 h-screen py-5">
                        <div class='flex flex-row justify-center mt-5'>
                        <Link to="/">
                            <img className="w-full px-5" src={mlnLogo} alt="logo" />
                        </Link>
                        </div>
                        <div class='w-full h-px bg-zinc-800 my-10'></div>
                        <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                        <TeamOutlined /> <span className="ml-3">Thành viên</span>
                        </div>
                        <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                        <TeamOutlined /> <span className="ml-3">Truyện tranh</span>
                        </div>  
                        <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                        <ReadOutlined /> <span className="ml-3">Tiểu thuyết</span>
                        </div>  
                        <div class='text-zinc-300 text-sm px-2 py-3 border border-solid border-transparent hover:bg-sky-900 hover:text-white hover:border-sky-500 px-5 cursor-pointer'>
                        <CommentOutlined /> <span className="ml-3">Bình luận</span>
                        </div>                          
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;