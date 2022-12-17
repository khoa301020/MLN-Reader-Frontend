import { CaretLeftOutlined, CaretRightOutlined, HomeFilled } from '@ant-design/icons';
import parse from 'html-react-parser';
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
      setChapter(res.data.result);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  if (!chapter) {
    return <div>Loading chapter...</div>;
  }

  return (
    <div className='wrapper'>
      <div className='container' class='flex flex-col flex-wrap w-full h-fit bg-gray-100'>
        <div class='grid grid-cols-12 h-auto max-w-screen-xl mx-auto'>
          <div class='col-start-2 col-span-10 h-auto mt-10 max-w-screen-xl'>
            <div className='ChapterInfo' class='text-center'>
              <div className='Season' class='font-bold text-3xl mb-3'>
                {chapter.title}
              </div>
              <div className='Title' class='font-bold text-2xl mb-3'>
                {chapter.title}
              </div>
              <div className='ReleaseDate' class='font-bold text-md text-gray-600 mb-10'>
                {chapter.lastUpdated}
              </div>
              <div className='Line' class='w-20 h-px bg-slate-600 mx-auto my-auto'></div>
            </div>
            <div className='ChapterContent'>
              <div class='block m-auto h-auto max-w-screen-xl text-justify font-normal text-xl overflow-hidden'>
                {parse(chapter.content)}
              </div>
              <div className='TableOfcontents' class='grid grid-cols-3 rounded-full w-full mt-10 border border-solid border-gray-500'>
                <a href='##'>
                  <div class='col-span-1 bg-gray-50 rounded-l-full p-3 hover:bg-cyan-400 duration-700'>
                    <div class='flex justify-center items-center'>
                      <CaretLeftOutlined style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>

                <a href='##'>
                  <div class='col-span-1 bg-gray-50 p-3 hover:bg-cyan-400 duration-700'>
                    <div class='flex justify-center items-center'>
                      <HomeFilled style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>

                <a href='##'>
                  <div class='col-span-1 bg-gray-50 rounded-r-full p-3 hover:bg-cyan-400 duration-700'>
                    <div class='flex justify-center items-center'>
                      <CaretRightOutlined style={{ color: '#000', fontSize: '200%' }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mb-10 pb-10 mt-10'>
              <div class='grid grid-cols-6 gap-4 sm:grid-col-1'>
                <div class='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-xl rounded-t-md'>Bình luận</div>
                <div class='col-span-6 w-full h-fit px-3 font-bold text-2xl rounded-t-md'>
                  <div class='mb-3'>50 bình luận</div>
                  <div class='text-sm font-normal mb-2'>
                    Bạn phải <Link to='/login' class='no-underline text-cyan-700 hover:text-cyan-600'>đăng nhập</Link> hoặc <Link to='/login' class='no-underline text-cyan-700 hover:text-cyan-600'>tạo tài khoản</Link> để bình luận.
                  </div>
                  <div>
                    <EditorForm />
                  </div>
                </div>
                <div class='col-span-6'>
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