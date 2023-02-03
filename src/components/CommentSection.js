import { ConfigProvider, Pagination, theme } from 'antd';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { datetimeConverter, timeDiff } from '../helpers/helper';

function CommentSection({ comments }) {
  const [displayComments, setDisplayComments] = useState([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //     setDisplayComments(comments?.slice(0, 1));
  // }, [comments]);

  useEffect(() => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    setDisplayComments(comments?.slice(startIndex, endIndex));
  }, [page, comments]);

  const handleNext = () => {
    setPage(page + 1 > Math.ceil(comments.length / 10) ? page : page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1 < 1 ? page : page - 1);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="grid grid-cols-10 gap-1">
              {displayComments?.map((comment, index) => (
                <div key={index} className="grid col-span-12">
                  <a href={`/user/${comment.user?.id}`} className="mx-auto w-fit">
                    <img
                      className="min-w-6 min-h-6 w-14 h-14 object-cover rounded-full"
                      src={comment.user?.avatar}
                      alt="Rounded avatar"
                    />
                  </a>
                  <div className="col-start-2 col-span-11 bg-zinc-700 mr-3 px-3 py-2 text-base w-auto rounded-md text-zinc-100">
                    <div>
                      <a href={`/user/${comment.user?.id}`}>
                        <div className="nameUser font-bold mb-1">{comment.user?.name}</div>
                      </a>
                      <div className="commentUser">{parse(comment.content)}</div>
                      <div
                        className="commentDate text-sm mt-3 text-gray-500"
                        title={datetimeConverter(comment.createdAt)}
                      >
                        {timeDiff(comment.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-5">
              {/* <div className='flex space-x-3'>
                <button className='px-3 py-1 bg-zinc-700 border border-solid border-zinc-600 rounded-md text-xs font-medium text-zinc-400 hover:border-cyan-500 hover:text-zinc-100 hover:bg-cyan-900' onClick={handlePrevious} >
                  Previous
                </button>
                <p className='px-3 py-1 bg-zinc-700 border border-solid border-zinc-600 rounded-md text-xs font-medium text-zinc-400 hover:border-cyan-500 hover:text-zinc-100 hover:bg-cyan-900'>
                  {page}
                </p>
                <button className='px-3 py-1 bg-zinc-700 border border-solid border-zinc-600 rounded-md text-xs font-medium text-zinc-400 hover:border-cyan-500 hover:text-zinc-100 hover:bg-cyan-900' onClick={handleNext}>
                  Next
                </button>
              </div> */}

              <ConfigProvider
                theme={{
                  algorithm: theme.darkAlgorithm,
                }}
              >
                <Pagination
                // defaultCurrent={page}
                // defaultPageSize={pageSize}
                // onChange={(value) => setPage(value)}
                // total={filteredBooks.length}
                // showSizeChanger showQuickJumper
                // pageSizeOptions={[10, 20, 50]}
                // onShowSizeChange={(current, size) => setPageSize(size)}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
