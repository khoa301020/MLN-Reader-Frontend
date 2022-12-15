import { DownOutlined, FormOutlined } from '@ant-design/icons';
import React from 'react';
// PlusCircleOutlined, CloseCircleOutlined
import { Tree } from 'antd';
const treeData = [
  {
    title: 'Shimotsuki wa Mob ga Suki',
    key: '0-0',
    children: [
      {
        title: 'Chính truyện - Phần Một',
        key: '0-0-0',
        icon: <FormOutlined />,
        children: [
          {
            title: 'Minh hoạ tập 1',
            key: '0-0-0-0',
            icon: <FormOutlined />,
          },
          {
            title: 'Mở đầu - Câu chuyện romcom học đường đau thương của cựu nhân vật chính bị giáng cấp xuống thành nhân vật nền',
            key: '0-0-0-1',
            icon: <FormOutlined />,
          },
          {
            title: 'Chương 01 - Thiếu nữ trầm lặng chỉ nói nhiều với mỗi mình tôi',
            key: '0-0-0-2',
            icon: <FormOutlined />
          },
        ],
      },
      {
        title: 'Chính truyện - Phần Hai',
        key: '0-0-1',
        icon: <FormOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <FormOutlined />
          },
        ],
      },
      {
        title: 'Chính truyện - Phần Ba',
        key: '0-0-2',
        icon: <FormOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <FormOutlined />
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <FormOutlined />
          },
        ],
      },
    ],
  },
];
const TreeView = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
      showIcon={true}
    />
  );
};
export default TreeView;