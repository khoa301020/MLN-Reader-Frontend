import { ExclamationCircleFilled, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination } from 'antd';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { adminApi } from '../../api/api';
import { datetimeConverter } from '../../helpers/helper';

const token = Cookies.get('token');
const typeMap = {
  novel: 'Tiểu thuyết',
  manga: 'Truyện tranh',
  'novel-chapter': 'Chương tiểu thuyết',
  'manga-chapter': 'Chương truyện tranh',
};
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
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [displayComments, setDisplayComments] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');

  useEffect(() => {
    adminApi
      .getAllComments(token)
      .then((res) => {
        if (res.data.result) {
          setComments(res.data.result);
          setFilteredComments(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filteredComments && setDisplayComments(filteredComments.slice((page - 1) * pageSize, page * pageSize));
  }, [filteredComments, page, pageSize]);

  useEffect(() => {
    if (comments.length > 0)
      setFilteredComments(
        comments.filter(
          (comment) =>
            comment.user?.name.includes(query) ||
            comment.target?.title.includes(query) ||
            comment.content?.includes(query),
        ),
      );
  }, [comments, query]);

  return (
    <>
      <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
        <div class="flex flex-row justify-center text-lg uppercase my-7">Bình luận</div>
        <div>
          <div class="sm:rounded-lg cursor-pointer">
            <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" class="sr-only">
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-solid border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tìm kiếm"
                  autoFocus
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Thông tin truyện
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Bình luận
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ngày đăng
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Người đăng
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayComments?.map((comment, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 dark:text-white">
                      <a href={`/${comment.type}/${comment.targetId}`} class="hover:opacity-90">
                        <img class="w-20 h-30 rounded-md" src={comment.target.cover} alt="" />
                      </a>
                      <div class="pl-3">
                        <div class="text-md font-semibold">{comment.target.title}</div>
                        <div class="font-normal text-gray-500">{typeMap[comment.type]}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">{parse(comment.content)}</td>
                    <td class="px-6 py-4">{`${datetimeConverter(comment.createdAt).datetime}`}</td>
                    <td class="px-6 py-4">{comment.user.name}</td>
                    <td class="px-6 py-4">
                      <Button type="link" onClick={showConfirm}>
                        <div class="hover:opacity-80">
                          <MinusCircleOutlined style={{ color: 'red' }} />
                        </div>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-14 mb-10">
          <Pagination
            total={filteredComments?.length}
            defaultCurrent={page}
            defaultPageSize={pageSize}
            onChange={(value) => setPage(value)}
            pageSizeOptions={[10, 20, 50]}
            onShowSizeChange={(current, size) => setPageSize(size)}
          />
        </div>
      </div>
    </>
  );
}
