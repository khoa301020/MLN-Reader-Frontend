import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SlickCarousel(data) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <div class='gap-4 mx-auto lg:max-w-7xl'>
      <Slider {...settings}>
        {data.books.map((book, index) => (
          <div key={index}>
            <a href={'/novel/' + book.id} class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={book.cover} alt={book.title} /></a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarousel;