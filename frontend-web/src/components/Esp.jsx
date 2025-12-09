import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa";

const FeatureCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const items = [
    "Clean Ingredients",
    "Dietitian-Approved",
    "Fresh Everyday",
    "Delivered Daily"   // ⭐ New added item
  ];

  return (
    <div className="w-full bg-[#FEF7F0] py-4">
      <div className="max-w-[900px] mx-auto">
        <Slider {...settings}>
          {items.map((text, index) => (
            <div key={index} className="flex justify-center">
              <div className="px-5 font-cinzel m-5 py-3 border-l-4 border-[#243E36] 
                bg-white/60 backdrop-blur-sm rounded-md shadow-sm 
                flex items-center gap-2">
                <FaCheck className="text-[#243E36]" />
                {text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCarousel;
