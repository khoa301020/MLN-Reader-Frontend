import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function CommentList({ comments }) {
    return (
        <div className="flex bg-white divide-y rounded-lg flex-none w-full">
            <div className="flex flex-col space-y-2">
                {comments?.map((comment) => (
                    <>
                        <div className="flex flex-col pt-1">
                            <div className='font-bold text-md mb-3 line-clamp-1'>
                                <Link to={`/${comment.type}/${comment?.target.id}`} className='no-underline text-black hover:text-cyan-500 duration-300'>{comment?.target.title}</Link>
                            </div>
                            <div className="flex space-x-2">
                                <img src={comment?.user.avatar} className="rounded-full w-10 h-10" alt="" />
                                <div className="flex flex-col">
                                    <div className='font-bold text-sm line-clamp-1'>{comment?.user.name}</div>
                                    <div className='line-clamp-2'>{parse(comment?.content)}</div>
                                </div>
                            </div>
                            {/* Type of book */}
                            <div className='flex flex-row space-x-2 mt-3'>
                                <span className='text-xs text-gray-500'>{comment.type === 'novel' ? "Tiểu thuyết" : "Truyện tranh"}</span>
                            </div>
                        </div>
                        <div className='w-full h-px bg-gray-200'></div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default CommentList;