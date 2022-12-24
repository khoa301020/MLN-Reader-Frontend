import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import coverProfile from '../../../assets/img/coverProfile.png'

export default function User () {
    const [open, setOpen] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div className='wrapper' class='flex w-full h-fit min-h-screen bg-gray-50 justify-center'>
                <div className='container' class='grid grid-cols-12 w-full'>
                    <div className='profile' class='grid col-start-3 col-end-11 max-w-7xl w-full h-fit my-12 shadow-md rounded-md bg-black bg-fixed'>
                        <div class='flex flex-col w-full'>
                            <div class='h-72 opacity-50'><img class='w-full h-72 object-cover rounded-t-md' src={coverProfile} alt='coverProfile' /></div>
                            <div class='block my-0 mx-auto w-4/5 h-fit bg-white -mt-20 relative rounded-md mb-10'>
                                <div className='Photo' class='flex flex-col z-10'>
                                    <div class='-mt-20 mx-auto block'><img class="w-40 h-40 rounded-full object-cover shadow-md" src="https://i.imgur.com/jHSEyxh.jpg" alt="Rounded avatar"/></div>
                                </div>
                                <div class='p-5 pt-1 flex flex-col items-center'>
                                    <div class='font-bold text-2xl'>Lacie desuka</div>
                                    <div class='text-xs cursor-pointer text-gray-500 hover:text-cyan-500 duration-300' onClick={() => setOpen(true)}>sửa</div>
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
                                            <Form.Item
                                                label="Tên hiển thị"
                                                name="username"
                                            >
                                                <Input defaultValue="Lacie desuka" />
                                            </Form.Item>
                                            <Form.Item
                                                label="Ảnh bìa"
                                                name="coverpage"
                                            >
                                                <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture"
                                                maxCount={1}
                                                >
                                                <Button icon={<UploadOutlined />}>Tải lên ảnh bìa</Button>
                                                </Upload>
                                            </Form.Item>
                                            <Form.Item
                                                label="Ảnh đại diện"
                                                name="avatar"
                                            >
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
                                    <div class='grid grid-cols-7 gap-4 mt-5 justify-items-center'>
                                        <div class='grid col-start-2 col-span-2 justify-items-center'>
                                            <div class='font-bold text-3xl'>300</div>
                                            <div class='text-sm'>Chương đã đăng</div>
                                        </div>
                                        <div class='w-1.5 h-16 bg-black mx-10 rounded-sm'></div>
                                        <div class='grid col-start-5 col-span-2 justify-items-center'>
                                            <div class='font-bold text-3xl'>15</div>
                                            <div class='text-sm'>Truyện theo dõi</div>
                                        </div>
                                    </div>
                                </div>
                                <div class='p-5 mt-5'>
                                    <div class='w-full mb-5' >
                                        <div class='flex flex-row items-center'>
                                            <div class='p-2 bg-black text-white font-bold'>03</div>
                                            <div class='ml-3 font-bold uppercase'>Truyện đã đăng</div>
                                        </div>
                                        <div class='w-full h-1 bg-black'></div>
                                    </div>
                                    <div class='grid grid-cols-2 gap-5'>
                                        <div class='grid grid-cols-3 gap-4 w-full h-32 rounded-md shadow'>
                                            <img class='w-full h-32 object-cover rounded-l-md' src='https://melonbooks.akamaized.net/user_data/packages/resize_image.php?image=211000128616.jpg' alt='' />
                                            <div class='col-span-2 py-2 pr-2.5'>
                                                <div class='text-white w-fit h-fit p-1 bg-cyan-500 text-xs mb-1'>Tiểu thuyết</div>
                                                <a href='##' class='text-md font-bold line-clamp-4 no-underline text-black hover:text-cyan-500 duration-300'>Oujo Denka wa Oikari no You desu</a>
                                            </div>
                                        </div>
                                        <div class='grid grid-cols-3 gap-4 w-full h-32 rounded-md shadow'>
                                            <img class='w-full h-32 object-cover rounded-l-md' src='https://melonbooks.akamaized.net/user_data/packages/resize_image.php?image=211000128616.jpg' alt='' />
                                            <div class='col-span-2 py-2 pr-2.5'>
                                                <div class='text-white w-fit h-fit p-1 bg-cyan-500 text-xs mb-1'>Tiểu thuyết</div>
                                                <a href='##' class='text-md font-bold line-clamp-4 no-underline text-black hover:text-cyan-500 duration-300'>Oujo Denka wa Oikari no You desu</a>
                                            </div>
                                        </div>
                                        <div class='grid grid-cols-3 gap-4 w-full h-32 rounded-md shadow'>
                                            <img class='w-full h-32 object-cover rounded-l-md' src='https://melonbooks.akamaized.net/user_data/packages/resize_image.php?image=211000128616.jpg' alt='' />
                                            <div class='col-span-2 py-2 pr-2.5'>
                                                <div class='text-white w-fit h-fit p-1 bg-cyan-500 text-xs mb-1'>Truyện tranh</div>
                                                <a href='##' class='text-md font-bold line-clamp-4 no-underline text-black hover:text-cyan-500 duration-300'>Oujo Denka wa Oikari no You desu</a>
                                            </div>
                                        </div>
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