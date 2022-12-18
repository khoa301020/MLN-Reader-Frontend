import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';

export default function Login() {
    const userRef = useRef();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (Cookies.get('token')) {
            navigate("/");
        }
    }, [navigate])

    useEffect(() => {
        if (user && pwd && !check) {
            setCheck(true);
        }
        if ((!user || !pwd)) {
            setCheck(false);
        }
    }, [user, pwd, check])

    const handleSubmit = async (e) => {
        e.preventDefault();

        await userApi.login({ query: user, password: pwd }).then((res) => {
            const user = res.data.result;

            localStorage.setItem('username', user.username);
            localStorage.setItem('role', user.role);
            console.log(res.data.result.token);
            Cookies.set('token', user.token);
            setUser('');
            setPwd('');
            toast.success("Đăng nhập thành công");
            // redirect to login page   
            navigate('/');
        }).catch((err) => {
            toast.error(err.response.data.message);
        });
    }

    return (
        <div className='wrapper flex justify-center h-screen w-full min-h-full bg-slate-100 pt-20'>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div className='login-box flex justify-center max-w-screen-md w-full h-fit'>
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="username">
                                Tên đăng nhập
                            </label>
                            <input className="appearance-none bg-white border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                ref={userRef}
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="password">
                                Mật khẩu
                            </label>
                            <input className="appearance-none bg-white border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className="border-solid bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-3"
                                disabled={!check ? true : false}>
                                Đăng nhập
                            </button>

                            <div className='text-center'> Chưa có tài khoản? <Link to='/auth/register' className='no-underline text-blue-500 font-semibold hover:text-blue-700'>Đăng ký</Link></div>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}