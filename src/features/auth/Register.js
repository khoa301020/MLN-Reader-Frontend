import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="wrapper" class='flex justify-center h-screen w-full min-h-full bg-slate-100 pt-20'>
                <div className="login-box" class='flex justify-center max-w-screen-md w-full h-fit'>
                    <div class="w-full max-w-xs">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Tên đăng nhập
                            </label>
                            <input class="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nhập tên đăng nhập"/>
                            </div>
                            <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Mật khẩu
                            </label>
                            <input class="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Nhập mật khẩu"/>
                            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                            </div>
                            <div class='flex flex-col justify-center'>
                                <button class="border-solid bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-3">
                                    Đăng ký
                                </button>

                                <div class='text-center'> Đã có tài khoản? <a href='##' class='no-underline text-blue-500 font-semibold hover:text-blue-700'>Đăng nhập</a> </div>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        );
    }
}