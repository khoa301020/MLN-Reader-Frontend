import React, { useRef, useState } from 'react';

export default function MangaChapter({ section, onSubmit }) {
  const fileInput = useRef(null);

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('mangaId', section.mangaId);
    formData.append('sectionId', section.id);
    formData.append('title', title);
    formData.append('chapter', fileInput.current.files[0]);

    onSubmit(formData);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-12 gap-12 w-full">
        <div className="col-start-1 col-span-12 bg-white min-h-screen h-auto rounded mb-20 w-full">
          <div className="w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md">
            Thêm mới chương truyện
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

            {/* Upload new zip */}
            <div className="grid grid-cols-9 gap-4 content-center mb-4">
              <div className="text-right place-items-center my-2">
                <label className="text-right text-gray-900">
                  Tải lên trang (zip file)<span className="text-red-500">*</span>
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
                  disabled={!title || !fileInput.current?.files[0]}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={handleSubmit}
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
