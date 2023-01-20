function TableListChapter({ chapters, prefix }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {/* <table className="min-w-full">
              <tbody key="tbody">
                {chapters.map((chapter, index) => {
                  return (
                    <tr className="bg-zinc-800 hover:bg-sky-900 rounded-md" key={index}>
                      <td colSpan="3" className="ChapterName text-sm text-zinc-400 font-light px-2 py-2 text-left rounded-md">
                        <a href={prefix + chapter.id} className='no-underline text-zinc-300 hover:text-zinc-100 duration-300 line-clamp-1'>{chapter.title}</a>
                      </td>
                      <td className="ChapterDate text-sm text-zinc-100 font-light px-2 py-2 whitespace-nowrap text-right rounded-md">
                        {new Date(chapter.lastUpdate).toLocaleDateString('vi-VN', {
                          month: '2-digit', day: '2-digit', year: 'numeric'
                        })}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table> */}
            <div className="min-w-full">
              <div key="tbody">
                {chapters.map((chapter, index) => {
                  return (
                    <div className="flex flex-row justify-between bg-zinc-800 border border-solid border-transparent hover:border-sky-500 hover hover:bg-sky-900 duration-200 rounded-md cursor-pointer" key={index}>
                      <div className="ChapterName text-sm text-zinc-300 font-light px-2 py-2 text-left rounded-md">
                        <a href={prefix + chapter.id} className='no-underline text-zinc-300 hover:text-zinc-100 duration-300 line-clamp-1'>{chapter.title}</a>
                      </div>
                      <div className="ChapterDate text-sm text-zinc-300 font-light px-2 py-2 whitespace-nowrap text-right rounded-md">
                        {new Date(chapter.lastUpdate).toLocaleDateString('vi-VN', {
                          month: '2-digit', day: '2-digit', year: 'numeric'
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableListChapter;