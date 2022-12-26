import React, { useEffect, useState } from 'react';
import { homeApi, mangaApi, novelApi } from '../api/api';

function JustRead({ type = 'both' }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (type === 'novel')
            if (localStorage.getItem('username')) {
                novelApi.getHistory(localStorage.getItem('username')).then((res) => {
                    if (res.data.result) {
                        setHistory(res.data.result);
                    } else {
                        setHistory([]);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } else if (localStorage.getItem('readingNovel')) {
                setHistory(JSON.parse(localStorage.getItem('readingNovel')).slice(0, 4));
            }
    }, [type]);

    useEffect(() => {
        if (type === 'manga')
            if (localStorage.getItem('username')) {
                mangaApi.getHistory(localStorage.getItem('username')).then((res) => {
                    if (res.data.result) {
                        setHistory(res.data.result);
                    } else {
                        setHistory([]);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } else if (localStorage.getItem('readingManga')) {
                setHistory(JSON.parse(localStorage.getItem('readingManga')).slice(0, 4));
            }
    }, [type]);

    useEffect(() => {
        if (type === 'both') {
            if (localStorage.getItem('username')) {
                homeApi.getHistory(localStorage.getItem('username')).then((res) => {
                    if (res.data.result) {
                        let books = res.data.result;
                        books.forEach((book) => {
                            if (book.chapterId.includes("_n")) {
                                book.type = "novel";
                            } else if (book.chapterId.includes("_m")) {
                                book.type = "manga";
                            }
                        });
                        setHistory(books);
                    } else {
                        setHistory([]);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } else if (localStorage.getItem('readingNovel') || localStorage.getItem('readingManga')) {
                let novel = localStorage.getItem('readingNovel') ? JSON.parse(localStorage.getItem('readingNovel')) : [];
                let manga = localStorage.getItem('readingManga') ? JSON.parse(localStorage.getItem('readingManga')) : [];
                let result = [...novel, ...manga];
                result.sort((a, b) => {
                    return new Date(b.lastRead) - new Date(a.lastRead);
                });
                setHistory(result.slice(0, 10));
            }
        }
    }, [type]);


    return (
        <div className="flex flex-none w-full">
            <div className="flex flex-col">
                {history && history.map((item, index) => (
                    <div className="flex flex-col mb-2" key={index}>
                        <div className="flex">
                            <a href={`/${item.type}/${item.type === 'novel' ? item.novelId : item.mangaId}`} className='hover:opacity-75'><img src={item.type === 'novel' ? item.novelCover : item.mangaCover} className="object-cover w-17 h-24" alt="" /></a>
                            <div className="flex flex-col pl-3">
                                <a href={`/${item.type}/${item.type === 'novel' ? item.novelId : item.mangaId}`} className='no-underline text-black hover:text-cyan-700'>
                                    <div className='font-bold line-clamp-1 space-x-3'>{item.type === 'novel' ? item.novelTitle : item.mangaTitle}</div>
                                </a>
                                <a href={`/${item.type}-chapter/${item.chapterId}`} className='no-underline text-black hover:text-cyan-700'>
                                    <div className='line-clamp-2'>{item.chapterTitle}</div>
                                </a>
                                {/* type of book */}
                                <div className="flex flex-col justify-center ml-auto">
                                    <div className="flex flex-row justify-center items-center px-2 py-1 text-xs font-bold text-white bg-cyan-700 rounded-full">
                                        {item.type === 'novel' ? 'Novel' : 'Manga'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JustRead;