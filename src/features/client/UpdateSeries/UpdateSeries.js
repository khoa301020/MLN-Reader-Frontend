import React from 'react'
import CommentForm from '../../../components/CommentForm'
import TreeView from '../../../components/TreeView'

export default class UpdateSeries extends React.Component {
  render() {
        return (
            <div className='w-full min-h-screen flex flex-row'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-start-1 col-span-2 w-full h-full overflow-auto border-r border-t-0 border-l-0 border-b-0  border-gray-400 border-solid pr-2'>
                        <TreeView />
                    </div>


                    <div className='col-start-3 col-span-8 bg-white min-h-screen h-auto border-solid border border-gray-400 rounded my-20'>
                        <div className='w-full h-auto p-3 bg-gray-100 text-black font-semibold rounded-t-md'>
                            Chỉnh sửa truyện
                        </div>
                        <div className='px-8 py-10 min-h-screen'>
                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Tiêu đề<span className='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6'>
                                <input type="text" class="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label class='text-right text-gray-900 '>Tên khác</label>
                                </div>
                                <div className='col-span-6'>
                                <input type="text" className="bg-white placeholder-gray-400 border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Ngăn cách nhiều tên bằng dấu chấm phẩy ;' required/>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Tác giả<span className='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6'>
                                <input type="text" className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Hoạ sĩ</label>
                                </div>
                                <div className='col-span-6'>
                                <input type="text" className="bg-white border border-solid border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Ảnh bìa</label>
                                </div>
                                <div className='col-span-6'>
                                    <input class="block w-full text-sm py-2 text-gray-900 border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                                </div>
                            </div>

                            <div class='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Loại truyện<span className='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6'>
                                    <select id="TheLoai" class="w-fit bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="Novel">Tiểu thuyết</option>
                                        <option value="Managa">Truyện tranh</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Thể loại<span clasName='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6 my-2'>
                                    <div className='grid grid-cols-4 gap-x-4'>
                                        <div className="flex items-center mb-4">
                                            <input id="Action" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label for="Action" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input id="Action" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label for="Action" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input id="Action" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label for="Action" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input id="Action" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label for="Action" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input id="Action" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label for="Action" className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Different Social Status</label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label className='text-right text-gray-900 '>Loại truyện<span class='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6'>
                                    <CommentForm />
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                <div className='col-span-2 text-right place-items-center my-2'>
                                    <label class='text-right text-gray-900 '>Tình trạng dịch<span class='text-red-500'>*</span></label>
                                </div>
                                <div className='col-span-6'>
                                    <select id="TheLoai" className="w-fit bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="Novel">Đang tiến hành</option>
                                        <option value="Managa">Tạm ngưng</option>
                                        <option value="Managa">Đã hoàn thành</option>
                                    </select>
                                </div>
                            </div>

                            <div className='grid grid-cols-9 gap-9 content-center mb-4'>
                                
                                <div className='col-start-3 col-span-6'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 border border-solid border-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lưu lại</button>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
                
            </div>
            
        )
    }
}