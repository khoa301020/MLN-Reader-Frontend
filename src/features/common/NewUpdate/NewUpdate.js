import React from 'react';
import { Pagination, Select } from 'antd';

export default class NewUpdate extends React.Component {
    render() {
        const handleChange = (value) => {
            console.log(`selected ${value}`);
          };
        return (
            <div className="wrapper" class='flex flex-col items-center w-full min-h-screen h-fit bg-gray-100'>
                <div className='container' class='w-full h-fit grid grid-cols-12 gap-8 justify-items-center'>
                    <div class='col-start-2 col-end-12 w-full h-fit bg-white p-5 rounded-md my-12'>
                        <div class='flex flex-row items-center'>
                            <div class='p-2 bg-black text-white font-bold uppercase'>Tiểu thuyết</div>
                            <div class='ml-3 font-bold uppercase'>Mới cập nhật</div>
                        </div>
                        <div class='w-full h-1 bg-black mb-5'></div>
                        <div class='flex justify-end mb-5'>
                        <Select
                            defaultValue="all"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                value: 'all',
                                label: 'Tất cả',
                                },
                                {
                                value: 'novel',
                                label: 'Tiểu thuyết',
                                },
                                {
                                value: 'manga',
                                label: 'Truyện tranh',
                                },
                            ]}
                        />
                        </div>
                        <div class='grid grid-cols-7 gap-4 gap-y-14'>
                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>


                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>

                            <a href='##' class='text-black no-underline'>
                                <div class='w-36 h-52'>
                                    <img class='w-36 h-52 object-cover rounded-md hover:opacity-90' src='https://m.media-amazon.com/images/I/81EQ9rQnQjL.jpg' alt=''  />
                                    <div class='block -mt-7 absolute bg-black bg-opacity-50 w-36 py-1 rounded-b-md'>
                                        <div class='opacity-100 line-clamp-1 text-white font-bold text-xs px-2'>
                                            Chương 10 Id est sint dolor dolor aliquip commodo.
                                        </div>
                                    </div>
                                    <div class='line-clamp-2 font-bold hover:text-cyan-500 duration-300'>Suki Na no Ni Kokuttara Futago no Imouto ga Omake de Tsuitekita</div>
                                </div>
                            </a>
                        </div>
                        <div class='flex justify-center my-10 pt-14'><Pagination defaultCurrent={1} total={50} /></div>
                    </div>
                </div>
            </div>
        );
    }
}