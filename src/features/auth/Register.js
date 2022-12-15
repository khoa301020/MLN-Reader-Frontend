import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/;

export default function Login() {
    const navigate = useNavigate()
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (Cookies.get('token')) {
            navigate("/");
        }
    }, [navigate])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3) {
            toast.error("Invalid Entry");
            return;
        }

        await userApi.register({ name: user, email: email, password: pwd }).then((response) => {
            if (response?.data.code === 200) {
                // TODO: remove console.logs before deployment
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response))
                //clear state and controlled inputs
                setUser('');
                setPwd('');
                setEmail('');
                setMatchPwd('');
                toast.success('Registration Successful');

                // redirect to login page
                navigate('/auth/login');
            }
        }).catch((error) => {
            if (!error?.response) {
                toast.error('No Server Response');
            } else if (error.response.data?.code === 400) {
                toast.error(error.response.data?.message);
            } else {
                console.log(error.response.data);
                toast.error('Registration Failed')
            }
        })
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Tên đăng nhập
                            </label>
                            <input className="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                ref={userRef}
                                autoComplete="off"
                                placeholder="Nhập tên đăng nhập"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                required
                            />
                            <p id="uidnote" className={userFocus && !validName ? "instructions text-red-500 text-xs italic" : "offscreen"} >Username must be 4-24 characters, start with a letter, and contain only letters, numbers, hyphens, and underscores</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input className="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Nhập email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="emailnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <p id="emailnote" className={emailFocus && !validEmail ? "instructions text-red-500 text-xs italic" : "offscreen"} >Wrong email format</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Mật khẩu
                            </label>
                            <input className="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions text-red-500 text-xs italic" : "offscreen"} >Wrong password format</p>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Nhập lại mật khẩu
                            </label>
                            <input className="appearance-none border-gray-400 border-solid border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="matchPassword"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={matchPwd}
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="matchnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p id="matchnote" className={matchFocus && !validMatch ? "instructions text-red-500 text-xs italic" : "offscreen"} >Passwords do not match</p>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button className="border-solid bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-3"
                                disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}>
                                Đăng ký
                            </button>

                            <div className='text-center'> Đã có tài khoản? <Link to='/auth/login' className='no-underline text-blue-500 font-semibold hover:text-blue-700'>Đăng nhập</Link> </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
}