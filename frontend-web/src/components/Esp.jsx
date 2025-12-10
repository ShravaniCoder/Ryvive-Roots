import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaCheck } from "react-icons/fa";

const FeatureCarousel = () => {
  const items = [
    "Clean Ingredients",
    "Dietitian-Approved",
    "Fresh Everyday",
    "Delivered Daily",
  ];

  return (
    <div className="w-full bg-[#FEF7F0] py-4">
      <div className="max-w-[900px] mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 1800 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },     // ✅ Phone = 1 box only
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {items.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="px-5 font-cinzel m-5 py-3 border-l-4 border-[#243E36] 
                bg-white/60 backdrop-blur-sm rounded-md shadow-sm 
                flex items-center gap-2 justify-center">
                <FaCheck className="text-[#243E36]" />
                {text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureCarousel;
