import { LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';
import mlnLogo from '../../assets/icons/mlnLogo.png';

function Header() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  function removeAuth() {
    Cookies.remove('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  function handleLogout() {
    const body = {
      username: localStorage.getItem('username'),
    };
    userApi
      .logout(body)
      .then(() => {
        removeAuth();
        toast.success('Đăng xuất thành công');
        navigate('/auth/login');
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.message);
      });
  }

  function preCreateSeries() {
    if (!localStorage.getItem('role') || !localStorage.getItem('username') || !Cookies.get('token')) {
      removeAuth();
      toast.error('Bạn phải đăng nhập để đăng truyện');
      navigate('/auth/login');
    } else {
      navigate('/action/create-series');
    }
  }
  function handleSearch(e) {
    e.preventDefault();
    const encodedKeyword = encodeURI(searchKeyword);
    navigate(`/search?keyword=${encodedKeyword}`);
  }

  return (
    <>
      <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
        <div className="navBar" class="grid grid-cols-12 gap-12 bg-white">
          <div className="container" class="col-start-2 col-span-10">
            <div className="flex flex-row flex-nowrap justify-between">
              <div className="left-nav" class="flex flex-row content-center items-center">
                <div className="logo">
                  <a href="/" class="no-underline">
                    <img className="w-40" src={mlnLogo} alt="logo" />
                  </a>
                </div>
                <div className="menu">
                  <ul className="navigation" class="list-none inline-flex">
                    <li>
                      <Link
                        to="/manga"
                        class="no-underline pr-6 font-medium text-black hover:text-gray-500 duration-700"
                      >
                        Truyện tranh
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lightnovel"
                        class="no-underline text-black font-medium hover:text-gray-500 duration-700"
                      >
                        Tiểu Thuyết
                      </Link>
                    </li>
                    {localStorage.getItem('username') && (
                      <li>
                        <div
                          class="no-underline text-black font-medium hover:text-gray-500 duration-700"
                          onClick={preCreateSeries}
                        >
                          Đăng truyện
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="right-nav" class=" flex flex-row justify-between content-center items-center">
                <form className="relative text-gray-600 mr-5">
                  <input
                    type="search"
                    placeholder="Search"
                    className="search bg-white text-gray-700 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none border border-solid "
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-2 mr-2 bg-transparent border-0"
                    onClick={handleSearch}
                  >
                    <SearchOutlined />
                  </button>
                </form>
                {Cookies.get('token') ? (
                  <>
                    <Link to="/me" class="no-underline">
                      <div className="text-black font-sm">Xin chào, {localStorage.getItem('username')}</div>
                    </Link>
                    <button
                      className="bg-cyan-400 hover:bg-teal-400 duration-300 text-white py-2 px-2 rounded-full border-none ml-3"
                      onClick={handleLogout}
                    >
                      <LogoutOutlined />
                    </button>
                  </>
                ) : (
                  <Link to="/auth/login">
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
