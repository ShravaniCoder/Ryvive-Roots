import React from "react";
import BgImage from "../assets/Bg.jpeg";
import LeftImage from "../assets/left-side.png";
import RightImage from "../assets/right-side.png";
import { FaLeaf, FaRecycle, FaHeart } from "react-icons/fa";
import "../index.css"; // make sure this file includes custom CSS (see below)
import { GiBerriesBowl } from "react-icons/gi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { LuCupSoda } from "react-icons/lu"; 
import { LiaHamburgerSolid } from "react-icons/lia";
import { FaBowlFood } from "react-icons/fa6";
import JuiceIcon from "../assets/juice-icon.webp";
import Bowl from "../assets/bowl.1.png";
import Sandwitch from "../assets/sandwi.png";
import Chaat from "../assets/chaat.png";
import Fresh from "../assets/freshness.png"
import Sustanable from "../assets/sustanable.png";
import Love from "../assets/love.png";


const FinalLanding = () => {
  return (
    <>
    <div></div>
 <div className="relative h-[38vh] md:h-[89vh] w-full flex items-center justify-center text-center overflow-hidden top-24">
  {/* Background Image */}
  <img
    src={BgImage}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (optional for better text visibility) */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Center Text */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-xl mt-10 sm:text-4xl md:text-7xl font-berkshire-swash font-bold text-white mb-4 leading-tight">
      Start your healthy journey,
      <span className="block">one bite at a time.</span>
    </h1>
    <button className="mt-6 px-6 py-3 bg-[#4CDF20] text-black font-semibold font-montserrat rounded-full hover:bg-[#ff6333] transition text-sm sm:text-base">
      See More
    </button>
  </div>
</div>

      <section className="relative max-w-6xl mx-auto px-4 md:px-8 py-40  text-gray-800">
        
      {/* Top Section */}
    <div className="text-center mx-auto max-w-4xl mb-12">
  <h2 className="text-2xl md:text-3xl font-berkshire-swash font-extrabold mb-4 text-[#243E36]">
    Our Philosophy
  </h2>
  <p className="text-gray-600 text-base md:text-lg font-inter leading-relaxed">
    At Ryvive Roots, we are dedicated to providing nourishment that is both
    authentic and sustainable. Our approach is rooted in a deep respect for
    nature and a commitment to quality, ensuring that every product not only
    tastes great but also supports your well-being and the planet’s health.
  </p>
</div>


      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:justify-start">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-200 p-5 rounded-full hover:shadow-md transition-shadow">
          <img src={Fresh} className="text-green-500 text-3xl mb-3 w-12 h-10" />
          <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Freshness</h4>
          <p className="text-gray-600 text-center text-sm font-inter">
            Our ingredients are sourced directly from local farms, ensuring peak
            freshness and flavor in every bite.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-200 p-5 rounded-full hover:shadow-md transition-shadow">
          <img src={Sustanable} className="text-green-500 text-3xl mb-3 w-12 h-10" />
          <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Sustainability</h4>
          <p className="text-gray-600 text-sm text-center font-inter">
            We are committed to sustainable practices, from eco-friendly packaging
            to reducing our carbon footprint.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white border border-gray-200 p-5 rounded-full hover:shadow-md transition-shadow">
          <img src={Love} className="text-green-500 text-3xl mb-3 w-10 h-10" />
          <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Authenticity</h4>
          <p className="text-gray-600 text-sm text-center font-inter">
            We believe in authentic nourishment, using time-honored recipes and
            natural ingredients to revive your roots.
          </p>
        </div>
      </div>

      <div className="py-10">
    <h3 className="text-2xl md:text-3xl font-berkshire-swash font-extrabold mb-4 text-[#243E36] text-center">
      What We Offer
    </h3>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:justify-start">

  {/* Card 1 - Healthy Juices */}
  <div className="flex flex-col items-center justify-center  border border-gray-200 rounded-full p-6 text-center hover:shadow-md transition-shadow">
    <img src={JuiceIcon} className="text-green-500 text-3xl mb-3 w-12 h-14" />
    <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Healthy Juices</h4>
    <p className="text-gray-600 text-sm font-inter">
      Freshly pressed, nutrient-rich, and naturally refreshing.
    </p>
  </div>

  {/* Card 2 - Healthy Salad */}
  <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-full p-6 text-center hover:shadow-md transition-shadow">
     <img src={Bowl} className="text-green-500 text-3xl mb-3 w-12 h-14" />
    <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Healthy Salad</h4>
    <p className="text-gray-600 text-sm font-inter">
      Wholesome greens packed with flavor and vitality.
    </p>
  </div>

  {/* Card 3 - Healthy Sandwich */}
  <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-full p-6 text-center hover:shadow-md transition-shadow">
     <img src={Sandwitch} className="text-green-500 text-3xl mb-3 w-12 h-10" />
    <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Healthy Sandwich</h4>
    <p className="text-gray-600 text-sm font-inter">
      Deliciously layered with fresh, wholesome ingredients.
    </p>
  </div>

  {/* Card 4 - Healthy Chaat */}
  <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-full p-6 text-center hover:shadow-md transition-shadow">
   <img src={Chaat} className="text-green-500 text-3xl mb-3 w-12 h-14" />
    <h4 className="font-semibold text-gray-900 mb-1 font-montserrat">Healthy Chaat</h4>
    <p className="text-gray-600 text-sm font-inter">
      A tasty twist of health and spice in every bite.
    </p>
  </div>

</div>


       <div className="flex justify-center gap-4 my-10">
        
          <button className="bg-gray-200 font-berkshire-swash  hover:bg-gray-300 text-[#243E36] font-semibold py-2 px-5 rounded-md transition">
            View Full Menu
          </button>
        </div>

  </div>
    </section>

    </>
  );
};

export default FinalLanding;
