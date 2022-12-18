import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { novelApi } from '../../../api/api';
import CommentSection from '../../../components/CommentSection';
import CommentForm from '../../../components/Editor';
import TableListChapter from '../../../components/TableListChapter';

function NovelInfo() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(id);
    setLoading(true);
    novelApi.getNovel(id).then((res) => {
      setBook(res.data.result);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading book...</div>;
  }

  return (

    <div className='container flex flex-col flex-wrap w-full h-fit bg-grabooky-100'>
      <div className='grid grid-cols-12 h-auto max-w-screen-xl mx-auto'>
        <div className='col-start-2 col-span-10 h-auto mt-10'>
          <div className='grid xl:grid-cols-4 lg:grid-cols-4 gap-10 md:grid-cols-1 sm:grid-cols-1'>
            <div className='col-span-3 max-w-full'>
              <div className='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md'>
                <div>
                  <div className='grid grid-cols-4 gap-4 sm:grid-col-1 p-3'>
                    <div className='left col-span-1'>
                      <div className='mb-2'>
                        <div className='w-full h-9 bg-cyan-600 max-w-xs rounded'>
                          <div className='text-white text-bold text-center leading-9 text-base font-semibold'>Tiểu thuyết</div>
                        </div>
                        <div className='-mt-1 flex justify-center'>
                          <div className="overflow-hidden inline-block">
                            <div className=" h-4 w-5 bg-cyan-600 -rotate-45 transform origin-top-left"></div>
                          </div>
                        </div>
                      </div>
                      <img className='w-full h-auto object-cover max-w-md' src={book.cover} alt={book.title} />
                    </div>
                    <div className='Info col-span-3 text-base'>
                      <div className='xl:text-3xl sm:text-base lg:text-2xl md:text-xl font-semibold'>{book.title}</div>
                      <div className='flex flex-wrap h-auto w-full mt-3 mb-3'>
                        {book.tags?.map((tag, index) => (
                          <a href='##' id={tag.code} className='no-underline' key={index}>
                            <div className='w-fit h-fit bg-slate-100 px-3 py-1 font-normal text-xs mx-1 rounded-full text-black hover:text-cyan-600 mb-2'>{tag.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className='other-names mb-2'>
                        <span className='font-semibold mr-2'>Tên khác:</span>
                        <span>{book.otherNames?.join('; ')}</span>
                      </div>
                      <div className='author mb-2'>
                        <span className='font-semibold mr-2'>Tác giả:</span>
                        <span>{book.author}</span>
                      </div>
                      <div className='artist mb-2'>
                        <span className='font-semibold mr-2'>Hoạ sĩ:</span>
                        <span>{book.artist}</span>
                      </div>
                      <div className='status mb-2'>
                        <span className='font-semibold mr-2'>Tình trạng:</span>
                        <span>{book.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full h-fit p-3 border-t border-b-0 border-x-0 border-gray-200 border-solid'>
                  <div className='font-bold text-lg'>Tóm tắt</div>
                  <div className='mt-3 text-base'>
                    {book.description?.split(/\n/).map((line, index) => <p key={index}>{line}</p>)}
                  </div>
                </div>
              </div>
              {book.sections?.map((section, index) => (
                <div className='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mt-8 pb-3' key={index}>
                  <div className='grid grid-cols-6 gap-4 sm:grid-col-1'>
                    <div className='col-span-6 bg-gray-100 w-full h-fit mb-3 p-3 font-bold text-xl rounded-t-md'>{section.name}</div>
                    <div className='left col-span-1 pl-3'>
                      <img className='w-full h-auto object-cover max-w-md' src={section.cover} alt={section.title} />
                    </div>
                    <div className='Info col-span-5 text-base pr-3'>
                      <TableListChapter chapters={section.chapters} prefix='/novel-chapter/' />
                    </div>
                  </div>
                </div>
              ))}

              <div className='Comment max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mt-8 pb-3 mb-10'>
                <div className='grid grid-cols-6 gap-4 sm:grid-col-1'>
                  <div className='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-xl rounded-t-md'>Bình luận</div>
                  <div className='col-span-6 w-full h-fit px-3 font-bold text-2xl rounded-t-md'>
                    <div className='mb-3'>4620 bình luận</div>
                    <div className='text-sm font-normal mb-2'>
                      Bạn phải <Link to='/login' className='no-underline text-cyan-700 hover:text-cyan-600'>đăng nhập</Link> hoặc <Link to='/login' className='no-underline text-cyan-700 hover:text-cyan-600'>tạo tài khoản</Link> để bình luận.
                    </div>
                    <div>
                      <CommentForm />
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <CommentSection />
                  </div>
                </div>
              </div>
            </div>
            <div className='h-screen w-full rounded-md'>

              <div className='border border-solid border-gray-400 rounded-md mb-6'>
                <div className='w-full h-10 bg-cyan-600 flex flex-row rounded-t-md'>
                  <div>
                    <img className='w-10 h-10 object-cover rounded-tl-md' src='https://i.docln.net/lightnovel/users/ua176-d8b5a8d6-e741-4ce0-825f-2e94ff8591d5.jpg' alt='' />
                  </div>
                  <div className='mx-auto my-auto text-sm font-semibold'><a href='##' className='no-underline text-white hover:text-cyan-100 line-clamp-1 px-2'>Nguyễn Trần Anh Khoa</a></div>
                </div>
                <div className='w-full h-50 bg-white p-2'>
                  <div className='text-gray-400 text-sm'>Nhóm dịch</div>
                  <div className='text-2xl font-bold'><a href='##' className='text-black no-underline hover:text-cyan-700'>NEET-kiêm-Hikkomori</a></div>
                </div>
                <div className='w-full h-1 bg-red-500 rounded-b-md'></div>
              </div>

              <div className='border border-solid border-gray-400 rounded-md'>
                <div className='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-md rounded-t-md'>Ghi chú thêm</div>
                <div className='w-full h-fit bg-white p-2 rounded-b-md'>
                  <div className='text-gray-900 text-sm text-justify'>Về "góc nhìn meta" (メタ視点) được nhắc đến trong phần tóm tắt, đây là một thuật ngữ ám chỉ một góc nhìn nằm ngoài thế giới, nắm bắt sự vật và sự kiện trong thế giới này một cách khách quan. Trong bộ này thì đó là góc nhìn của MC - Koutarou, nhìn thế giới này như một bộ romcom mà Ryuuzaki là nhân vật chính của bộ romcom đấy.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelInfo;