import { SearchOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';
import mlnLogo from '../../assets/icons/mlnLogo.png';

function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get('token')) {
      console.log(Cookies.get('token'));
    }
  }, []);

  function handleSearch() {
    console.log('search');
  }

  function removeAuth() {
    Cookies.remove('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  function handleLogout() {
    const body = {
      username: localStorage.getItem('username'),
    }
    userApi.logout(body).then(() => {
      removeAuth()
      toast.success('Đăng xuất thành công');
      navigate('/auth/login')
    }).catch((err) => {
      console.log(err);
      toast.error(err.response.message);
    })
  }

  function preCreateSeries() {
    if (!localStorage.getItem('role') || !localStorage.getItem('username') || !Cookies.get('token')) {
      removeAuth()
      toast.error('Bạn phải đăng nhập để đăng truyện');
      navigate('/auth/login');
    } else {
      navigate('/action/create-series');
    }
  }

  return (
    <>
      <div className='wrapper flex flex-col flex-wrap w-full h-fit min-h-fit max-w-screen-xl mx-auto'>
        <div className='navBar grid grid-cols-12 gap-12 bg-white'>
          <div className='container col-start-2 col-span-10'>
            <div className='flex flex-row flex-nowrap justify-between'>
              <div className='left-nav flex flex-row flex-wrap content-center items-center'>
                <div className='logo'>
                  <a href='/' className='no-underline'>
                    <img className='w-48' src={mlnLogo} alt='logo' />
                  </a>
                </div>
                <div className='menu'>
                  <ul className='navigation list-none inline-flex'>
                    <li>
                      <Link to='/manga' className='no-underline pr-6 font-medium text-black hover:text-gray-500 duration-700'>Truyện tranh</Link>
                    </li>
                    <li>
                      <Link to='/lightnovel' className='no-underline text-black font-medium hover:text-gray-500 duration-700'>Tiểu Thuyết</Link>
                    </li>
                    {localStorage.getItem('username') && (
                      <li>
                        <p className='no-underline text-black font-medium hover:text-gray-500 duration-700' onClick={preCreateSeries}>Đăng truyện</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className='right-nav flex flex-row justify-between content-center items-center'>
                <div className="relative text-gray-600 mr-5">
                  <input type="search" placeholder="Search" className="search bg-white text-gray-700 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none border border-solid " />
                  <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 bg-transparent border-0" onClick={handleSearch}>
                    <SearchOutlined />
                  </button>
                </div>
                {Cookies.get('token') ? (
                  <>
                    <p className="text-black font-medium">Xin chào, {localStorage.getItem('username')}</p>
                    <button className="bg-cyan-400 hover:bg-teal-400 duration-300 text-white font-medium py-2 px-4 rounded-full border-none"
                      onClick={handleLogout}>
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <Link to='/auth/login'>
                    <button className="bg-cyan-400 hover:bg-teal-400 duration-300 text-white font-medium py-2 px-4 rounded-full border-none">
                      Đăng nhập
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;