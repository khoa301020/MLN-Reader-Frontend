import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TableListChapter from '../../components/TableListChapter';
import CommentSection from '../../components/CommentSection';
import CommentForm from '../../components/CommentForm';
import { Link } from 'react-router-dom'


function BookInfo() {
    return (
        <div className='wrapper'>
          <Header />
            <div className='container' class='flex flex-col flex-wrap w-full h-fit bg-gray-100'>
                <div class='grid grid-cols-12 h-auto max-w-screen-xl mx-auto'>
                    <div class='col-start-2 col-span-10 h-auto mt-10'>
                        <div class='grid xl:grid-cols-4 lg:grid-cols-4 gap-10 md:grid-cols-1 sm:grid-cols-1'>
                            <div class='col-span-3 max-w-full'>
                                <div class='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md'>    
                                    <div>
                                        <div class='grid grid-cols-4 gap-4 sm:grid-col-1 p-3'>
                                            <div className='left' class='col-span-1'>
                                                <div class='mb-2'>
                                                    <div class='w-full h-9 bg-cyan-600 max-w-xs rounded'>
                                                        <div class='text-white text-bold text-center leading-9 text-base font-semibold'>Tiểu thuyết</div>
                                                    </div>
                                                    <div class='-mt-1 flex justify-center'>
                                                        <div class="overflow-hidden inline-block">
                                                            <div class=" h-4 w-5 bg-cyan-600 -rotate-45 transform origin-top-left"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img class='w-full h-auto object-cover max-w-md' src='https://microgrouplibrary.com/web/img/uploads/book/1380.jpg' alt='' />
                                            </div>
                                            <div className='Info' class='col-span-3 text-base'>
                                                <div class='xl:text-3xl sm:text-base lg:text-2xl md:text-xl font-semibold'>Shimotsuki wa Mob ga Suki</div>
                                                <div class='flex flex-row-wrap h-auto w-full mt-3 mb-3'>
                                                    <a href='##' class='no-underline'>
                                                        <div class='w-fit h-fit bg-slate-100 px-3 py-1 font-normal text-xs mx-1 rounded-full text-black hover:text-cyan-600'>Drama</div>
                                                    </a>
                                                    <a href='##' class='no-underline'>
                                                        <div class='w-fit h-fit bg-slate-100 px-3 py-1 font-normal text-xs mx-1 rounded-full text-black hover:text-cyan-600'>Romance</div>
                                                    </a>
                                                    <a href='##' class='no-underline'>
                                                        <div class='w-fit h-fit bg-slate-100 px-3 py-1 font-normal text-xs mx-1 rounded-full text-black hover:text-cyan-600'>School Life</div>
                                                    </a>
                                                    <a href='##' class='no-underline'>
                                                        <div class='w-fit h-fit bg-slate-100 px-3 py-1 font-normal text-xs mx-1 rounded-full text-black hover:text-cyan-600'>Shounen</div>
                                                    </a>
                                                </div>
                                                <div className='Author' class='mb-2'>
                                                    <span class='font-semibold mr-2'>Tên khác:</span>
                                                    <span>霜月さんはモブが好き; Shimotsuki-san Loves The Mob; Shimotsuki-san thích nhân vật nền</span>
                                                </div>
                                                <div className='Author' class='mb-2'>
                                                    <span class='font-semibold mr-2'>Tác giả:</span>
                                                    <span>Yagami Kagami</span>
                                                </div>
                                                <div className='Author' class='mb-2'>
                                                    <span class='font-semibold mr-2'>Hoạ sĩ:</span>
                                                    <span>Roha</span>
                                                </div>
                                                <div className='Author' class='mb-2'>
                                                    <span class='font-semibold mr-2'>Tình trạng:</span>
                                                    <span>Đang tiến hành</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='w-full h-fit p-3 border-t border-b-0 border-x-0 border-gray-200 border-solid'>
                                        <div class='font-bold text-lg'>Tóm tắt</div>
                                        <div class='mt-3 text-base'>
                                            <div>Nếu đây là một bộ romcom thông thường, có lẽ tôi sẽ chỉ là một nhân vật làm nền không hơn không kém.</div>
                                            <br />
                                            <div>Đứa em kế, cô bạn thân, và cả bạn thuở nhỏ, giờ đây ai nấy đều say đắm cái tên đào hoa kia cả rồi. Không cần làm gì, chỉ thở thôi cũng được yêu mến, thản nhiên khiến những người con gái quan trọng với tôi rơi vào harem, tên nhân vật chính đó giờ đang vui vẻ tận hưởng tuổi thanh xuân của mình.</div>
                                            <br />
                                            <div>Như một nhân vật phụ, đáng lẽ tôi chỉ có thể ngồi ở xó lớp mà quan sát nhân vật chính từ xa... vậy mà, cô ấy đã phát hiện ra tôi.</div>
                                            <br />
                                            Bất kể có là bạn thuở nhỏ của nhân vật chính, với thân phận như là nữ chính, người con gái đó vẫn chọn tôi. Bình thường im lìm chẳng nói gì, biểu cảm cũng không có, thế mà chỉ với tôi thì cô cười nói luôn miệng.
                                            <br /><br />
                                            Cô bảo tôi đặc biệt, hơn cả nhân vật chính kia, dù tôi chỉ là một thằng nhân vật nền...
                                            <br /><br />
                                            Đây là câu chuyện về tôi, một tên nhân vật nền tẻ nhạt.
                                            <br /><br />
                                            Được kể dưới góc nhìn meta, một câu chuyện romcom về nhân vật nền được Shimotsuki-san đem lòng yêu mến.
                                        </div>
                                    </div>
                                </div>
                                <div class='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mt-8 pb-3'>    
                                    <div class='grid grid-cols-6 gap-4 sm:grid-col-1'>
                                        <div class='col-span-6 bg-gray-100 w-full h-fit mb-3 p-3 font-bold text-xl rounded-t-md'>Chính truyện - Phần 1</div>
                                        <div className='left' class='col-span-1 pl-3'>
                                            <img class='w-full h-auto object-cover max-w-md' src='https://microgrouplibrary.com/web/img/uploads/book/1380.jpg' alt='' />
                                        </div>
                                        <div className='Info' class='col-span-5 text-base pr-3'>
                                            <TableListChapter />
                                        </div>
                                    </div>
                                </div>

                                <div className='Comment' class='max-w-full h-fit bg-white border border-solid border-gray-400 rounded-md mt-8 pb-3 mb-10'>    
                                    <div class='grid grid-cols-6 gap-4 sm:grid-col-1'>
                                        <div class='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-xl rounded-t-md'>Bình luận</div>
                                        <div class='col-span-6 w-full h-fit px-3 font-bold text-2xl rounded-t-md'>
                                            <div class='mb-3'>4620 bình luận</div>
                                            <div class='text-sm font-normal mb-2'>
                                                Bạn phải <Link to='/login' class='no-underline text-cyan-700 hover:text-cyan-600'>đăng nhập</Link> hoặc <Link to='/login' class='no-underline text-cyan-700 hover:text-cyan-600'>tạo tài khoản</Link> để bình luận.
                                            </div>
                                            <div>
                                                <CommentForm  />
                                            </div>
                                        </div>
                                            <div class='col-span-6'>
                                                <CommentSection />
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class='h-screen w-full rounded-md'>

                                <div class='border border-solid border-gray-400 rounded-md mb-6'>
                                    <div class='w-full h-10 bg-cyan-600 flex flex-row rounded-t-md'>
                                        <div>
                                            <img class='w-10 h-10 object-cover rounded-tl-md' src='https://i.docln.net/lightnovel/users/ua176-d8b5a8d6-e741-4ce0-825f-2e94ff8591d5.jpg' alt='' />
                                        </div>
                                        <div class='mx-auto my-auto text-sm font-semibold'><a href='##' class='no-underline text-white hover:text-cyan-100 line-clamp-1 px-2'>Nguyễn Trần Anh Khoa</a></div>
                                    </div>
                                    <div class='w-full h-50 bg-white p-2'>
                                        <div class='text-gray-400 text-sm'>Nhóm dịch</div>
                                        <div class='text-2xl font-bold'><a href='##' class='text-black no-underline hover:text-cyan-700'>NEET-kiêm-Hikkomori</a></div>
                                    </div>
                                    <div class='w-full h-1 bg-red-500 rounded-b-md'></div>
                                </div>

                                <div class='border border-solid border-gray-400 rounded-md'>
                                <div class='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-md rounded-t-md'>Ghi chú thêm</div>
                                    <div class='w-full h-fit bg-white p-2 rounded-b-md'>
                                        <div class='text-gray-900 text-sm text-justify'>Về "góc nhìn meta" (メタ視点) được nhắc đến trong phần tóm tắt, đây là một thuật ngữ ám chỉ một góc nhìn nằm ngoài thế giới, nắm bắt sự vật và sự kiện trong thế giới này một cách khách quan. Trong bộ này thì đó là góc nhìn của MC - Koutarou, nhìn thế giới này như một bộ romcom mà Ryuuzaki là nhân vật chính của bộ romcom đấy.</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <Footer />
        </div>  
    );
}

export default BookInfo;