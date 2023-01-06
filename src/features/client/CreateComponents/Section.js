import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { mangaApi, novelApi } from '../../../api/api';

export default function NovelVolume() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState('');
  const [type, setType] = useState('');

  const fileInput = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [title, setTitle] = useState('');

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/auth/login');
    }

    let query;
    if (bookId.includes('manga')) {
      setType('manga');
      query = mangaApi.getManga(bookId);
    } else if (bookId.includes('novel')) {
      setType('novel');
      query = novelApi.getNovel(bookId);
    }
    query
      .then((res) => {
        setBook(res.data.result);
      })
      .catch((err) => {
        toast.error('Không thể lấy thông tin truyện');
        navigate('/');
      });
  }, [navigate, bookId]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handleImageChange = () => {
    const file = fileInput.current.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', title);
    formData.append('cover', fileInput.current.files[0]);

    let query;
    if (type === 'manga') {
      formData.append('mangaId', bookId);
      query = mangaApi.createSection(formData);
    } else if (type === 'novel') {
      formData.append('subject', 'section');
      formData.append('novelId', bookId);
      query = novelApi.createSection(formData);
    }

    query
      .then((res) => {
        if (res.data.result) {
          toast.success('Thêm tập thành công');
          navigate(`/${type}/${bookId}`);
        } else {
          toast.error('Thêm tập thất bại');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Đã có lỗi xảy ra');
      });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full grid grid-cols-12 gap-12">
        <div className="col-start-1 col-span-12 bg-white min-h-screen h-auto rounded mb-20 w-full">
          <div className="w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md">Thêm tập mới</div>
          <div className="px-8 py-10 min-h-screen">
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">Truyện</label>
              </div>
              <div className="col-span-7">
                <input
                  type="text"
                  name="bookTitle"
                  className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  value={book.title}
                  disabled
                />
              </div>
            </div>
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">
                  Tiêu đề<span className="text-red-500">*</span>
                </label>
              </div>
              <div className="col-span-7">
                <input
                  type="text"
                  name="sectionTitle"
                  value={title}
                  className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">Ảnh bìa</label>
              </div>
              <div className="col-span-7">
                <input
                  className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  id="file_input"
                  type="file"
                  ref={fileInput}
                  onChange={handleImageChange}
                />
                <div className="flex flex-col items-center justify-center w-full h-64 mt-4 overflow-hidden bg-gray-100 border-2 border-dashed rounded-md">
                  {imageUrl ? (
                    <img src={imageUrl} alt="preview" className=" object-scale-down w-full h-full" />
                  ) : (
                    <p className="text-sm text-gray-600">
                      <svg
                        className="w-12 h-12 ml-1 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10H15C15.5523 10 16 9.55229 16 9C16 8.44772 15.5523 8 15 8H13V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V8H9Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V14C20 15.6569 18.6569 17 17 17H7C5.34315 17 4 15.6569 4 14V4ZM7 3H17C17.5523 3 18 3.44772 18 4V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V4C6 3.44772 6.44772 3 7 3Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="block mt-1">Chọn ảnh</span>{' '}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-9 content-center mb-4">
              <div className="col-start-5 col-span-6">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={handleSubmit}
                  disabled={title === '' || imageUrl === ''}
                >
                  Lưu lại
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
