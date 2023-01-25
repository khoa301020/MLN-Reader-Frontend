function ListImageAndTitle({ books, prefix }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {books.map((book) => (
            <a key={book.id} href={prefix + book.id} className='group no-underline' >
              <div className='hover:opacity-75'>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover rounded-md object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-xs text-zinc-300 text-center hover:text-zinc-100 line-clamp-2">{book.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
}

export default ListImageAndTitle;