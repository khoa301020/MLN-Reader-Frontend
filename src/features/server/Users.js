import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { adminApi } from '../../api/api';
import { datetimeConverter } from '../../helpers/helper';

const token = Cookies.get('token');

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState('');

  useEffect(() => {
    adminApi
      .getAllUsers(token)
      .then((res) => {
        if (res.data.result) {
          setUsers(res.data.result);
          setFilteredUsers(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filteredUsers && setDisplayUsers(filteredUsers.slice((page - 1) * pageSize, page * pageSize));
  }, [filteredUsers, page, pageSize]);

  useEffect(() => {
    if (users.length > 0)
      setFilteredUsers(
        users.filter(
          (user) =>
            user.username?.includes(query) || user.email?.includes(query) || user.accountStatus?.status.includes(query),
        ),
      );
  }, [users, query]);
  return (
    <>
      <div className="wrapper" class="flex flex-col flex-wrap w-full min-h-fit h-fit mx-auto">
        <div class="flex flex-row justify-center text-lg uppercase my-7">Thành viên</div>
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
                    Thành viên
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ngày tham gia
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tiểu thuyết đã đăng
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Truyện tranh đã đăng
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tình trạng
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {displayUsers?.map((user, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      <img class="w-10 h-10 rounded-full" src={user.avatar} alt="" />
                      <div class="pl-3">
                        <div class="text-base font-semibold">{user.name}</div>
                        <div class="font-normal text-gray-500">{user.email}</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">{user.createdAt && datetimeConverter(user.createdAt).datetime}</td>
                    <td class="px-6 py-4">{user.uploadedNovels.length}</td>
                    <td class="px-6 py-4">{user.uploadedMangas.length}</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                        <div>{user.accountStatus.status}</div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="hover:opacity-80">
                        {user.accountStatus.status === 'active' ? (
                          <StopOutlined style={{ color: 'red' }} />
                        ) : (
                          <CheckCircleOutlined style={{ color: 'blue' }} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-14 mb-10">
          <Pagination
            total={filteredUsers?.length}
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
