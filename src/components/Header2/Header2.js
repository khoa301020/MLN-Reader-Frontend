import React from 'react';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import mlnLogo from '../../assets/icons/mlnLogo.png';
import './Header2.css'

function Header2() {
    return (
        <>
            <div className='wrapper' class='flex flex-row flex-wrap w-full h-auto min-h-fit bg-gray-100 justify-center'>
                <div class='flex flex-row justify-between items-center max-w-screen-xl py-4 px-8 w-full'>
                    <div>
                        <div class='flex uppercase text-xl font-semibold'>Bảng điều khiển</div>
                    </div>
                    
                    <div>

                        <div class="dropdown inline-block relative">
                            <button class="text-gray-700 font-semibold py-2 px-4 inline-flex items-center border-none">
                            <span class="mr-1">
                                <UserOutlined />
                                <DownOutlined />
                            </span>
                            </button>
                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 list-none">
                            <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline text-black" href="##">One</a></li>
                            <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline text-black" href="##">Two</a></li>
                            <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline" href="##">Three is the magic number</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
                
            </div>
        </>
    );
}

export default Header2;