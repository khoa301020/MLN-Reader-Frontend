function TableListChapter({ chapters, prefix }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <tbody key="tbody">
                {chapters.map((chapter, index) => {
                  return (
                    <tr className="bg-white hover:bg-gray-100" key={index}>
                      <td colSpan="3" className="ChapterName text-sm text-gray-900 font-light px-2 py-2 text-left">
                        <a href={prefix + chapter.id} className='no-underline text-black line-clamp-1'>{chapter.title}</a>
                      </td>
                      <td className="ChapterDate text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-right">
                        {new Date(chapter.lastUpdate).toLocaleDateString('vi-VN', {
                          month: '2-digit', day: '2-digit', year: 'numeric'
                        })}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableListChapter;