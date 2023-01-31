import Cookies from 'js-cookie';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import mlnLogo from '../../assets/icons/mlnLogo.png';
import './Header2.css';

function Header2() {
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('avatar');
    toast.success('Đăng xuất thành công');
    navigate('/auth/login');
  }

  return (
    <>
      <div className="wrapper flex flex-row flex-wrap w-full h-auto min-h-fit bg-zinc-200 justify-center">
        <div className="flex flex-row justify-between items-center max-w-screen-xl py-4 px-8 w-full">
          <div>
            <div className="flex uppercase text-xl font-semibold text-zinc-800">Bảng điều khiển</div>
          </div>

          <div>
            <div className="dropdown inline-block relative bg-slate-200">
              <button
                className="text-zinc-400 bg-zinc-100 font-semibold py-2 px-4 inline-flex items-center border-none hover:text-zinc-600 hover:bg-zinc-200"
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
