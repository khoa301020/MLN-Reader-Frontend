import { ExclamationCircleFilled, MinusCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Modal, Pagination } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { adminApi } from '../../api/api';

const token = Cookies.get('token');
// const statusMap = {
//   'Đang tiến hành': 'green',
//   'Đã hoàn thành': 'blue',
//   'Tạm ngưng': 'yellow',
// };

export default function LightNovels() {
  const { confirm } = Modal;
  const [novels, setNovels] = useState([]);
  const [filteredNovels, setFilteredNovels] = useState([]);
  const [displayNovels, setDisplayNovels] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');

  useEffect(() => {
    adminApi
      .getAllNovels(token)
      .then((res) => {
        if (res.data.result) {
          setNovels(res.data.result);
          setFilteredNovels(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filteredNovels && setDisplayNovels(filteredNovels.slice((page - 1) * pageSize, page * pageSize));
  }, [filteredNovels, page, pageSize]);

  useEffect(() => {
    if (novels.length > 0)
      setFilteredNovels(
        novels.filter(
          (novel) =>
            novel.title?.includes(query) ||
            novel.author?.includes(query) ||
            novel.uploader?.includes(query) ||
            novel.tags?.find((tag) => tag.name.includes(query)) ||
            novel.status?.includes(query),
        ),
      );
  }, [novels, query]);

  const showDeleteConfirm = (novel) => {
    confirm({
      title: 'Bạn có muốn xoá tiểu thuyết không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để xoá tiểu thuyết',
      onOk() {
        adminApi
          .deleteNovel(novel.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = novels.findIndex((novelElement) => novelElement.id === novel.id);
              const newNovels = novels.map((novelElement) =>
                novelElement.id === novel.id ? res.data.result : novelElement,
              );
              console.log(newNovels);
              setNovels(newNovels);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  const showRestoreConfirm = (novel) => {
    confirm({
      title: 'Bạn có muốn khôi phục tiểu thuyết này không?',
      icon: <ExclamationCircleFilled />,
      content: 'Nhấn "Ok" để khôi phục tiểu thuyết',
      onOk() {
        adminApi
          .restoreNovel(novel.id, token)
          .then((res) => {
            if (res.data.code === 200) {
              // const index = novels.findIndex((novelElement) => novelElement.id === novel.id);
              const newNovels = novels.map((novelElement) =>
                novelElement.id === novel.id ? res.data.result : novelElement,
              );
              setNovels(newNovels);
              return toast.success(res.data.message);
            } else return toast.error('Đã có lỗi xảy ra');
          })
          .catch((err) => {
            const msg = err.response.data.message ? err.response.data.message : 'Đã có lỗi xảy ra';
            return toast.error(msg);
          });
      },
      onCancel() {},
    });
  };

  return (
    <>
      <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
        <div class="flex flex-row justify-center text-lg uppercase my-7">Tiểu thuyết</div>
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
                  id="table-search-novels"
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
                    Ảnh bìa
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tên truyện
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tác giả
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Thể loại
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tình trạng
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Số tập
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Số chương
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
                {displayNovels?.map((novel, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td class="px-6 py-4">
                      <a href={`/novel/${novel.id}`} class="hover:opacity-90">
                        <img class="w-20 h-30 rounded-md" src={`${novel.cover}`} alt="" />
                      </a>
                    </td>
                    <td class="px-6 py-4">{novel.title}</td>
                    <td class="px-6 py-4">{novel.author}</td>
                    <td class="px-6 py-4">{novel.tags.map((tag) => tag.name).join(', ')}</td>
                    <td class="px-6 py-4">{novel.status}</td>
                    {/* <td class="px-6 py-4"><Tag color={statusMap[novel.status]}>{novel.status}</Tag></td> */}
                    <td class="px-6 py-4">{novel.sectionCount}</td>
                    <td class="px-6 py-4">{novel.chapterCount}</td>
                    <td class="px-6 py-4">{novel.uploader}</td>
                    <td class="px-6 py-4">
                      <Button
                        onClick={() => (novel.deletedAt ? showRestoreConfirm(novel) : showDeleteConfirm(novel))}
                        type="link"
                        icon={novel.deletedAt ? <ReloadOutlined /> : <MinusCircleOutlined />}
                        danger={!novel.deletedAt}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-14 mb-10">
          <Pagination
            total={filteredNovels?.length}
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
