import { RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { homeApi } from '../../../api/api';
import ChainsawMan from '../../../assets/img/ChainsawMan.jpg';
import Chikan from '../../../assets/img/Chikan.jpg';
import Hoshizora from '../../../assets/img/Hoshizoraa.jpg';
import Saegusa from '../../../assets/img/Saegusa.jpg';
import Shimotsuki from '../../../assets/img/Shimotsuki.jpg';
import CommentList from '../../../components/CommentList';
import CompletedList from '../../../components/CompletedList';
import JustRead from '../../../components/JustRead';
import ListImageAndTitle from '../../../components/ListImageAndTitle/ListImageAndTitle';
import SlickCarousel from '../../../components/SlickCarousel/SlickCarousel';

function Home() {
  const [novels, setNovels] = useState([]);
  const [topDaily, setTopDaily] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  const [completedBooks, setCompletedBooks] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    homeApi.getTopViewNovelDaily().then((res) => {
      setTopDaily(res.data.result);
    });
    homeApi.getNewestHome().then((res) => {
      setNewBooks(res.data.result);
    });
    homeApi.getLastUpdateNovel().then((res) => {
      setNovels(res.data.result.novels);
    });
    homeApi.getLastUpdateManga().then((res) => {
      setMangas(res.data.result.mangas);
    });
    homeApi.getNewestComment().then((res) => {
      setComments(res.data.result);
    });
    homeApi.getCompleted().then((res) => {
      setCompletedBooks(res.data.result);
    });
    setLoading(false);
  }, []);

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
    <div className='container' class='flex flex-col w-full h-full'>
      <div className='grid grid-cols-12 w-full h-full justify-items-center'>
        <div className='col-start-2 col-span-10 h-full max-w-7xl w-full'>
          <div>
            <Carousel autoplay>
              <div>
                <h3 className='h-56 text-white leading-10'>
                  <img className='w-full h-56 object-cover object-center' src={Shimotsuki} alt='Shimotsuki' />
                </h3>
              </div>
              <div>
                <h3 className='h-56 text-white leading-10'>
                  <img className='w-full h-56 object-cover object-center' src={ChainsawMan} alt='ChainsawMan' />
                </h3>
              </div>
              <div>
                <h3 className='h-56 text-white leading-10'>
                  <img className='w-full h-56 object-cover object-center' src={Hoshizora} alt='Hoshizora' />
                </h3>
              </div>
              <div>
                <h3 className='h-56 text-white leading-10'>
                  <img className='w-full h-56 object-cover object-center' src={Chikan} alt='Chikan' />
                </h3>
              </div>
              <div>
                <h3 className='h-56 text-white leading-10'>
                  <img className='w-full h-56 object-cover object-top' src={Saegusa} alt='Saegusa' />
                </h3>
              </div>
            </Carousel>
          </div>
          <div className='grid grid-cols-4 gap-10'>
            <div className='col-span-3 h-auto'>
              <div class='flex flex-row items-center mt-7'>
                <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Nổi bật</div>
              </div>
              <div class='w-full h-1 bg-zinc-800 mb-5'></div>
              <SlickCarousel books={topDaily} />
              <br />
              <div className='manga'>
                <div class='flex flex-row items-center mt-7'>
                  <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Truyện tranh</div>
                </div>
                <div class='w-full h-1 bg-zinc-800 mb-5'></div>
                <ListImageAndTitle books={mangas} prefix='/manga/' />
                <div className='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                  <Link to='/manga' className='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></Link>
                  <div><RightOutlined /></div>
                </div>
              </div>
              <div className='ln'>
                <div class='flex flex-row items-center mt-7'>
                  <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Tiểu thuyết</div>
                </div>
                <div class='w-full h-1 bg-zinc-800 mb-5'></div>
                <ListImageAndTitle books={novels} prefix='/novel/' />
                <div className='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                  <Link to='/lightnovel' className='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></Link>
                  <div><RightOutlined /></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class='flex flex-row items-center mt-7'>
                  <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Bình luận gần đây</div>
                </div>
                <div class='w-full h-1 bg-zinc-800 mb-5'></div>
                <CommentList comments={comments} />
              </div>
              <div class='mt-12'>
                <div class='flex flex-row items-center mt-7'>
                  <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Truyện vừa đọc</div>
                </div>
                <div class='w-full h-1 bg-zinc-800 mb-5'></div>
                <JustRead />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 my-10 w-full h-fit'>
        <div className='grid grid-cols-12 w-full'>
          <div className='col-start-2 col-span-10 h-auto'>
            <div className='grid grid-cols-4 gap-10 my-16'>
              <div className='col-span-4 h-auto'>
                <div className='NewBook'>
                  <div class='flex flex-row items-center mt-7'>
                    <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Truyện vừa đăng</div>
                  </div>
                  <div class='w-full h-1 bg-zinc-800 mb-5'></div>
                  <div className='mx-auto w-full'>
                    <div className='grid gap-y-1 gap-x-6 grid-cols-3 mb-6'>
                      {newBooks.map((book, index) => (
                        <div className='grid grid-cols-3 gap-y-1 gap-x-4 w-full mt-3' key={index}>
                          <a href={`/${book.type}/` + book.id}><img class='w-full' src={book.cover} alt={book.title} /></a>
                          <div className='col-span-2'>
                            {/* type of book */}
                            <div className="flex flex-col justify-center ml-auto">
                                <div className="px-3 py-0 text-xs text-white bg-cyan-500 rounded-full w-fit">
                                  {book.type === 'novel' ? 'Novel' : 'Manga'}
                                </div>
                              </div>
                            <a href={`/${book.type}/` + book.id} className='no-underline text-black hover:text-cyan-600 duration-300 '>
                              <div className='text-base font-bold truncate ...'>
                                {book.title}
                              </div>
                            </a>
                            <div className='text-xs line-clamp-6'>
                              {book.description?.split(/\n/).map((line, index) => <p key={index}>{line}</p>)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link to='/newupdate'>
                      <button className="bg-gray-150 rounded-full w-full border-solid border hover:bg-black text-black font-semibold hover:text-white py-3 px-4 border-black hover:border-transparent">
                        Xem thêm
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 w-full mx-auto mt-3 mb-10'>
        <div className='col-start-2 col-span-10 h-full'>
          <div class='flex flex-row items-center mt-7'>
            <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Tiểu thuyết đã hoàn thành</div>
          </div>
          <div class='w-full h-1 bg-zinc-800 mb-5'></div>
          <CompletedList books={completedBooks?.novels} />
        </div>
        <div className='col-start-2 col-span-10 h-full'>
          <div class='flex flex-row items-center mt-7'>
            <div class='p-2 bg-zinc-800 text-white font-bold uppercase'>Truyện tranh đã hoàn thành</div>
          </div>
          <div class='w-full h-1 bg-zinc-800 mb-5'></div>
          <CompletedList books={completedBooks?.mangas} />
        </div>
      </div>
    </div >
  );
}

export default Home;