import React from 'react';

export default function MangaVolume() {
    
    return (
        <div className='w-full min-h-screen'>
            <div className='w-full grid grid-cols-12 gap-12'>
                <div className='col-start-1 col-span-12 bg-white min-h-screen h-auto rounded mb-20 w-full'>
                    <div className='w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md'>
                        Thêm tập mới
                    </div>
                    <div className='px-8 py-10 min-h-screen'>
                        <div className='grid grid-cols-9 gap-4 content-center mb-4'>
                            <div className='text-right place-items-center my-2'>
                                <label className='text-right text-gray-900'>Tiêu đề<span className='text-red-500'>*</span></label>
                            </div>
                            <div className='col-span-7'>
                                <input type="text" name='title' className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required />
                            </div>
                        </div>

                        <div className='grid grid-cols-9 gap-4 content-center mb-4'>
                            <div className='text-right place-items-center my-2'>
                                <label className='text-right text-gray-900'>Ảnh bìa</label>
                            </div>
                            <div className='col-span-7'>
                                <input className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" id="file_input" type="file" />
                                <div className="flex flex-col items-center justify-center w-full h-64 mt-4 overflow-hidden bg-gray-100 border-2 border-dashed rounded-md">
                                </div>

                            </div>
                        </div>

                        <div className='grid grid-cols-9 gap-9 content-center mb-4'>

                            <div className='col-start-5 col-span-6'>
                                <button type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Lưu lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}