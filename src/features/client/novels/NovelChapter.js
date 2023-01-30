import { CaretLeftOutlined, CaretRightOutlined, HomeFilled } from '@ant-design/icons';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { novelApi, userApi } from '../../../api/api';
import CommentSection from '../../../components/CommentSection';
import Editor from '../../../components/Editor';
import './image.css';

function NovelChapter() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [comment, setComment] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    novelApi
      .getChapter(id)
      .then((res) => {
        const chapter = res.data.result;

        setChapter(chapter);

        const newReadingNovel = {
          novelId: chapter.novelInfo.id,
          novelCover: chapter.novelInfo.cover,
          novelTitle: chapter.novelInfo.title,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          lastRead: Date.now(),
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
    }
  }, [navigate]);

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
      type: 'novel-chapter',
      action: 'comment',
    };
    userApi
      .comment(data, token)
      .then((res) => {
        console.log(res.data);
        toast.success('Bình luận thành công');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Bình luận thất bại');
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
          Chapter not found
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="container max-w-full min-h-screen bg-zinc-900">
        <div className="grid grid-cols-12 h-auto w-full mx-auto">
          <div className="col-start-2 col-span-10 h-auto mt-10 max-w-screen-xl">
            <div className="ChapterInfo text-center">
              <div className="Season font-bold text-3xl mb-3 text-sky-500">{chapter.sectionInfo.name}</div>
              <div className="Title font-bold text-2xl mb-3 text-sky-500">{chapter.title}</div>
              <div className="ReleaseDate font-bold text-md text-zinc-300 mb-10">{chapter.lastUpdated}</div>
              <div className="Line w-20 h-px bg-sky-900 mx-auto my-auto mb-10"></div>
            </div>
            <div className="ChapterContent">
              <div className="block m-auto h-auto max-w-screen-xl text-justify font-normal text-xl overflow-hidden text-zinc-300">
                {parse(chapter.content)}
              </div>
              <div className="TableOfcontents grid grid-cols-3 rounded-full w-full mt-10 border border-solid border-zinc-700 hover:border-cyan-500 duration-300">
                <div
                  className={`col-span-1 bg-zinc-800 rounded-l-full p-3 hover:bg-sky-900 duration-700 ${
                    !chapter.nav.hasOwnProperty('prev') && 'disabledDiv'
                  }`}
                >
                  <a href={`/novel-chapter/${chapter.nav.prev}`}>
                    <div className="flex justify-center items-center">
                      <CaretLeftOutlined style={{ color: '#f4f4f5', fontSize: '200%' }} />
                    </div>
                  </a>
                </div>

                <div className="col-span-1 bg-zinc-800 p-3 hover:bg-sky-900 duration-700">
                  <a href={`/novel/${chapter.novelId}`}>
                    <div className="flex justify-center items-center">
                      <HomeFilled style={{ color: '#f4f4f5', fontSize: '200%' }} />
                    </div>
                  </a>
                </div>

                <div
                  className={`col-span-1 bg-zinc-800 rounded-r-full p-3 hover:bg-sky-900 duration-700 ${
                    !chapter.nav.hasOwnProperty('next') && 'disabledDiv'
                  }`}
                >
                  <a href={`/novel-chapter/${chapter.nav.next}`}>
                    <div className="flex justify-center items-center">
                      <CaretRightOutlined style={{ color: '#f4f4f5', fontSize: '200%' }} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="Comment max-w-full h-fit bg-zinc-800 border border-solid border-zinc-700 rounded-md mt-8 pb-3 mb-10">
              <div className="grid grid-cols-6 gap-4 sm:grid-col-1">
                <div className="col-span-6 bg-zinc-700 w-full h-fit p-3 font-bold text-xl rounded-t-md text-zinc-100">
                  Bình luận {`(${chapter.comments?.length})`}
                </div>
                <div className="col-span-6 w-full h-fit px-3 font-bold text-2xl rounded-t-md">
                  {!isLogged ? (
                    <div className="text-sm font-normal mb-2 text-zinc-100">
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
                          className="bg-cyan-500 text-white font-semibold border border-solid border-transparent px-4 py-2 rounded-md hover:bg-cyan-400"
                        >
                          Bình luận
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-span-6">
                  <CommentSection comments={chapter.comments} />
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
