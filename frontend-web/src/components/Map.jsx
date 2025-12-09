import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.png";

const Map = () => {
     const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,           // Smooth continuous motion
    slidesToShow: 5,       // Show 5 images (like screenshot)
    slidesToScroll: 1,     // Move one image at a time
    autoplay: true,
    autoplaySpeed: 1000,   // Delay between each move
    cssEase: "ease",       // Smooth easing
    pauseOnHover: false,
    swipe: false,          // disable manual swipe (optional)
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
  <>
  {/* <div className='h-[50vh]'>
   <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.466816479228!2d73.0912687!3d19.2184767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ced2c032b3%3A0x2f8d9decfaf7712e!2sRevive%20Roots!5e0!3m2!1sen!2sin!4v1762864329336!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
        </div> */}

            <section className="overflow-hidden">
      <Slider {...settings} className="w-full">
        {[img1, img2, img3, img4, img5, img1, img2, img3].map((img, i) => (
          <div key={i} className="!p-0"> {/* No gap between slides */}
            <img
              src={img}
              alt={`Food ${i}`}
              className="w-full h-[350px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  </>
  )
}

export default Map;