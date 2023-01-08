import { Checkbox, Pagination, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { homeApi } from '../../../api/api';

export default function SearchArea() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState([]);

  const [novels, setNovels] = useState([]);
  const [filteredNovels, setFilteredNovels] = useState([]);
  const [displayNovels, setDisplayNovels] = useState([]);
  const [novelPage, setNovelPage] = useState(1);
  const [novelPageSize, setNovelPageSize] = useState(10);

  const [mangas, setMangas] = useState([]);
  const [filteredMangas, setFilteredMangas] = useState([]);
  const [displayMangas, setDisplayMangas] = useState([]);
  const [mangaPage, setMangaPage] = useState(1);
  const [mangaPageSize, setMangaPageSize] = useState(10);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    homeApi.getTags().then((res) => {
      const allTags = res.data.result;
      allTags.unshift({ code: 'all', name: 'Tất cả' });
      setTags(allTags);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const keyword = searchParams.get('keyword');
    if (!keyword) return toast.error('Keyword is required');
    console.log(keyword);
    homeApi.getSearch(keyword).then((res) => {
      setNovels(res.data.result.filter((book) => book.type === 'novel'));
      setMangas(res.data.result.filter((book) => book.type === 'manga'));
      setFilteredNovels(res.data.result.filter((book) => book.type === 'novel'));
      setFilteredMangas(res.data.result.filter((book) => book.type === 'manga'));
      setLoading(false);
    });
  }, [searchParams]);

  useEffect(() => {
    setDisplayNovels(filteredNovels.slice((novelPage - 1) * novelPageSize, novelPage * novelPageSize));
  }, [novelPage, filteredNovels, novelPageSize]);

  useEffect(() => {
    setDisplayMangas(filteredMangas.slice((mangaPage - 1) * mangaPageSize, mangaPage * mangaPageSize));
  }, [mangaPage, filteredMangas, mangaPageSize]);

  function handleTagChange(checkedValues) {
    if (checkedValues.includes('all')) {
      setFilteredNovels(novels);
      setFilteredMangas(mangas);
    } else if (checkedValues.length === 0) {
      setFilteredNovels([]);
      setFilteredMangas([]);
    } else {
      setFilteredNovels(
        novels.filter((book) => {
          // check if book match all tag
          return checkedValues.every((tag) => book.tags.some((bookTag) => bookTag.code === tag));
        }),
      );
      setFilteredMangas(
        mangas.filter((book) => {
          // check if book match all tag
          return checkedValues.every((tag) => book.tags.some((bookTag) => bookTag.code === tag));
        }),
      );
    }
    setNovelPage(1);
    setMangaPage(1);
  }

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <div className="wrapper" class="flex flex-col items-center w-full min-h-screen h-fit bg-gray-100">
          <div className="container" class="w-full h-fit grid grid-cols-12 gap-8 justify-items-center">
            <div class="col-start-2 col-end-10 w-full h-fit bg-white p-5 rounded-md my-12">
              <div class="flex flex-row items-center">
                <div class="p-2 bg-black text-white font-bold uppercase">{novels.length}</div>
                <div class="ml-3 font-bold uppercase">Tiểu thuyết</div>
              </div>
              <div class="w-full h-1 bg-black mb-5"></div>
              <div class="grid grid-cols-2 gap-4">
                {displayNovels?.map((novel, index) => (
                  <div class="grid grid-cols-4 gap-5 w-full h-36 rounded-md shadow" key={index}>
                    <div class="col-span-1 max-w-full">
                      <a href={`/${novel.type}/${novel.id}`}>
                        <img class="w-24 h-36 object-cover rounded-l-md" src={novel.cover} alt="" />
                      </a>
                      <div class="w-24 block absolute -mt-7 bg-black bg-opacity-50 py-1 rounded-bl-md hover:bg-opacity-100 cursor-pointer">
                        <a
                          href={`/novel-chapter/${novel.lastChapter?.id}`}
                          class="overflow-hidden opacity-100 line-clamp-1 text-white font-bold text-xs px-2"
                        >
                          {novel.lastChapter?.title}
                        </a>
                      </div>
                    </div>
                    <div class="col-span-3 py-3 pr-4">
                      <a
                        href={`/${novel.type}/${novel.id}`}
                        class="text-md font-bold line-clamp-2 no-underline text-black hover:text-cyan-500 duration-300 mb-2"
                      >
                        {novel.title}
                      </a>
                      <p class="text-xs line-clamp-3 text-black text-justify">{novel.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div class="flex justify-center my-10">
                <div class="flex justify-center my-10 pt-14">
                  <Pagination
                    defaultCurrent={novelPage}
                    defaultPageSize={novelPageSize}
                    onChange={(value) => setNovelPage(value)}
                    total={filteredNovels.length}
                    showSizeChanger
                    showQuickJumper
                    pageSizeOptions={[4, 10, 20]}
                    onShowSizeChange={(current, size) => setNovelPageSize(size)}
                  />
                </div>
              </div>
            </div>

            <div class="col-start-2 col-end-10 w-full h-fit bg-white p-5 rounded-md">
              <div class="flex flex-row items-center">
                <div class="p-2 bg-black text-white font-bold uppercase">{mangas.length}</div>
                <div class="ml-3 font-bold uppercase">Truyện tranh</div>
              </div>
              <div class="w-full h-1 bg-black mb-5"></div>
              <div class="grid grid-cols-2 gap-4">
                {displayMangas?.map((manga, index) => (
                  <div class="grid grid-cols-4 gap-5 w-full h-36 rounded-md shadow" key={index}>
                    <div class="col-span-1 max-w-full">
                      <a href={`/${manga.type}/${manga.id}`}>
                        <img class="w-24 h-36 object-cover rounded-l-md" src={manga.cover} alt="" />
                      </a>
                      <div class="w-24 block absolute -mt-7 bg-black bg-opacity-50 py-1 rounded-bl-md hover:bg-opacity-100 cursor-pointer">
                        <a
                          href={`/novel-chapter/${manga.lastChapter?.id}`}
                          class="overflow-hidden opacity-100 line-clamp-1 text-white font-bold text-xs px-2"
                        >
                          {manga.lastChapter?.title}
                        </a>
                      </div>
                    </div>
                    <div class="col-span-3 py-3 pr-4">
                      <a
                        href={`/${manga.type}/${manga.id}`}
                        class="text-md font-bold line-clamp-2 no-underline text-black hover:text-cyan-500 duration-300 mb-2"
                      >
                        {manga.title}
                      </a>
                      <p class="text-xs line-clamp-3 text-black text-justify">{manga.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div class="flex justify-center my-10">
                <div class="flex justify-center my-10 pt-14">
                  <Pagination
                    defaultCurrent={mangaPage}
                    defaultPageSize={mangaPageSize}
                    onChange={(value) => setMangaPage(value)}
                    total={filteredMangas.length}
                    showSizeChanger
                    showQuickJumper
                    pageSizeOptions={[4, 10, 20]}
                    onShowSizeChange={(current, size) => setMangaPageSize(size)}
                  />
                </div>
              </div>
            </div>

            <div class="col-span-2 w-full h-fit bg-white rounded-md my-12 pb-2">
              <div class="text-md font-semibold mb-3 px-5 pt-5">Thể loại</div>
              <Checkbox.Group style={{ width: '100%' }} onChange={handleTagChange} defaultValue={['all']}>
                <div class="flex flex-col items-baseline">
                  {tags.map((tag, index) => (
                    <Checkbox value={tag.code} class="text-sm font-semibold text-black mb-2" key={index}>
                      {tag.name}
                    </Checkbox>
                  ))}
                </div>
              </Checkbox.Group>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
}
