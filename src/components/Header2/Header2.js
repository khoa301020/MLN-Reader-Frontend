import Cookies from 'js-cookie';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';
// import mlnLogo from '../../assets/icons/mlnLogo.png';
import './Header2.css';

function Header2() {
  const navigate = useNavigate();

  function handleLogout() {
    const body = {
      username: localStorage.getItem('username'),
    }
    userApi.logout(body).then(() => {
      Cookies.remove('token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      toast.success('Đăng xuất thành công');
      navigate('/auth/login')
    }).catch((err) => {
      console.log(err);
      toast.error(err.response.message);
    })
  }

  return (
    <>
      <div className='wrapper' class='flex flex-row flex-wrap w-full h-auto min-h-fit bg-gray-100 justify-center'>
        <div class='flex flex-row justify-between items-center max-w-screen-xl py-4 px-8 w-full'>
          <div>
            <div class='flex uppercase text-xl font-semibold'>Bảng điều khiển</div>
          </div>

          <div>

            <div class="dropdown inline-block relative">
              <button class="text-gray-700 font-semibold py-2 px-4 inline-flex items-center border-none" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;