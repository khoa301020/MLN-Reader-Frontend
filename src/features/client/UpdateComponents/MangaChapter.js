import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { mangaApi } from '../../../api/api';

export default function MangaChapter({ id }) {
  const navigate = useNavigate();
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Bạn có muốn xoá truyện này không',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn vào nút "Ok" để xoá',
      onOk() {
        const token = Cookies.get('token');

        mangaApi.deleteChapter(token, id).then((res) => {
          if (res.data.result) {
            toast.success('Xoá thành công');
            navigate(0);
          } else {
            toast.error('Xoá thất bại');
          }
        });
      },
      onCancel() {
        console.log('Không');
      },
    });
  };

  const fileInput = useRef(null);

  const [manga, setManga] = useState({});
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState([]);

  useEffect(() => {
    console.log(id);
    mangaApi
      .getChapterOnly(id)
      .then((res) => {
        if (res.data.result) {
          setManga(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if (manga.pages) {
      setPages(manga.pages);
    }
    if (manga.title) {
      setTitle(manga.title);
    }
  }, [manga]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('chapter', fileInput.current.files[0]);

    mangaApi
      .updateChapter(formData)
      .then((res) => {
        if (res.data.result) {
          setManga(res.data.result);
          toast.success('Cập nhật thành công');
        } else {
          toast.error('Cập nhật thất bại');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-12 gap-12 w-full">
        <div className="col-start-1 col-span-12 bg-white min-h-screen h-auto rounded mb-20 w-full">
          <div className="w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md">
            Chỉnh sửa chương truyện
          </div>
          <div className="px-5 py-10 min-h-screen">
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">
                  Tiêu đề<span className="text-red-500">*</span>
                </label>
              </div>
              <div className="col-span-7">
                <input
                  type="text"
                  name="title"
                  className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Show all pages within certain size */}
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">Trang</label>
              </div>
              <div className="col-span-7">
                <div className="grid grid-cols-4 gap-4">
                  {pages.map((page, index) => (
                    <div key={index} className="col-span-1">
                      <img src={page.pageUrl} alt="" className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upload new zip */}
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">
                  Tải trang mới<span className="text-red-500">*</span>
                </label>
              </div>
              <div className="col-span-7">
                <input
                  type="file"
                  ref={fileInput}
                  name="pages"
                  className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                  accept=".zip"
                />
              </div>
            </div>

            <div className="grid grid-cols-9 gap-9 content-center mb-4 mt-8">
              <div className="col-start-4 col-span-6">
                <button
                  type="button"
                  disabled={!title ? true : false}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={handleSubmit}
                >
                  Lưu thay đổi
                </button>
                <button
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={showConfirm}
                >
                  Xoá chương
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
