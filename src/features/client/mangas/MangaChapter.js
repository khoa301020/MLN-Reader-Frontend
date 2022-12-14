import { CaretLeftOutlined, CaretRightOutlined, HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CommentForm from '../../../components/CommentForm';
import CommentSection from '../../../components/CommentSection';

function MangaChapter() {
  return (
    <div className='wrapper'>
      <div className='container' class='flex flex-col flex-wrap w-full h-fit bg-gray-100'>
        <div class='grid grid-cols-12 h-auto max-w-screen-xl mx-auto'>
          <div class='col-start-2 col-span-10 h-auto mt-10'>
            <div className='ChapterInfo' class='text-center'>
              <div className='Season' class='font-bold text-3xl mb-3'>
                Chính truyện - Phần Một
              </div>
              <div className='Title' class='font-bold text-2xl mb-3'>
                Mở đầu - Câu chuyện romcom học đường đau thương của cựu nhân vật chính bị giáng cấp xuống thành nhân vật nền
              </div>
              <div className='ReleaseDate' class='font-bold text-md text-gray-600 mb-10'>
                Lần cuối: 11 tháng
              </div>
              <div className='Line' class='w-20 h-px bg-slate-600 mx-auto my-auto'></div>
            </div>
            <div className='ChapterContent'>
              <div class='text-justify font-normal text-xl '>
                <p>
                  Cho đến tận cấp ba, tôi chưa từng nghĩ bản thân mình là một nhân vật nền. Đúng hơn thì, tôi nghĩ tôi gần với nhân vật chính hơn.
                </p>
                <p>
                  Thế nhưng, khoảnh khắc gặp tên đó - Ryuuzaki Ryouma sau khi lên cấp ba, với cái khí chất nhân vật chính harem kia, tôi đã nhận thức được bản thân mình hoá ra chỉ là vai phụ mà thôi.

                </p>
                <p>Và từ đó, tôi đã trở thành một nhân vật nền.</p>

                <p>
                  Một tồn tại chỉ có thể sống một đời học sinh vô vị, lúc nào cũng lơ đãng trong góc lớp, không viết nên được câu chuyện nào cho đời.

                </p>
                <p>
                  Hôm nay cũng thế, lại một ngày nữa tôi nhìn những người con gái từng quan trọng với tôi từ trong góc lớp.

                </p>
                <p>
                  「Nè nè, Ryouma onii-chan. Lần tới cùng đi mua đồ bơi với em nha」

                </p>
                <p>
                  Đang ngồi trên đùi của Ryuuzaki, với thân hình nhỏ nhắn cùng mái tóc đen hai bím, đó là đứa em gái kế của tôi.

                </p>
                <p>
                  Sinh nhật tôi và nhỏ cũng chỉ cách nhau vài tháng, nhưng vì ra trước nên tôi là anh. Lúc bố mẹ chúng tôi tái hôn thì chúng tôi vẫn còn nhỏ, thế nên hai đứa coi nhau không khác gì anh em ruột.

                </p>
                <p>
                  Đứa em gái kế Nakayama Azusa từng quấn quít bên tôi, giờ đang say đắm Ryuuzaki. Nhìn nhỏ cố hết sức để lấy được sự chú ý của tên đó mà tim tôi đau như cắt.

                </p>
                <p>
                  Nghĩ lại thì, trước đây không lâu nhỏ vẫn hay làm nũng với tôi như thế... cơ mà gần đây cả hai còn chẳng nói chuyện được bao nhiêu, có chút cô đơn.

                </p>
                <p>「Này này, Azusa. Mới tháng 5 thôi đó? Đi mua đồ bơi có hơi bị sớm quá không thế?」</p>

                <p>「Hể... Nhưng mà em muốn cho Ryouma onii-chan nhìn em mang đồ bơi cơ mà...」</p>

                <p>「Vậy hả? Mà... anh cũng muốn thấy thật!」</p>

                <p>Ryuuzaki vừa xoa đầu Azusa vừa cười. Azusa cũng cười trông có vẻ như thích lắm.</p>
                <p>Cũng vì hiện tại đang là giờ giải lao, thế nên họ mới có thể ve vãn nhau ngay giữa lớp thế này. Azusa là một đứa hay xấu hổ, nhỏ ghét mấy chuyện khiến bản thân trở nên nổi bật lắm. Thế nhưng từ khi say đắm Ryuuzaki, chả cần biết có phải là giữa thanh thiên bạch nhật hay không, nhỏ vẫn cứ nhõng nhẽo như thế.</p>
                <p>Tôi nhìn mà ruột gan đau nhói.</p>

                <p>「Thế cũng được mà nhỉ? Dù có hơi sớm, nhưng ít ra cậu cũng được xem mà, thế thì không sao hết」</p>
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
                    <CommentForm />
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