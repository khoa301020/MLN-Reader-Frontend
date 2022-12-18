import { CaretLeftOutlined, CaretRightOutlined, HomeFilled } from '@ant-design/icons';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { novelApi } from '../../../api/api';
import CommentSection from '../../../components/CommentSection';
import EditorForm from '../../../components/Editor';
import './image.css';

function NovelChapter() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    novelApi.getChapter(id).then((res) => {
      const chapter = res.data.result.chapter;

      setChapter(chapter);

      const newReadingNovel = {
        novelId: chapter.novelId,
        novelCover: res.data.result.novelCover,
        novelTitle: res.data.result.novelTitle,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
      };

      if (localStorage.getItem('username') !== null) {
        newReadingNovel.username = localStorage.getItem('username');
        novelApi.addHistory(newReadingNovel);
      }

      newReadingNovel.type = 'novel';
      // Check if there is any reading history in localStorage
      if (localStorage.getItem('readingNovel')) {
        // Get the reading history from localStorage
        const readingNovel = JSON.parse(localStorage.getItem('readingNovel'));
        // Check if the novel is already in the reading history
        const index = readingNovel.findIndex((item) => item.novelId === chapter.novelId);
        // If the novel is already in the reading history, remove it
        if (index !== -1) {
          readingNovel.splice(index, 1);
        }
        // Add the novel to the reading history
        readingNovel.unshift(newReadingNovel);
        // Save the reading history to localStorage
        localStorage.setItem('readingNovel', JSON.stringify(readingNovel));
      } else {
        // If there is no reading history in localStorage, create a new one
        const readingNovel = [];
        // Add the novel to the reading history
        readingNovel.unshift(newReadingNovel);
        // Save the reading history to localStorage
        localStorage.setItem('readingNovel', JSON.stringify(readingNovel));
      }

      // Slice the reading history to 10 items
      const readingNovel = JSON.parse(localStorage.getItem('readingNovel'));
      if (readingNovel.length > 10) {
        readingNovel.splice(10, readingNovel.length - 10);
        localStorage.setItem('readingNovel', JSON.stringify(readingNovel));

      }

      window.scrollTo(0, 0);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  if (!chapter) {
    return <div>Loading chapter...</div>;
  }

  return (
    <div className='wrapper'>
      <div className='container flex flex-col flex-wrap w-full h-fit bg-gray-100'>
        <div className='grid grid-cols-12 h-auto max-w-screen-xl mx-auto'>
          <div className='col-start-2 col-span-10 h-auto mt-10 max-w-screen-xl'>
            <div className='ChapterInfo text-center'>
              <div className='Season font-bold text-3xl mb-3'>
                {chapter.title}
              </div>
              <div className='Title font-bold text-2xl mb-3'>
                {chapter.title}
              </div>
              <div className='ReleaseDate font-bold text-md text-gray-600 mb-10'>
                {chapter.lastUpdated}
              </div>
              <div className='Line w-20 h-px bg-slate-600 mx-auto my-auto'></div>
            </div>
            <div className='ChapterContent'>
              <div className='block m-auto h-auto max-w-screen-xl text-justify font-normal text-xl overflow-hidden'>
                {parse(chapter.content)}
              </div>
              <div className='TableOfcontents grid grid-cols-3 rounded-full w-full mt-10 border border-solid border-gray-500'>
                <a href='##'>
                  <div className='col-span-1 bg-gray-50 rounded-l-full p-3 hover:bg-cyan-400 duration-700'>
                    <div className='flex justify-center items-center'>
                      <CaretLeftOutlined style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>

                <a href='##'>
                  <div className='col-span-1 bg-gray-50 p-3 hover:bg-cyan-400 duration-700'>
                    <div className='flex justify-center items-center'>
                      <HomeFilled style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>

                <a href='##'>
                  <div className='col-span-1 bg-gray-50 rounded-r-full p-3 hover:bg-cyan-400 duration-700'>
                    <div className='flex justify-center items-center'>
                      <CaretRightOutlined style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mb-10 pb-10 mt-10'>
              <div className='grid grid-cols-6 gap-4 sm:grid-col-1'>
                <div className='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-xl rounded-t-md'>Bình luận</div>
                <div className='col-span-6 w-full h-fit px-3 font-bold text-2xl rounded-t-md'>
                  <div className='mb-3'>50 bình luận</div>
                  <div className='text-sm font-normal mb-2'>
                    Bạn phải <Link to='/login' className='no-underline text-cyan-700 hover:text-cyan-600'>đăng nhập</Link> hoặc <Link to='/login' className='no-underline text-cyan-700 hover:text-cyan-600'>tạo tài khoản</Link> để bình luận.
                  </div>
                  <div>
                    <EditorForm />
                  </div>
                </div>
                <div className='col-span-6'>
                  <CommentSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelChapter;