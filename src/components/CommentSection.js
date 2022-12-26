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
    setPage((page + 1) > Math.ceil(comments.length / 10) ? page : page + 1);
  };

  const handlePrevious = () => {
    setPage((page - 1) < 1 ? page : page - 1);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className='grid grid-cols-10 gap-4'>
              {displayComments?.map((comment, index) => (
                <div key={index} className='grid col-span-10'>
                  <div className='mx-auto w-fit'>
                    <img className="min-w-6 min-h-6 w-14 h-14 object-cover rounded-full" src={comment.user?.avatar} alt="Rounded avatar" />
                  </div>
                  <div className='col-start-2 col-span-9 bg-gray-100 mr-3 px-3 py-2 text-base w-auto'>
                    <div>
                      <div className='nameUser font-bold mb-1'>{comment.user?.name}</div>
                      <div className='commentUser'>
                        {parse(comment.content)}
                      </div>
                      <div className='commentDate text-sm mt-3 text-gray-500' title={datetimeConverter(comment.createdAt)}>{timeDiff(comment.createdAt)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className='flex justify-center mt-5'>
              <div className='flex space-x-3'>
                <button className='px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50' onClick={handlePrevious} >
                  Previous
                </button>
                <p className='px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50'>
                  {page}
                </p>
                <button className='px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50' onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;