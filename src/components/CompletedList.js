const bookInfos = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil Ut sit magna ad velit laboris aliqua reprehenderit id adipisicing occaecat esse eu eu irure.',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil Ut sit magna ad velit laboris aliqua reprehenderit id adipisicing occaecat esse eu eu irure.',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Machined Mechanical Pencil Ut sit magna ad velit laboris aliqua reprehenderit id adipisicing occaecat esse eu eu irure.',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 8,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc: 'https://t1.daumcdn.net/cfile/tistory/2229274154B1FFFD13',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
  ];
  
  function ListImageAndTitle() {
      return (
        <div>
          <div class="mx-auto max-w-2xl lg:max-w-7xl">
            <div class="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-8">
              {bookInfos.map((bookInfo) => (
                <a key={bookInfo.id} href={bookInfo.href} className="group" class='no-underline' >
                  <div class='hover:opacity-75'>
                    <img
                      src={bookInfo.imageSrc}
                      alt={bookInfo.imageAlt}
                      class="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 class="mt-1 text-sm text-gray-700 text-center hover:opacity-75 line-clamp-2">{bookInfo.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
  
      );
  }
  
  
  export default ListImageAndTitle;