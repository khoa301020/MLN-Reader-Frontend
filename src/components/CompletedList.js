function ListImageAndTitle({ books }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-8">
          {books?.map((book) => (
            <a key={book.id} href={`${book.type}/${book.id}`} className='group no-underline' >
              <div className='hover:opacity-75'>
                <img
                  src={book.cover}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-sm text-gray-700 text-center hover:opacity-75 line-clamp-2">{book.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
}


export default ListImageAndTitle;