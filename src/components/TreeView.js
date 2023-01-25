import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
// import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { mangaApi, novelApi } from '../api/api';

const TreeView = ({ id, onSubjectClick }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    let fetch;
    if (id?.includes('novel')) fetch = novelApi.getNovelUpdate(id);
    if (id?.includes('manga')) fetch = mangaApi.getMangaUpdate(id);

    fetch
      .then((res) => {
        if (res.data.result) {
          setBook([res.data.result]);
        } else {
          setBook({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!book.length > 0) return <div>Không có dữ liệu</div>;

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={(selectedKeys, info) => onSubjectClick({ id: info.node.id, type: info.node.type })}
      treeData={book}
      showIcon={true}
    />
  );
};
export default TreeView;
