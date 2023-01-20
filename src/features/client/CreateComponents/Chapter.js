import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
// import TreeView from '../../../components/TreeView';
import { useNavigate, useParams } from 'react-router-dom';
import { mangaApi, novelApi } from '../../../api/api';
import MangaChapter from './MangaChapter';
import NovelChapter from './NovelChapter';

export default function Chapter() {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [section, setSection] = useState({});
  const [type, setType] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      toast.error('Bạn chưa đăng nhập');
      navigate('/auth/login');
    }

    let query;
    if (sectionId.includes('_n')) {
      setType('novel');
      query = novelApi.getSection(sectionId);
    } else if (sectionId.includes('_m')) {
      setType('manga');
      query = mangaApi.getSection(sectionId);
    }

    query
      .then((res) => {
        if (res.data.result) {
          setSection(res.data.result);
        } else {
          setSection({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sectionId, navigate]);

  function onSubmit(data) {
    const token = Cookies.get('token');
    let query;
    if (type === 'novel') {
      query = novelApi.createChapter(token, data);
    } else if (type === 'manga') {
      query = mangaApi.createChapter(token, data);
    }

    query
      .then((res) => {
        if (res.data.result) {
          toast.success('Thêm chương thành công');
          navigate(`/${type}/${type === 'novel' ? section.novelId : section.mangaId}`);
        } else {
          toast.error('Thêm chương thất bại');
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error ? err.response.data.error : 'Thêm chương thất bại');
        console.log(err);
      });
  }

  return (
    <div className="w-full min-h-screen flex flex-row">
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-start-1 col-span-2 w-full h-full overflow-hidden border-r border-t-0 border-l-0 border-b-0  border-gray-400 border-solid pr-2">
          {/* <TreeView /> */}
        </div>

        <div className="col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded my-20">
          {type === 'novel' && <NovelChapter section={section} onSubmit={onSubmit} />}
          {type === 'manga' && <MangaChapter section={section} onSubmit={onSubmit} />}
        </div>
      </div>
    </div>
  );
}
