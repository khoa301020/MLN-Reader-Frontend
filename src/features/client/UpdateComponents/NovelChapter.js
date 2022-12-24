import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { novelApi } from '../../../api/api';
import EditorForm from '../../../components/Editor';

export default function NovelChapter({ id }) {

  const [novel, setNovel] = useState({})
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log(id);
    novelApi.getChapterOnly(id).then((res) => {
      if (res.data.result) {
        setNovel(res.data.result);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);

  useEffect(() => {
    if (novel.content) {
      setContent(novel.content);
    }
    if (novel.title) {
      setTitle(novel.title);
    }
    if (novel.notes) {
      setNotes(novel.notes);
    }
  }, [novel]);

  useEffect(() => {
    if (content && title) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [content, title]);

  const onEditorChange = (content) => {
    setContent(content);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      subject: 'chapter',
      id: id,
      content: content.content,
      wordCount: content.wordCount,
      title: title,
      notes: notes
    }

    novelApi.updateChapter(data).then((res) => {
      if (res.data.result) {
        toast.success('Cập nhật thành công');
      } else {
        toast.error('Cập nhật thất bại');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='w-full min-h-screen'>
      <div className='w-full grid grid-cols-12 gap-12'>
        <div className='row-start-3 col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded mb-20'>
          <div className='w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md'>
            Chỉnh sửa chương truyện
          </div>
          <div className='px-8 py-10 min-h-screen'>
            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Tiêu đề<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <input type="text" name='title' className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required value={title} onChange={e => setTitle(e.target.value)} />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
              <div className='col-span-2 text-right place-items-center my-2'>
                <label className='text-right text-gray-900'>Nội dung<span className='text-red-500'>*</span></label>
              </div>
              <div className='col-span-6'>
                <EditorForm initContent={content} onEditorChange={onEditorChange} type="html" />
              </div>
            </div>

            <div className='grid grid-cols-9 gap-9 content-center mb-4'>

              <div className='col-start-3 col-span-6'>
                <button type="button"
                  disabled={!check ? true : false}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
                  onClick={handleSubmit}>Lưu thay đổi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}