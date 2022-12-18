import { CaretLeftOutlined, CaretRightOutlined, HomeFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mangaApi } from '../../../api/api';
import CommentSection from '../../../components/CommentSection';
import EditorForm from '../../../components/Editor';
import './image.css';

function MangaChapter() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    mangaApi.getChapter(id).then((res) => {
      const chapter = res.data.result.chapter;

      setChapter(chapter);

      const newReadingManga = {
        mangaId: chapter.mangaId,
        mangaCover: res.data.result.mangaCover,
        mangaTitle: res.data.result.mangaTitle,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
      };

      if (localStorage.getItem('username') !== null) {
        newReadingManga.username = localStorage.getItem('username');
        mangaApi.addHistory(newReadingManga);
      }

      newReadingManga.type = 'manga';
      // Check if there is any reading history in localStorage
      if (localStorage.getItem('readingManga')) {
        // Get the reading history from localStorage
        const readingManga = JSON.parse(localStorage.getItem('readingManga'));
        // Check if the manga is already in the reading history
        const index = readingManga.findIndex((item) => item.mangaId === chapter.mangaId);
        // If the manga is already in the reading history, remove it
        if (index !== -1) {
          readingManga.splice(index, 1);
        }
        // Add the manga to the reading history
        readingManga.unshift(newReadingManga);
        // Save the reading history to localStorage
        localStorage.setItem('readingManga', JSON.stringify(readingManga));
      } else {
        // If there is no reading history in localStorage, create a new one
        const readingManga = [];
        // Add the manga to the reading history
        readingManga.unshift(newReadingManga);
        // Save the reading history to localStorage
        localStorage.setItem('readingManga', JSON.stringify(readingManga));
      }

      // Slice the reading history to 10 items
      const readingManga = JSON.parse(localStorage.getItem('readingManga'));
      if (readingManga.length > 10) {
        readingManga.splice(10, readingManga.length - 10);
        localStorage.setItem('readingManga', JSON.stringify(readingManga));

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
                {chapter.pages?.map((page, index) => {
                  return (
                    <div className='w-full h-auto' key={index}>
                      <img src={page.pageUrl} alt='page' className='w-full h-auto' />
                    </div>
                  );
                })}
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

export default MangaChapter;