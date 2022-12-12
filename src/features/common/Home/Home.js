import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ListImageAndTitle from '../../../components/ListImageAndTitle/ListImageAndTitle';
import CompletedList from '../../../components/CompletedList';
import CommentList from '../../../components/CommentList';
import JustRead from '../../../components/JustRead';
import { Carousel } from 'antd';
import {RightOutlined} from '@ant-design/icons'
import SlickCarousel from '../../../components/SlickCarousel/SlickCarousel';
import ChainsawMan from '../../../assets/img/ChainsawMan.jpg'
import Hoshizora from '../../../assets/img/Hoshizoraa.jpg'
import Shimotsuki from '../../../assets/img/Shimotsuki.jpg'
import Saegusa from '../../../assets/img/Saegusa.jpg'
import Chikan from '../../../assets/img/Chikan.jpg'



function Home() {
    return (
        <div className='wrapper'>
          <Header />
            <div className='container' class='flex flex-col flex-wrap w-full h-full'>
                <div class='grid grid-cols-12 h-full max-w-screen-xl mx-auto'>
                    <div class='col-start-2 col-span-10 h-full'>
                        <div>
                          <Carousel autoplay>
                            <div>
                            <h3 class='h-56 text-white leading-10'>
                                <img class='w-full h-56 object-cover object-center' src={Shimotsuki} alt='Shimotsuki' />
                            </h3>
                            </div>
                            <div>
                            <h3 class='h-56 text-white leading-10'>
                                <img class='w-full h-56 object-cover object-center' src={ChainsawMan} alt='ChainsawMan' />
                            </h3>
                            </div>
                            <div>
                            <h3 class='h-56 text-white leading-10'>
                                <img class='w-full h-56 object-cover object-center' src={Hoshizora} alt='Hoshizora' />
                            </h3>
                            </div>
                            <div>
                            <h3 class='h-56 text-white leading-10'>
                                <img class='w-full h-56 object-cover object-center' src={Chikan} alt='Chikan' />
                            </h3>
                            </div>
                            <div>
                            <h3 class='h-56 text-white leading-10'>
                                <img class='w-full h-56 object-cover object-top' src={Saegusa} alt='Saegusa' />
                            </h3>
                            </div>
                          </Carousel>
                        </div>
                        <div class='grid grid-cols-4 gap-10'>
                            <div class='col-span-3 h-auto'>
                                <h3 class='uppercase'>Nổi bật</h3>
                                <hr />
                                <br />
                                <SlickCarousel />
                                <br />
                                <div className='manga'>
                                    <h3 class='uppercase'>Truyện tranh</h3>
                                    <hr />
                                    <br />
                                    <ListImageAndTitle />
                                    <div class='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                                    <a href='##' class='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
                                    <div><RightOutlined /></div>
                                </div>
                                </div>
                                <div className='ln'>
                                    <h3 class='uppercase'>Tiểu thuyết</h3>
                                    <hr />
                                    <br />
                                    <ListImageAndTitle />
                                    <div class='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                                        <a href='##' class='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
                                        <div><RightOutlined /></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class='uppercase'>Bình luận gần đây</h3>
                                <hr />
                                <CommentList />
                            </div>
                        </div>
                    </div>
                </div>
                <div class='bg-gray-200 my-10'>
                    <div class='grid grid-cols-12 max-w-screen-xl mx-auto'>
                        <div class='col-start-2 col-span-10 h-auto'>
                            <div class='grid grid-cols-4 gap-10 my-16'>
                                <div class='col-span-3 h-auto'>
                                    <div className='NewBook'>
                                        <h3 class='uppercase'>Truyện vừa đăng</h3>
                                        <hr />
                                        <div className='mx-auto max-w-2xl lg:max-w-7xl'>
                                            <div class='grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 mb-6'>
                                                <div class='grid grid-cols-3 gap-y-1 gap-x-6 xl:grid-cols-3 w-full mt-3'>
                                                    <a href='##'><img class='w-full' src='https://m.media-amazon.com/images/I/718pabxZ3-L.jpg' alt='Tsumetai' /></a>
                                                    <div class='col-span-2'>
                                                        <a href='##' class='no-underline text-black hover:text-cyan-700'>
                                                            <div class='text-xl font-bold truncate ...'>
                                                                Tsumetai Kokou no Tenkousei wa Houkago, Aikagi Mawashite Ama Dereru
                                                            </div>
                                                        </a>
                                                        <div class='font-normal line-clamp-4'>
                                                            Cuối cùng thì chúng ta mới có được một không gian riêng nhỉ?

                                                            Một câu chuyện tình ngọt ngào và vụng về giữa đôi trai gái kém khoản giao tiếp cùng chung sống dưới một mái nhà.

                                                            Fatima Kurei, người con gái sở hữu dung mạo yêu kiều nhưng lại lãnh đạm khó gần.

                                                            Karasu Kuya, người đáng nhẽ ra vẫn sẽ giữ cho mình điệu bộ thờ ơ dửng dưng như mọi khi ― đó là nếu như cô ấy không phải là『 Người nhà.』
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class='grid grid-cols-3 gap-y-1 gap-x-6 xl:grid-cols-3 w-full mt-3'>
                                                    <a href='##'><img class='w-full' src='https://m.media-amazon.com/images/I/718pabxZ3-L.jpg' alt='Tsumetai' /></a>
                                                    <div class='col-span-2'>
                                                        <a href='##' class='no-underline text-black hover:text-cyan-700'>
                                                            <div class='text-xl font-bold truncate ...'>
                                                                Tsumetai Kokou no Tenkousei wa Houkago, Aikagi Mawashite Ama Dereru
                                                            </div>
                                                        </a>
                                                        <div class='font-normal line-clamp-4'>
                                                            Cuối cùng thì chúng ta mới có được một không gian riêng nhỉ?

                                                            Một câu chuyện tình ngọt ngào và vụng về giữa đôi trai gái kém khoản giao tiếp cùng chung sống dưới một mái nhà.

                                                            Fatima Kurei, người con gái sở hữu dung mạo yêu kiều nhưng lại lãnh đạm khó gần.

                                                            Karasu Kuya, người đáng nhẽ ra vẫn sẽ giữ cho mình điệu bộ thờ ơ dửng dưng như mọi khi ― đó là nếu như cô ấy không phải là『 Người nhà.』
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class='grid grid-cols-3 gap-y-1 gap-x-6 xl:grid-cols-3 w-full mt-3'>
                                                    <a href='##'><img class='w-full' src='https://m.media-amazon.com/images/I/718pabxZ3-L.jpg' alt='Tsumetai' /></a>
                                                    <div class='col-span-2'>
                                                        <a href='##' class='no-underline text-black hover:text-cyan-700'>
                                                            <div class='text-xl font-bold truncate ...'>
                                                                Tsumetai Kokou no Tenkousei wa Houkago, Aikagi Mawashite Ama Dereru
                                                            </div>
                                                        </a>
                                                        <div class='font-normal line-clamp-4'>
                                                            Cuối cùng thì chúng ta mới có được một không gian riêng nhỉ?

                                                            Một câu chuyện tình ngọt ngào và vụng về giữa đôi trai gái kém khoản giao tiếp cùng chung sống dưới một mái nhà.

                                                            Fatima Kurei, người con gái sở hữu dung mạo yêu kiều nhưng lại lãnh đạm khó gần.

                                                            Karasu Kuya, người đáng nhẽ ra vẫn sẽ giữ cho mình điệu bộ thờ ơ dửng dưng như mọi khi ― đó là nếu như cô ấy không phải là『 Người nhà.』
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class='grid grid-cols-3 gap-y-1 gap-x-6 xl:grid-cols-3 w-full mt-3'>
                                                    <a href='##'><img class='w-full' src='https://m.media-amazon.com/images/I/718pabxZ3-L.jpg' alt='Tsumetai' /></a>
                                                    <div class='col-span-2'>
                                                        <a href='##' class='no-underline text-black hover:text-cyan-700'>
                                                            <div class='text-xl font-bold truncate ...'>
                                                                Tsumetai Kokou no Tenkousei wa Houkago, Aikagi Mawashite Ama Dereru
                                                            </div>
                                                        </a>
                                                        <div class='font-normal line-clamp-4'>
                                                            Cuối cùng thì chúng ta mới có được một không gian riêng nhỉ?

                                                            Một câu chuyện tình ngọt ngào và vụng về giữa đôi trai gái kém khoản giao tiếp cùng chung sống dưới một mái nhà.

                                                            Fatima Kurei, người con gái sở hữu dung mạo yêu kiều nhưng lại lãnh đạm khó gần.

                                                            Karasu Kuya, người đáng nhẽ ra vẫn sẽ giữ cho mình điệu bộ thờ ơ dửng dưng như mọi khi ― đó là nếu như cô ấy không phải là『 Người nhà.』
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="bg-gray-150 rounded-full w-full border-solid border hover:bg-black text-black font-semibold hover:text-white py-3 px-4 border-black hover:border-transparent">
                                                Xem thêm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='Right'>
                                    <h3 class='uppercase'>Truyện vừa đọc</h3>
                                    <hr />
                                    <JustRead />
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div class='grid grid-cols-12 max-w-screen-xl mx-auto mt-3 mb-10'>
                    <div class='col-start-2 col-span-10 h-full'>
                        <h3 class='uppercase'>Đã hoàn thành</h3>
                        <hr />
                        <br />
                        <CompletedList />
                        <div class='flex flex-row-nowrap items-center justify-end hover:opacity-75'>
                            <a href='##' class='text-black no-underline uppercase font-medium mr-2 hover:mr-1 duration-300'><p>Xem thêm</p></a>
                            <div><RightOutlined /></div>
                        </div>
                    </div>
                </div>
            </div>
          <Footer />
        </div>  
    );
}

export default Home;