import React, { useEffect, useState } from 'react';
import { novelApi } from '../api/api';

function JustRead() {
    const [novelHistory, setNovelHistory] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('username')) {
            novelApi.getHistory(localStorage.getItem('username')).then((res) => {
                if (res.data.result) {
                    setNovelHistory(res.data.result);
                } else {
                    setNovelHistory([]);
                }
            }).catch((err) => {
                console.log(err);
            });
        } else if (localStorage.getItem('readingNovel')) {
            setNovelHistory(JSON.parse(localStorage.getItem('readingNovel')).slice(0, 4));
        }
    }, []);

    // useEffect(() => {
    //     if (localStorage.getItem('username')) {
    //         mangaApi.getHistory(localStorage.getItem('username')).then((res) => {
    //             if (res.data.result) {
    //                 setMangaHistory(res.data.result);
    //             } else {
    //                 setMangaHistory([]);
    //             }
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //     } else if (localStorage.getItem('readingManga')) {
    //         setMangaHistory(JSON.parse(localStorage.getItem('readingManga')).slice(0, 4));
    //     }
    // }, []);

    return (
        <div className="flex flex-none w-full">
            <div className="flex flex-col">
                {novelHistory && novelHistory.map((item, index) => (
                    <div className="flex flex-col mb-2" key={index}>
                        <div className="flex">
                            <a href={`/novel/${item.novelId}`} className='hover:opacity-75'><img src={item.novelCover} className="object-cover w-17 h-24" alt="" /></a>
                            <div className="flex flex-col pl-3">
                                <a href={`/novel/${item.novelId}`} className='no-underline text-black hover:text-cyan-700'>
                                    <div className='font-bold line-clamp-1 space-x-3'>{item.novelTitle}</div>
                                </a>
                                <a href={`/novel-chapter/${item.chapterId}`} className='no-underline text-black hover:text-cyan-700'>
                                    <div className='line-clamp-2'>{item.chapterTitle}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JustRead;