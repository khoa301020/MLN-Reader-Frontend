function CommentSection() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className='grid grid-cols-10 gap-4'>

                            <div className='col-span-1 ml-3'>
                                <img className="min-w-6 min-h-6 w-12 h-12 max-w-12 max-h-12 object-cover rounded-full" src="https://i.imgur.com/euhIwLt.png" alt="Rounded avatar" />
                            </div>
                            <div className='col-span-9 bg-slate-100 mr-3 px-3 py-2 text-base'>
                                <div>
                                    <div className='nameUser font-bold mb-1' >Chris</div>
                                    <div className="commentUser">Đánh giá truyện sau khi đọc hết 3 phần chính truyện. Đánh giá 5 sao vì năng suất của team dịch cũng như nội dung truyện mới lạ. Đánh giá main: phát huy tinh thần tự nhục đến cảnh giới đăng phong tạo cực. Đặc biệt thích lo chuyện bao đồng và hay tỏ lòng thương hại nhưng bản thân chả làm cái mịa gì ra hồn. Ăn mày quá khứ trong nhiều trường hợp. Điểm cuốn hút của main làm tôi theo dõi không ngừng chính là mỗi khi tôi nghĩ main nó đã ngu hết mức có thể thì nó lại lòi ra cái ngu mới, luôn tạo cảm giác mới mẻ và k trùng lặp.</div>
                                    <div className='commentDate text-sm mt-3 text-gray-500'>3 ngày</div>
                                </div>
                            </div><div className='col-span-1 ml-3'>
                                <img className="min-w-6 min-h-6 w-12 h-12 max-w-12 max-h-12 object-cover rounded-full" src="https://i.docln.net/lightnovel/users/ua51333-a1037d00-ba81-4a0b-bd65-4866a7b7db29.jpg" alt="Rounded avatar" />
                            </div>
                            <div className='col-span-9 bg-slate-100 mr-3 px-3 py-2 text-base'>
                                <div className='nameUser font-bold mb-1' >Chris</div>
                                <div className="commentUser">Đánh giá truyện sau khi đọc hết 3 phần chính truyện. Đánh giá 5 sao vì năng suất của team dịch cũng như nội dung truyện mới lạ. Đánh giá main: phát huy tinh thần tự nhục đến cảnh giới đăng phong tạo cực. Đặc biệt thích lo chuyện bao đồng và hay tỏ lòng thương hại nhưng bản thân chả làm cái mịa gì ra hồn. Ăn mày quá khứ trong nhiều trường hợp. Điểm cuốn hút của main làm tôi theo dõi không ngừng chính là mỗi khi tôi nghĩ main nó đã ngu hết mức có thể thì nó lại lòi ra cái ngu mới, luôn tạo cảm giác mới mẻ và k trùng lặp.</div>
                                <div className='commentDate text-sm mt-3 text-gray-500'>3 ngày</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;