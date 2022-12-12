import {Link} from 'react-router-dom'
import mlnLogo from '../../assets/icons/mlnLogo.png'
import {SearchOutlined} from '@ant-design/icons'
import coverHeader from '../../assets/img/coverHeader.jpg'

function Header() {
    return (
        <>
            <div className='wrapper' class='flex flex-col flex-wrap w-full h-fit min-h-fit max-w-screen-xl mx-auto'>
                <div className='navBar' class='grid grid-cols-12 gap-12 bg-white'>
                    <div className='container' class='col-start-2 col-span-10'>
                        <div class='flex flex-row flex-nowrap justify-between'>
                            <div className='left-nav' class='flex flex-row flex-wrap content-center items-center'>
                                <div className='logo'>
                                        <img class='w-48' src={mlnLogo} alt='logo' />
                                    </div>
                                    <div className='menu'>
                                        <ul className='navigation' class='list-none inline-flex'>
                                            <li>
                                                <Link to='/manga' class='no-underline pr-6 font-medium text-black hover:text-gray-500 duration-700'>Truyện tranh</Link>
                                            </li>
                                            <li>
                                                <Link to='/lightnovel' class='no-underline text-black font-medium hover:text-gray-500 duration-700'>Tiểu Thuyết</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            <div className='right-nav' class='flex flex-row justify-between content-center items-center'>
                            <div class="relative text-gray-600 mr-5">
                                <input type="search" name="serch" placeholder="Search" class="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none border border-solid " />
                                <button type="submit" class="absolute right-0 top-0 mt-2 mr-2 bg-transparent border-0">
                                    <SearchOutlined />
                                </button>
                            </div>
                                <Link to='/login'>
                                    <button class="bg-cyan-400 hover:bg-teal-400 duration-300 text-white font-medium py-2 px-4 rounded-full border-none">
                                        Đăng nhập
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cover'>
                    <img class='w-full h-56 object-cover' src={coverHeader} alt='cover' />
            </div>
        </>
    );
}

export default Header;