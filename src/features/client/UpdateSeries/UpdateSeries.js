import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { userApi } from '../../../api/api';
import TreeView from '../../../components/TreeView';
import NovelVolume from '../CreateComponents/Section';
import Book from '../UpdateComponents/Book';
import MangaChapter from '../UpdateComponents/MangaChapter';
import NovelChapter from '../UpdateComponents/NovelChapter';
import Section from '../UpdateComponents/Section';

export default function UpdateSeries() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [childId, setChildId] = useState({});
  const [type, setType] = useState('');

  useEffect(() => {
    if (id.includes('novel')) {
      setType('novel');
    } else {
      setType('manga');
    }
  }, [id]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = Cookies.get('token');

    userApi
      .bookVerify(id, username, token)
      .then((res) => {
        if (res.data.message === 'Failed') {
          console.log(res.data.message);
          toast.error('Bạn không có quyền truy cập');
          navigate('/');
        }
      })
      .catch((err) => {
        Cookies.remove('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        console.log(err);
        toast.error('Phiên đăng nhập đã hết hạn');
        navigate('/auth/login');
      });
  }, [id, navigate]);

  function onSubjectClick({ id, type }) {
    setChildId(id);
    setType(type);
  }

  return (
    <div className="w-full min-h-screen flex flex-row">
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-start-1 col-span-2 w-full h-full overflow-hidden border-r border-t-0 border-l-0 border-b-0  border-gray-400 border-solid pr-2">
          <TreeView id={id} onSubjectClick={onSubjectClick} />
        </div>

        <div className="col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded my-20">
          {(type === 'novel' || type === 'manga') && <Book id={id} type={type} />}
          {type.includes('section') && <Section id={childId} />}
          {type === 'novel-chapter' && <NovelChapter id={childId} />}
          {type === 'manga-chapter' && <MangaChapter id={childId} />}
          {type.includes('novel-volume') && <NovelVolume id={childId} />}
        </div>
      </div>
    </div>
  );
}
