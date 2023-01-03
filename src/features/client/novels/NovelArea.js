import { Checkbox, Pagination, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { novelApi } from '../../../api/api';

export default function BookArea() {
  const [tags, setTags] = useState([]);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    novelApi.getLastUpdateNovel().then((res) => {
      setBooks(res.data.result.novels);
      setFilteredBooks(res.data.result.novels);
      const allTags = res.data.result.tags;
      allTags.unshift({ code: 'all', name: 'Tất cả' });
      setTags(allTags);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setDisplayBooks(filteredBooks.slice((page - 1) * pageSize, page * pageSize));
  }, [page, filteredBooks, pageSize]);

  function handleTagChange(checkedValues) {
    if (checkedValues.includes('all')) {
      setFilteredBooks(books);
    } else if (checkedValues.length === 0) {
      setFilteredBooks([]);
    } else {
      setFilteredBooks(books.filter((book) => {
        // check if book match all tag
        return checkedValues.every((tag) => book.tags.some((bookTag) => bookTag.code === tag));
      }))
    }
    setPage(1);
  }

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <div className="wrapper" class='flex flex-col items-center w-full min-h-screen h-fit bg-gray-100'>
          <div className='container' class='w-full h-fit grid grid-cols-12 gap-8 justify-items-center'>
            <div class='col-start-2 col-end-10 w-full h-fit bg-white p-5 rounded-md my-12'>
              <div class='flex flex-row items-center'>
                <div class='p-2 bg-black text-white font-bold uppercase'>Tiểu thuyết</div>
                <div class='ml-3 font-bold uppercase'>Mới cập nhật</div>
              </div>
              <div class='w-full h-1 bg-black mb-5'></div>
              <div class='grid grid-cols-2 gap-4'>
                {displayBooks?.map((book, index) => (
                  <div class='grid grid-cols-4 gap-5 w-full h-36 rounded-md shadow' key={index}>
                    <div class='col-span-1 max-w-full'>
                      <a href={`/${book.type}/${book.id}`}>
                        <img class='w-24 h-36 object-cover rounded-l-md' src={book.cover} alt='' />
                      </a>
                      <div class='w-24 block absolute -mt-7 bg-black bg-opacity-50 py-1 rounded-bl-md hover:bg-opacity-100 cursor-pointer'>
                        <a href={`/novel-chapter/${book.lastChapter?.id}`} class='overflow-hidden opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                          {book.lastChapter?.title}
                        </a>
                      </div>
                    </div>
                    <div class='col-span-3 py-3 pr-4'>
                      <a href={`/${book.type}/${book.id}`} class='text-md font-bold line-clamp-2 no-underline text-black hover:text-cyan-500 duration-300 mb-2'>
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
                    total={filteredBooks.length}
                    showSizeChanger showQuickJumper
                    pageSizeOptions={[10, 20, 50]}
                    onShowSizeChange={(current, size) => setPageSize(size)}
                  />
                </div>
              </div>
            </div>

            <div class='col-span-2 w-full h-fit bg-white rounded-md my-12 pb-2'>
              <div class='text-md font-semibold mb-3 px-5 pt-5'>Thể loại</div>
              <Checkbox.Group style={{ width: '100%' }} onChange={handleTagChange} defaultValue={['all']}>
                <div class='flex flex-col items-baseline'>
                  {tags.map((tag, index) => (
                    <Checkbox value={tag.code} class='text-sm font-semibold text-black mb-2' key={index}>
                      {tag.name}
                    </Checkbox>
                  ))}
                </div>
              </Checkbox.Group>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
}