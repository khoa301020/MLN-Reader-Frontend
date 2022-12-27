import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { mangaApi } from '../../../api/api';

export default function BookArea() {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    mangaApi.getLastUpdateManga().then((res) => {
      setBooks(res.data.result);
    });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    setDisplayBooks(books.slice((page - 1) * pageSize, page * pageSize));
  }, [page, books, pageSize]);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
          Loading
        </div>
      </div>
    )
  }

  return (
    <div className="wrapper" class='flex flex-col items-center w-full min-h-screen h-fit bg-gray-100'>
      <div className='container' class='w-full h-fit grid grid-cols-12 gap-8 justify-items-center'>
        <div class='col-start-2 col-end-10 w-full h-fit bg-white p-5 rounded-md my-12'>
          <div class='flex flex-row items-center'>
            <div class='p-2 bg-black text-white font-bold uppercase'>Truyện tranh</div>
            <div class='ml-3 font-bold uppercase'>Mới cập nhật</div>
          </div>
          <div class='w-full h-1 bg-black mb-5'></div>
          <div class='grid grid-cols-2 gap-4'>
            {displayBooks?.map((book) => (
              <div class='grid grid-cols-4 gap-4 w-full h-32 rounded-md shadow'>
                <img class='w-full h-32 object-cover rounded-l-md' src={book.cover} alt='' />
                <div class='col-span-3 py-3 pr-4'>
                  <a href={`/${book.type}/${book.id}`} class='text-md font-bold line-clamp-2 no-underline text-black hover:text-cyan-500 duration-300 mb-3'>
                    {book.title}
                  </a>
                  <p class='text-xs line-clamp-3 text-black text-justify'>
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div class='flex justify-center my-10'>
            <div class='flex justify-center my-10 pt-14'>
              <Pagination
                defaultCurrent={page}
                defaultPageSize={pageSize}
                onChange={(value) => setPage(value)}
                total={books.length}
                showSizeChanger showQuickJumper
                pageSizeOptions={[10, 20, 50]}
                onShowSizeChange={(current, size) => setPageSize(size)}
              />
            </div>
          </div>
        </div>
        <div class='col-span-2 w-full h-fit bg-white rounded-md my-12 pb-2'>
          <div class='text-md font-semibold mb-3 px-5 pt-5'>Thể loại</div>
          <a href='##' class='no-underline text-black hover:text-cyan-500 duration-300'><div class='text-sm px-5 py-1 hover:bg-gray-50'>Tất cả</div></a>
          <a href='##' class='no-underline text-black hover:text-cyan-500 duration-300'><div class='text-sm px-5 py-1 hover:bg-gray-50'>Action</div></a>
          <a href='##' class='no-underline text-black hover:text-cyan-500 duration-300'><div class='text-sm px-5 py-1 hover:bg-gray-50'>Tragedy</div></a>
          <a href='##' class='no-underline text-black hover:text-cyan-500 duration-300'><div class='text-sm px-5 py-1 hover:bg-gray-50'>Horror</div></a>
          <a href='##' class='no-underline text-black hover:text-cyan-500 duration-300'><div class='text-sm px-5 py-1 hover:bg-gray-50'>Romance</div></a>
        </div>
      </div>
    </div>
  );
}