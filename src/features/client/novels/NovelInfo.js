import { EditOutlined, FileOutlined, HeartFilled, HeartOutlined, ProfileOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { novelApi, userApi } from '../../../api/api';
import CommentSection from '../../../components/CommentSection';
import Editor from '../../../components/Editor';
import TableListChapter from '../../../components/TableListChapter';

function NovelInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [book, setBook] = useState([]);
  const [followCount, setFollowCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const [sectionToCreate, setSectionToCreate] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (sectionToCreate === '') {
      toast.error('Vui lòng chọn tập để tạo');
      return;
    }
    setIsModalOpen(false);
    navigate(`/action/create-chapter/${sectionToCreate}`);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    novelApi
      .getNovel(id)
      .then((res) => {
        setBook(res.data.result);
        setFollowCount(res.data.result.followersCount);
      })
      .catch((err) => {
        setIsNotFound(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = Cookies.get('token');
    if (username === null || token === null) {
      setAuth(false);
    } else {
      userApi
        .bookVerify(id, username, token)
        .then((res) => {
          if (res.data.message === 'Succeed') setAuth(true);
          else setAuth(false);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setAuth(false);
            Cookies.remove('token');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            console.log(err);
            toast.error('Phiên đăng nhập đã hết hạn');
            window.location.href = '/auth/login';
          }
        });
    }
  }, [id]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = Cookies.get('token');
    if (username === null || token === null) {
      setIsLogged(false);
    } else {
      userApi
        .verify(username, token)
        .then((res) => {
          if (res.data.code === 200) setIsLogged(true);
          else setIsLogged(false);
        })
        .catch((err) => {
          Cookies.remove('token');
          localStorage.removeItem('username');
          localStorage.removeItem('role');
          console.log(err);
          toast.error('Phiên đăng nhập đã hết hạn');
          navigate('/auth/login');
        });

      userApi.checkFollow(token, id).then((res) => {
        if (res.data.message === 'Following') setIsFollowing(true);
        else setIsFollowing(false);
      });
    }
  }, [navigate, id]);

  const onEditorChange = (content) => {
    setComment(content.content);
  };

  function handleComment() {
    const token = Cookies.get('token');
    const data = {
      path: location.pathname,
      targetId: id,
      username: localStorage.getItem('username'),
      content: comment,
      type: 'novel',
      action: 'comment',
    };
    userApi
      .comment(data, token)
      .then((res) => {
        toast.success('Bình luận thành công');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Bình luận thất bại');
      });
  }

  function handleFollow() {
    if (!isLogged) {
      toast.error('Bạn phải đăng nhập để theo dõi');
      return;
    }

    const token = Cookies.get('token');
    const bookId = id;

    userApi.followAction(token, bookId).then((res) => {
      if (res.data.message === 'Followed') {
        toast.success('Đã theo dõi');
        setIsFollowing(true);
        setFollowCount(res.data.result.bookFollowers);
      } else if (res.data.message === 'Unfollowed') {
        toast.success('Đã bỏ theo dõi');
        setIsFollowing(false);
        setFollowCount(res.data.result.bookFollowers);
      }
    });
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
          Loading
        </div>
      </div>
    );
  }

  if (isNotFound) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
          Novel not found
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-wrap w-full h-fit bg-zinc-900">
      <div className="grid grid-cols-12 h-auto w-full mx-auto">
        <div className="col-start-2 col-span-10 h-auto mt-10">
          {/* {auth && (
            <div className='flex justify-end mb-4'>
              <Link to={`/action/update-series/${id}`}>
                <Button>Chỉnh sửa</Button>
              </Link>
            </div>
          )} */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 gap-10 md:grid-cols-1 sm:grid-cols-1">
            <div className="col-span-3 w-full">
              <div className="max-w-full h-fit bg-zinc-800 border border-solid border-zinc-700 rounded-md">
                <div>
                  <div className="grid grid-cols-4 gap-4 sm:grid-col-1 p-3">
                    <div className="left col-span-1">
                      <div className="mb-2">
                        <div className="w-full h-9 bg-sky-900 max-w-xs rounded">
                          <div className="text-white text-bold text-center leading-9 text-base font-semibold">
                            Tiểu thuyết
                          </div>
                        </div>
                        <div className="-mt-1 flex justify-center">
                          <div className="overflow-hidden inline-block">
                            <div className=" h-4 w-5 bg-sky-900 -rotate-45 transform origin-top-left"></div>
                          </div>
                        </div>
                      </div>
                      <img className="w-full h-auto object-cover max-w-md rounded-md" src={book.cover} alt={book.title} />
                    </div>
                    <div className="Info col-span-3 text-sm">
                      <div className="xl:text-3xl sm:text-base lg:text-2xl md:text-xl font-semibold text-zinc-100">{book.title}</div>
                      <div className="flex flex-wrap h-auto w-full mt-3 mb-3">
                        {book.tags?.map((tag, index) => (
                          <a href="##" id={tag.code} className="no-underline" key={index}>
                            <div className="w-fit h-fit bg-zinc-700 border border-solid border-zinc-600 px-3 py-1 font-normal text-xs mx-1 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-cyan-900 hover:border-cyan-500 duration-300 mb-2">
                              {tag.name}
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="other-names mb-2 text-zinc-100">
                        <span className="font-semibold mr-2">Tên khác:</span>
                        <span>{book.otherNames?.join('; ')}</span>
                      </div>
                      <div className="author mb-2 text-zinc-100">
                        <span className="font-semibold mr-2">Tác giả:</span>
                        <span>{book.author}</span>
                      </div>
                      <div className="artist mb-2 text-zinc-100">
                        <span className="font-semibold mr-2">Hoạ sĩ:</span>
                        <span>{book.artist}</span>
                      </div>
                      <div className="status mb-2 text-zinc-100">
                        <span className="font-semibold mr-2">Tình trạng:</span>
                        <span>{book.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="py-5 w-full h-auto border-y border-x-0 border-zinc-700 border-solid">
                  <div class="flex flex-col justify-center items-center cursor-pointer" onClick={handleFollow}>
                    <div>
                      {isFollowing ? (
                        <HeartFilled style={{ fontSize: '32px', color: '#f43f5e' }} />
                      ) : (
                        <HeartOutlined style={{ fontSize: '32px', color: '#f43f5e' }} />
                      )}
                    </div>
                    <div class="text-rose-500 mt-1 font-semibold">{followCount}</div>
                  </div>
                </div>
                <div className=" h-fit p-3">
                  <div className="font-bold text-lg text-zinc-100">Tóm tắt</div>
                  <div className="mt-3 text-sm text-zinc-100">
                    {book.description?.split(/\n/).map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              {book.sections?.map((section, index) => (
                <div
                  className="max-w-full h-fit bg-zinc-800 border border-solid border-zinc-700 rounded-md mt-8 pb-3"
                  key={index}
                  id={section.id}
                >
                  <div className="grid grid-cols-6 gap-4 sm:grid-col-1">
                    <div className="col-span-6 bg-zinc-700 w-full h-fit mb-3 p-3 font-bold text-xl rounded-t-md text-zinc-100">
                      {section.name}
                      <span className="float-right font-bold text-xl text-zinc-500 hover:text-zinc-100 duration-500 cursor-pointer">
                        {section.chapters?.length} chương
                      </span>
                    </div>
                    <div className="left col-span-1 pl-3">
                      <img className="w-full h-auto object-cover max-w-md rounded-md" src={section.cover} alt={section.title} />
                    </div>
                    <div className="Info col-span-5 text-base pr-3">
                      <TableListChapter chapters={section.chapters} prefix="/novel-chapter/" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="Comment max-w-full h-fit bg-zinc-800 border border-solid border-zinc-700 rounded-md mt-8 pb-3">
                <div className="grid grid-cols-6 sm:grid-col-1">
                  <div className="col-span-6 bg-zinc-700 w-full h-fit mb-3 p-3 font-bold text-xl rounded-t-md text-zinc-100">
                    Bình luận {`(${book.comments?.length})`}
                  </div>
                  <div className="col-span-6 w-full h-fit p-6 pb-4 font-bold text-2xl rounded-t-md text-zinc-100">
                    {!isLogged ? (
                      <div className="text-sm font-normal mb-2">
                        Bạn phải{' '}
                        <Link to="/auth/login" className="no-underline text-cyan-500 hover:text-cyan-400">
                          đăng nhập
                        </Link>{' '}
                        hoặc{' '}
                        <Link to="/auth/register" className="no-underline text-cyan-500 hover:text-cyan-400">
                          tạo tài khoản
                        </Link>{' '}
                        để bình luận.
                      </div>
                    ) : (
                      <div className="text-sm font-normal mb-2">
                        <div>
                          <Editor onEditorChange={onEditorChange} />
                        </div>
                        <div className="mt-3 float-right">
                          <button
                            type="submit"
                            onClick={handleComment}
                            className="bg-cyan-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-cyan-400 border-0 border-white"
                          >
                            Bình luận
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-span-9 p-6 pl-0">
                    <CommentSection comments={book.comments} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen w-full rounded-md">
              <div className="border border-solid border-sky-800 rounded-md mb-6">
                <div className="w-full h-10 bg-sky-900 flex flex-row rounded-t-md">
                  <div>
                    <img className="w-10 h-10 object-cover rounded-tl-md" src={book.uploaderInfo?.avatar} alt="" />
                  </div>
                  <div className="mx-auto my-auto text-sm font-semibold">
                    <a
                      href={`/user/${book.uploaderInfo?.id}`}
                      className="no-underline text-zinc-100 hover:text-cyan-400 duration-300 line-clamp-1 px-2"
                    >
                      {book.uploaderInfo?.name}
                    </a>
                  </div>
                </div>
                <div className="w-full h-1 bg-sky-500 rounded-b-md"></div>
              </div>
              {auth && (
                <div class="w-full bg-zinc-800 h-fit rounded-md p-3 border border-solid border-zinc-700">
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Link to={`/action/update-series/${id}`}>
                      <Button block className='bg-zinc-700 border border-solid border-zinc-600 text-zinc-300 hover:bg-sky-900 hover:border-cyan-500'>
                        <EditOutlined />
                        Chỉnh sửa
                      </Button>
                    </Link>
                    <Link to={`/action/create-section/${id}`}>
                      <Button block className='bg-zinc-700 border border-solid border-zinc-600 text-zinc-300 hover:bg-sky-900 hover:border-cyan-500'>
                        <FileOutlined />
                        Thêm tập
                      </Button>
                    </Link>
                    <Button block className='bg-zinc-700 border border-solid border-zinc-600 text-zinc-300 hover:bg-sky-900 hover:border-cyan-500' onClick={showModal}>
                      <ProfileOutlined />
                      Thêm chương
                    </Button>
                    <Modal title="Thêm chương" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <label htmlFor="volumes" class="block mb-2 text-sm font-medium dark:text-white">
                        Thêm chương
                      </label>
                      {book.sections?.length > 0 ? (
                        <select
                          id="volumes"
                          class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(e) => setSectionToCreate(e.target.value)}
                        >
                          <option value="">Chọn tập</option>
                          {book.sections?.map((section, index) => (
                            <option value={section.id} key={index}>
                              {section.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div class="text-sm font-normal mb-2">
                          Bạn phải{' '}
                          <Link
                            to={`/action/create-section/${id}`}
                            className="no-underline text-cyan-700 hover:text-cyan-600"
                          >
                            thêm tập
                          </Link>{' '}
                          trước khi thêm chương.
                        </div>
                      )}
                    </Modal>
                  </Space>
                </div>
              )}
              {/* Show table of sections */}
              {book.sections && (
                <div className="rounded-md mb-6 mt-6">
                  <div className="w-full h-10 bg-sky-900 flex flex-row rounded-t-md border border-solid border-sky-800">
                    <div className="mx-auto my-auto text-sm font-semibold text-white">Danh sách tập</div>
                  </div>
                  <div className="w-full h-1 bg-cyan-500"></div>
                  <div className="w-full h-fit bg-zinc-800 p-2 rounded-b-md border border-t-0 border-solid border-zinc-700 hover:border-sky-800">
                    <div className="text-gray-900 text-sm text-justify">
                      {book.sections?.map((section, index) => (
                        <div className="flex flex-row" key={index}>
                          <div className="w-11/12">
                            <div className="text-gray-900 text-sm text-justify">
                              <a href={`#${section.id}`} className="no-underline text-zinc-300 hover:text-cyan-500 duration-300">
                                {section.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* <div className='border border-solid border-gray-400 rounded-md'>
                <div className='col-span-6 bg-gray-100 w-full h-fit p-3 font-bold text-md rounded-t-md'>Ghi chú thêm</div>
                <div className='w-full h-fit bg-white p-2 rounded-b-md'>
                  <div className='text-gray-900 text-sm text-justify'>Về "góc nhìn meta" (メタ視点) được nhắc đến trong phần tóm tắt, đây là một thuật ngữ ám chỉ một góc nhìn nằm ngoài thế giới, nắm bắt sự vật và sự kiện trong thế giới này một cách khách quan. Trong bộ này thì đó là góc nhìn của MC - Koutarou, nhìn thế giới này như một bộ romcom mà Ryuuzaki là nhân vật chính của bộ romcom đấy.</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovelInfo;
