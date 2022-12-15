import React, { useEffect, useState } from 'react';
import { homeApi } from '../../../api/api';

import { RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
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
  const [newNovels, setNewNovels] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    homeApi.getTopViewNovelDaily().then((res) => {
      setTopDaily(res.data.result);
    });
    homeApi.getNewestNovel().then((res) => {
      setNewNovels(res.data.result);
    });
    homeApi.getLastUpdateNovel().then((res) => {
      setNovels(res.data.result);
      setMangas(res.data.result);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading section...</div>;

  return (

    <div className='container flex flex-col flex-wrap w-full h-full'>
      <div className='grid grid-cols-12 h-full max-w-screen-xl mx-auto'>
        <div className='col-start-2 col-span-10 h-full'>
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
              <h3 className='uppercase'>Nổi bật</h3>
              <hr />
              <br />
              <SlickCarousel books={topDaily} />
              <br />
              <div className='manga'>
                <h3 className='uppercase'>Truyện tranh</h3>
                <hr />
                <br />
                <ListImageAndTitle books={mangas} prefix='/manga/' />
                <div className='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                  <a href='##' className='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
                  <div><RightOutlined /></div>
                </div>
              </div>
              <div className='ln'>
                <h3 className='uppercase'>Tiểu thuyết</h3>
                <hr />
                <br />
                <ListImageAndTitle books={novels} prefix='/novel/' />
                <div className='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                  <a href='##' className='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
                  <div><RightOutlined /></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className='uppercase'>Bình luận gần đây</h3>
              <hr />
              <CommentList />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 my-10'>
        <div className='grid grid-cols-12 max-w-screen-xl mx-auto'>
          <div className='col-start-2 col-span-10 h-auto'>
            <div className='grid grid-cols-4 gap-10 my-16'>
              <div className='col-span-3 h-auto'>
                <div className='NewBook'>
                  <h3 className='uppercase'>Truyện vừa đăng</h3>
                  <hr />
                  <div className='mx-auto max-w-2xl lg:max-w-7xl'>
                    <div className='grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 mb-6'>
                      {newNovels.map((book, index) => (
                        <div className='grid grid-cols-3 gap-y-1 gap-x-6 xl:grid-cols-3 w-full mt-3' key={index}>
                          <a href={'/novel/' + book.id}><img className='w-full' src={book.cover} alt={book.title} /></a>
                          <div className='col-span-2'>
                            <a href={'/novel/' + book.id} className='no-underline text-black hover:text-cyan-700'>
                              <div className='text-xl font-bold truncate ...'>
                                {book.title}
                              </div>
                            </a>
                            <div className='font-normal line-clamp-4'>
                              {book.description?.split(/\n/).map((line, index) => <p key={index}>{line}</p>)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="bg-gray-150 rounded-full w-full border-solid border hover:bg-black text-black font-semibold hover:text-white py-3 px-4 border-black hover:border-transparent">
                      Xem thêm
                    </button>
                  </div>
                </div>
              </div>
              <div className='Right'>
                <h3 className='uppercase'>Truyện vừa đọc</h3>
                <hr />
                <JustRead />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 max-w-screen-xl mx-auto mt-3 mb-10'>
        <div className='col-start-2 col-span-10 h-full'>
          <h3 className='uppercase'>Đã hoàn thành</h3>
          <hr />
          <br />
          <CompletedList />
          <div className='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
            <a href='##' className='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
            <div><RightOutlined /></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;