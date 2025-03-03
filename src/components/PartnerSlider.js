import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Partner1 from "../images/partners/Partner1.svg";
import Partner2 from "../images/partners/Partner2.svg";
import Partner3 from "../images/partners/Partner3.svg";
import Partner4 from "../images/partners/Partner4.png";
import Partner5 from "../images/partners/Partner5.svg";
import Partner6 from "../images/partners/Partner6.svg";
import Partner7 from "../images/partners/Partner7.svg";
import Partner8 from "../images/partners/Partner8.png";

const PartnerSlider = () => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="w-full">
        <Slider {...settings}>
          {[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8].map((partner, index) => (
            <div key={index} className="h-[150px]">
              <Image 
                src={partner} 
                alt={`Partner ${index + 1}`} 
                className="mx-auto h-full object-contain max-w-[160px] opacity-50" 
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default PartnerSlider;
  