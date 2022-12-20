import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TreeView from '../../../components/TreeView';
import Book from '../UpdateComponents/Book';
import MangaChapter from '../UpdateComponents/MangaChapter';
import NovelChapter from '../UpdateComponents/NovelChapter';
import Section from '../UpdateComponents/Section';

export default function UpdateSeries() {
  const { id } = useParams();
  const [childId, setChildId] = useState({});
  const [type, setType] = useState('');

  useEffect(() => {
    if (id.includes('novel')) {
      setType('novel');
    } else {
      setType('manga');
    }
  }, [id]);

  function onSubjectClick({ id, type }) {
    setChildId(id);
    setType(type);
  }

  return (
    <div className='w-full min-h-screen flex flex-row'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-start-1 col-span-2 w-full h-full overflow-auto border-r border-t-0 border-l-0 border-b-0  border-gray-400 border-solid pr-2'>
          <TreeView id={id} onSubjectClick={onSubjectClick} />
        </div>

        <div className='col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded my-20'>
          {(type === 'novel' || type === 'manga') && <Book id={id} type={type} />}
          {(type.includes('section')) && <Section id={childId} />}
          {(type === 'novel-chapter') && <NovelChapter id={childId} />}
          {(type === 'manga-chapter') && <MangaChapter id={childId} />}
        </div>
      </div>
    </div>
  )
}