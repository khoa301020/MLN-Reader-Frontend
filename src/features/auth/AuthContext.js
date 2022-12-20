import Cookies from 'js-cookie';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../api/api';

export default function AuthContext() {
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        const token = Cookies.get('token');
        userApi.verify(username, token).then(res => {
            console.log(res.data.result);
        }).catch(err => {
            Cookies.remove('token');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            navigate("/auth/login");
            console.log(err);
            toast.error("Phiên đăng nhập đã hết hạn");
        })
    }, [navigate])
}