function TableListChapter({ chapters, prefix }) {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <tbody key="tbody">
                {chapters.map((chapter, index) => {
                  return (
                    <tr class="bg-white hover:bg-gray-100" key={index}>
                      <td className="ChapterName" colspan="3" class="text-sm text-gray-900 font-light px-2 py-2 text-left">
                        <a href={prefix + chapter.id} class='no-underline text-black line-clamp-1'>{chapter.title}</a>
                      </td>
                      <td className="ChapterDate" class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-right">
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