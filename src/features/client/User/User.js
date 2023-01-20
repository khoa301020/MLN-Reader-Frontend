import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { userApi } from '../../../api/api';
import coverProfile from '../../../assets/img/coverProfile.png';

export default function User({ isSelf = false }) {
  const { id } = useParams() || null;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSelf) {
      const token = Cookies.get('token');
      if (!token) {
        toast.error('Bạn phải đăng nhập để xem trang này');
        navigate('/');
      }
      userApi
        .getMe(token)
        .then((res) => {
          setUser(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
          navigate('/');
        });
    } else {
      userApi.getUser(id).then((res) => {
        setUser(res.data.result);
        setLoading(false);
      });
    }
  }, [id, isSelf, navigate]);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
          Loading
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="wrapper" class="flex w-full h-fit min-h-screen bg-zinc-800 justify-center">
        <div className="container" class="grid grid-cols-12 w-full">
          <div
            className="profile"
            class="grid col-start-3 col-end-11 max-w-7xl w-full h-fit my-12 shadow-md rounded-md bg-zinc-800 bg-fixed"
          >
            <div class="flex flex-col w-full shadow-[0_0px_20px_-5px_rgb(255,255,255,0.3)]">
              <div class="h-72 opacity-50">
                <img class="w-full h-72 object-cover rounded-t-md" src={coverProfile} alt="coverProfile" />
              </div>
              <div class="block my-0 mx-auto w-4/5 h-fit bg-zinc-900 -mt-20 relative rounded-md mb-10">
                <div className="Photo" class="flex flex-col z-10">
                  <div class="-mt-20 mx-auto block">
                    <img
                      class="w-40 h-40 rounded-full object-cover shadow-md"
                      src={user?.avatar}
                      alt="Rounded avatar"
                    />
                  </div>
                </div>
                <div class="p-5 pt-1 flex flex-col items-center">
                  <div class="font-bold text-2xl text-zinc-100">{user?.name}</div>
                  {isSelf && (
                    <div
                      class="text-xs cursor-pointer text-zinc-500 hover:text-cyan-500 duration-300"
                      onClick={() => setOpen(true)}
                    >
                      sửa
                    </div>
                  )}
                  <Modal
                    title="Chỉnh sửa hồ sơ"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={800}
                  >
                    <Form
                      name="basic"
                      labelCol={{ span: 4 }}
                      wrapperCol={{ span: 18 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item label="Tên hiển thị" name="username">
                        <Input defaultValue="Lacie desuka" />
                      </Form.Item>
                      <Form.Item label="Ảnh bìa" name="coverpage">
                        <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture"
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item label="Ảnh đại diện" name="avatar">
                        <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture"
                          maxCount={1}
                        >
                          <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
                        </Upload>
                      </Form.Item>
                    </Form>
                  </Modal>
                  <div class="grid grid-cols-7 gap-4 mt-5 justify-items-center">
                    <div class="grid col-start-2 col-span-2 justify-items-center">
                      <div class="font-bold text-3xl text-zinc-100">{user?.uploadedNovelChapters + user?.uploadedMangaChapters}</div>
                      <div class="text-sm text-zinc-100">Chương đã đăng</div>
                    </div>
                    <div class="w-1.5 h-16 bg-zinc-100 mx-10 rounded-sm "></div>
                    <div class="grid col-start-5 col-span-2 justify-items-center">
                      <div class="font-bold text-3xl text-zinc-100">
                        {user.followingNovels?.length + user.followingNovels?.length}
                      </div>
                      <div class="text-sm text-zinc-100">Truyện theo dõi</div>
                    </div>
                  </div>
                </div>
                <div class="p-5 mt-5">
                  <div class="w-full mb-5">
                    <div class="flex flex-row items-center">
                      <div class="p-2 bg-cyan-500 text-white font-bold">{user?.uploadedNovels?.length}</div>
                      <div class="ml-3 font-bold uppercase text-zinc-100">Tiểu thuyết đã đăng</div>
                    </div>
                    <div class="w-full h-1 bg-cyan-500"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-5">
                    {user?.uploadedNovels &&
                      user.uploadedNovels.map((novel, index) => (
                        <div class="grid grid-cols-3 gap-4 w-full h-32 rounded-md shadow bg-zinc-800" key={index}>
                          <a
                            href={`/novel/${novel.id}`}
                            class="w-full h-32 object-cover rounded-l-md hover:opacity-80 duration-300"
                          >
                            <img class="w-full h-32 object-cover rounded-l-md" src={novel.cover} alt="cover" />
                          </a>
                          <div class="col-span-2 py-2 pr-2.5">
                            <div
                              class={`text-white w-fit h-fit p-1 
                          ${
                            novel.status === 'Tạm ngưng'
                              ? 'bg-red-500'
                              : novel.status === 'Đang tiến hành'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }
                          text-xs mb-1`}
                            >
                              {novel.status}
                            </div>
                            <a
                              href={`/novel/${novel.id}`}
                              class="text-md font-bold line-clamp-4 no-underline text-zinc-100 hover:text-cyan-500 duration-300"
                            >
                              {novel.title}
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div class="p-5 mt-5">
                  <div class="w-full mb-5">
                    <div class="flex flex-row items-center">
                      <div class="p-2 bg-cyan-500 text-white font-bold">{user?.uploadedMangas.length}</div>
                      <div class="ml-3 font-bold uppercase text-zinc-100">Truyện tranh đã đăng</div>
                    </div>
                    <div class="w-full h-1 bg-cyan-500"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-5">
                    {user?.uploadedMangas?.map((manga, index) => (
                      <div class="grid grid-cols-3 gap-4 w-full h-32 rounded-md shadow bg-zinc-800" key={index}>
                        <a
                          href={`/manga/${manga.id}`}
                          class="w-full h-32 object-cover rounded-l-md hover:opacity-80 duration-300"
                        >
                          <img class="w-full h-32 object-cover rounded-l-md" src={manga.cover} alt="cover" />
                        </a>
                        <div class="col-span-2 py-2 pr-2.5">
                          <div
                            class={`text-white w-fit h-fit p-1
                          ${
                            manga.status === 'Tạm ngưng'
                              ? 'bg-red-500'
                              : manga.status === 'Đang tiến hành'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }
                          text-xs mb-1`}
                          >
                            {manga.status}
                          </div>
                          <a
                            href={`/manga/${manga.id}`}
                            class="text-md font-bold line-clamp-4 no-underline text-zinc-100 hover:text-cyan-500 duration-300"
                          >
                            {manga.title}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
