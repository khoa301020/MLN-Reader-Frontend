import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import eightySix from '../../assets/img/86.jpg'
import haibara from '../../assets/img/haibara.jpg'
import kaijuu8 from '../../assets/img/kaijuu8.jpg'
import neverland from '../../assets/img/neverland.jpg'
import priknight from '../../assets/img/priknight.jpg'
import re0 from '../../assets/img/re0.jpg'
import Shinja from '../../assets/img/Shinja.jpg'
import trash from '../../assets/img/trash.jpg'

function SlickCarousel () {
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
              <div>
                <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover ' src={eightySix} alt='eightySix' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={haibara} alt='haibara' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={kaijuu8} alt='kaijuu8' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={neverland} alt='neverland' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={priknight} alt='priknight' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={re0} alt='re0' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={Shinja} alt='Shinja' /></a>
              </div>
              <div>
              <a href='##' class='hover:opacity-75'><img class='w-44 h-64 object-cover' src={trash} alt='trash' /></a>
              </div>
            </Slider>
        </div>
     );
}

export default SlickCarousel ;