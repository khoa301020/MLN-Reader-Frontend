import { Pagination, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { homeApi } from '../../../api/api';

export default function NewUpdate() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [type, setType] = useState('all');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(14);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    homeApi.getNewest().then((res) => {
      setBooks(res.data.result);
      setDisplayBooks(res.data.result);
      setFilteredBooks(res.data.result);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (type === 'all') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.type === type));
    }
    setPage(1);
  }, [type, books]);

  useEffect(() => {
    setDisplayBooks(filteredBooks.slice((page - 1) * pageSize, page * pageSize));
  }, [page, filteredBooks, pageSize]);

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <div className="wrapper" class='flex flex-col items-center w-full min-h-screen h-fit bg-gray-100'>
          <div className='container' class='w-full h-fit grid grid-cols-12 gap-8 justify-items-center'>
            <div class='col-start-2 col-end-12 w-full h-fit bg-white p-5 rounded-md my-12'>
              <div class='flex flex-row items-center'>
                <div class='p-2 bg-black text-white font-bold uppercase'>{type === 'all' ? 'Tác phẩm' : type === 'novel' ? 'Tiểu thuyết' : 'Truyện tranh'}</div>
                <div class='ml-3 font-bold uppercase'>Mới cập nhật</div>
              </div>
              <div class='w-full h-1 bg-black mb-5'></div>
              <div class='flex justify-end mb-5'>
                <Select
                  defaultValue="all"
                  style={{
                    width: 120,
                  }}
                  onChange={(value) => setType(value)}
                  options={[
                    {
                      value: 'all',
                      label: 'Tất cả',
                    },
                    {
                      value: 'novel',
                      label: 'Tiểu thuyết',
                    },
                    {
                      value: 'manga',
                      label: 'Truyện tranh',
                    },
                  ]}
                />
              </div>
              <div class='grid grid-cols-7 gap-4 gap-y-14'>
                {displayBooks?.map((book, index) => (
                  <div class='w-36 h-52' key={index}>
                    <a href={`/${book.type}/${book.id}`} class='text-black no-underline'>
                      <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src={book.cover} alt='' />
                    </a>
                    <div class='block absolute bg-black bg-opacity-50 w-36 py-1 rounded-t-md' style={{ marginTop: "-13.25rem" }}>
                      <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                        {`Số chương: ${book.chapterCount}`}
                      </div>
                    </div>
                    {book.lastChapter && (
                      <a href={`/${book.type}-chapter/${book.lastChapter.id}`} class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md hover:bg-opacity-100'>
                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2' title={book.lastChapter.title}>
                          {book.lastChapter.title}
                        </div>
                      </a>
                    )}
                    <a href={`/${book.type}/${book.id}`} class='text-black no-underline'>
                      <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300' title={book.title}>{book.title}</div>
                    </a>
                  </div>
                ))}
              </div>
              <div class='flex justify-center my-10 pt-14'>
                <Pagination
                  defaultCurrent={page}
                  defaultPageSize={pageSize}
                  onChange={(value) => setPage(value)}
                  total={filteredBooks.length}
                  showSizeChanger showQuickJumper
                  pageSizeOptions={[14, 28, 42]}
                  onShowSizeChange={(current, size) => setPageSize(size)}
                />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};