function ListImageAndTitle({ books, prefix }) {
  return (
    <div>
      <div class="mx-auto max-w-2xl lg:max-w-7xl">
        <div class="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {books.map((book) => (
            <a key={book.id} href={prefix + book.id} className="group" class='no-underline' >
              <div class='hover:opacity-75'>
                <img
                  src={book.cover}
                  alt={book.title}
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-1 text-sm text-gray-700 text-center hover:opacity-75 line-clamp-2">{book.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>

  );
}

export default ListImageAndTitle;