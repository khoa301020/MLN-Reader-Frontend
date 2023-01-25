import React from 'react';
import { MinusCircleOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';


const { confirm } = Modal;
const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleFilled />,
    // content: 'Some descriptions',
    okText: 'Xoá',
    cancelText: 'Huỷ',
    onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
  });
};

export default function Comments() {
  return (
    <>
      <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
        <div class='flex flex-row justify-center text-lg uppercase my-7'>Bình luận</div>
          <div>
            <div class="sm:rounded-lg cursor-pointer">
                <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm"/>
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Ảnh bìa
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bình luận
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Người đăng
                            </th>
                            <th scope="col" class="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 dark:text-white">
                                <a 
                                    href='http://localhost:3000/novel/novel_30' 
                                    class='hover:opacity-90'>
                                    <img 
                                        class="w-20 h-30 rounded-md" 
                                        src="https://i.docln.net/lightnovel/covers/s6947-c88f3795-4fcf-4dfe-b25e-3b64c03087d8-m.jpg" 
                                        alt="" 
                                    />
                                </a>
                                <div class="pl-3">
                                    <div class="text-md font-semibold">Phá Đảo Dị Giới Cùng Nữ Thần Không Tín Đồ</div>
                                    <div class="font-normal text-gray-500">Oosaki Airu</div>
                                </div>  
                            </th>
                            <td class="px-6 py-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </td>
                            <td class="px-6 py-4">
                                Maice Alice 
                            </td>
                            <td class="px-6 py-4">
                                <Button type='link' onClick={showConfirm}><div class="hover:opacity-80"><MinusCircleOutlined style={{ color: 'red' }}/></div></Button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 dark:text-white">
                                <a 
                                    href='http://localhost:3000/novel/novel_30' 
                                    class='hover:opacity-90'>
                                    <img 
                                        class="w-20 h-30 rounded-md" 
                                        src="https://i.docln.net/lightnovel/covers/s6947-c88f3795-4fcf-4dfe-b25e-3b64c03087d8-m.jpg" 
                                        alt="" 
                                    />
                                </a>
                                <div class="pl-3">
                                    <div class="text-md font-semibold">Phá Đảo Dị Giới Cùng Nữ Thần Không Tín Đồ</div>
                                    <div class="font-normal text-gray-500">Oosaki Airu</div>
                                </div>  
                            </th>
                            <td class="px-6 py-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </td>
                            <td class="px-6 py-4">
                                Maice Alice 
                            </td>
                            <td class="px-6 py-4">
                                <Button type='link' onClick={showConfirm}><div class="hover:opacity-80"><MinusCircleOutlined style={{ color: 'red' }}/></div></Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        <div class='flex flex-row justify-center mt-14 mb-10'><Pagination defaultCurrent={6} total={500} /></div>
    </div>
    </>
);
}
