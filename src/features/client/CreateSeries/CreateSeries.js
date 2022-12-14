import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { homeApi, mangaApi, novelApi } from '../../../api/api'
import EditorForm from '../../../components/Editor'
import AuthContext from '../../auth/AuthContext'

export default function CreateSeries() {
  AuthContext();
  const navigate = useNavigate()

  const [allTags, setAllTags] = useState([])
  const [showTags, setShowTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([]);

  const [type, setType] = useState("novel")

  const fileInput = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [title, setTitle] = useState("")
  const [otherNames, setOtherNames] = useState([])
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [artist, setArtist] = useState("")
  const [status, setStatus] = useState("Đang tiến hành")

  const [check, setCheck] = useState(false);

  useEffect(() => {
    homeApi.getTags().then(res => {
      setAllTags(res.data.result)
      setShowTags(res.data.result.filter(tag => tag.type === "novel" || tag.type === "both"))
    })
  }, [])

  useEffect(() => {
    console.log(selectedTags);
  }, [selectedTags])

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    if (selectedTags.length === 0 || title === '' || description === '' || type === '' || status === '') {
      setCheck(false);
    }
    if (selectedTags.length !== 0 && title !== '' && description !== '' && type !== '' && status !== '') {
      setCheck(true);
    }
  }, [selectedTags, title, description, type, status])

  const handleImageChange = () => {
    const file = fileInput.current.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const handleTypeChange = (e) => {
    setType(e.target.value)
    setShowTags(allTags.filter(tag => tag.type === e.target.value || tag.type === "both"))
  }

  const handleTagCheck = (e) => {
    const { id, name, checked } = e.target;
    if (checked) {
      setSelectedTags([...selectedTags, { name, code: id }]);
    } else {
      setSelectedTags(selectedTags.filter((value) => value.code !== id));
    }
  };

  const onEditorChange = (content) => {
    setDescription(content);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('cover', fileInput.current.files[0]);
    formData.append('author', author);
    formData.append('artist', artist);
    formData.append('status', status);
    formData.append('otherNames', JSON.stringify(otherNames?.split(';').map(name => name.trim())));
    formData.append('description', description);
    formData.append('uploader', localStorage.getItem('username'));
    formData.append('tags', JSON.stringify(selectedTags));
    if (type === "novel") {
      formData.append('subject', 'novel');
      novelApi.createNovel(formData).then(res => {
        toast.success("Đăng tiểu thuyết mới thành công");
        navigate(`/novel/${res.data.result.id}`);
      })
    } else if (type === "manga") {
      formData.append('subject', 'manga');
      mangaApi.createManga(formData).then(res => {
        toast.success("Đăng truyện tranh mới thành công");
        navigate(`/manga/${res.data.result.id}`);
      })
    }
  }

  return (
    <div className='w-full min-h-screen'>
      <div className='grid grid-cols-12 gap-12'>
        <div className='row-start-3 col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded mb-20'>
          <div className='w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md'>
            Đăng truyện mới
          </div>
          <div className='px-8 py-10 min-h-screen'>
            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Tiêu đề<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <input type="text" name='title' className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required value={title} onChange={e => setTitle(e.target.value)} />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Tên khác</label>
              </div>
              <div className='col-span-6'>
                <input type="text" name='otherNames' className="bg-white placeholder-gray-400 border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder='Ngăn cách nhiều tên bằng dấu chấm phẩy ;' required value={otherNames} onChange={e => setOtherNames(e.target.value)} />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Tác giả<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <input type="text" name='author' className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required
                  value={author} onChange={e => setAuthor(e.target.value)} />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Hoạ sĩ</label>
              </div>
              <div className='col-span-6'>
                <input type="text" name='artist' className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required
                  value={artist} onChange={e => setArtist(e.target.value)} />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Ảnh bìa</label>
              </div>
              <div className='col-span-6'>
                <input className="block w-full text-sm py-2 text-gray-900 border cursor-pointer  focus:outline-none" id="file_input" type="file"
                  ref={fileInput}
                  onChange={handleImageChange} />
                <div className="flex flex-col items-center justify-center w-full h-64 mt-4 overflow-hidden bg-gray-100 border-2 border-dashed rounded-md">
                  {imageUrl ? (<img src={imageUrl} alt="preview" className=" object-scale-down w-full h-full" />) : (<p className="text-sm text-gray-600">
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
                    <span className="block mt-1">Chọn ảnh</span> </p>)}
                </div>

              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Loại truyện<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <select id="TheLoai" className="w-fit bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                  value={type}
                  onChange={handleTypeChange}>
                  <option value="novel">Tiểu thuyết</option>
                  <option value="manga">Truyện tranh</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Thể loại<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6 my-2'>
                <div className='grid grid-cols-4 gap-x-4'>
                  {showTags.map((tag, index) => (<div className="flex items-center mb-4">
                    <input key={index} id={tag.code} type="checkbox" code={tag.code} name={tag.name} checked={selectedTags.find(e => e.code === tag.code)} onChange={handleTagCheck} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="Action" className="ml-1 text-sm font-medium text-gray-900 ">{tag.name}</label>
                  </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Mô tả<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <EditorForm onEditorChange={onEditorChange} type="text" />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Tình trạng dịch<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <select id="TheLoai" className="w-fit bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                  value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="Đang tiến hành">Đang tiến hành</option>
                  <option value="Tạm ngưng">Tạm ngưng</option>
                  <option value="Đã hoàn thành">Đã hoàn thành</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>

              <div className='col-start-3 col-span-6'>
                <button type="button"
                  disabled={!check ? true : false}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={handleSubmit}>Thêm truyện</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}