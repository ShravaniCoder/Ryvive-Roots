import React from "react";
import { motion } from "framer-motion";
import Welness from "../assets/analytic.png"
import Manage from "../assets/Manage.png"
import Clinic from "../assets/Clinic.png"

const Consultation = () => {
  const cards = [
  {
    title: "Wellness",
    desc: "Comprehensive plans to enhance your well-being, boost energy, and foster a healthy lifestyle.",
    img: Welness, // your image path
  },
  {
    title: "Weight Management",
    desc: "Personalized and sustainable strategies for healthy weight loss or gain, tailored to your goals.",
    img: Manage,
  },
  {
    title: "Clinical Specificity",
    desc: "Targeted nutritional therapy to manage and support conditions like diabetes, PCOD, and more.",
    img: Clinic,
  },
];


  return (
    <div>
      {/* Banner */}
      <div className="h-[20vh] md:h-[40vh] bg-[#895C40] mt-28  flex items-center justify-center relative">
        <motion.h1
          className="absolute text-[#FEF7F0] font-cinzel font-semibold uppercase text-3xl md:text-7xl"
          initial={{ x: -150, y: -150, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Consultation
        </motion.h1>
      </div>

      {/* Main Section */}
      <div className="w-full bg-[#FEF7F0] py-16">
        <div className="max-w-6xl mx-auto px-4">

          <p className="text-center text-gray-600 mt-5 text-3xl font-manrope">
            Achieve your health goals with personalized nutrition plans designed just for you.
          </p>

          {/* Dietician About */}
          <div className="mt-12 text-center max-w-3xl mx-auto font-manrope">
            <h2 className="text-2xl font-semibold text-gray-900">
              About Our Dietician, Ms. Kanak Bajaj
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Ms. Kanak Bajaj is a certified dietician with over a decade of experience. She believes in a holistic approach, creating sustainable plans that fit your lifestyle.
            </p>
          </div>

          {/* Programme Structure */}
          <div className="mt-16 text-center font-manrope">
            <h2 className="text-3xl font-semibold text-[#895C40]">
              Our Programme Structure
            </h2>
            <p className="text-gray-600 text-xl mt-2">
              We offer specialized programmes tailored to your unique health needs.
            </p>
          </div>
{/* Pyramid Cards */}
<div className="font-manrope mt-16 flex flex-col items-center gap-10">

  {/* Top Card */}
  <motion.div
    className="w-full md:w-1/3"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <motion.div
      className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="flex items-center justify-center"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={cards[0].img}
          alt={cards[0].title}
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      <h3 className="mt-6 text-xl font-semibold text-[#895C40]">{cards[0].title}</h3>
      <p className="text-gray-600 mt-3">{cards[0].desc}</p>

      <button className="text-[#243E36] cursor-pointer font-semibold mt-4">
        See more →
      </button>
    </motion.div>
  </motion.div>

  {/* Bottom Row (2 cards) */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full">

    {cards.slice(1).map((card, i) => (
      <motion.div
        key={i}
        className="w-full md:w-1/3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
      >
        <motion.div
          className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-20 h-20 object-contain"
            />
          </motion.div>

          <h3 className="mt-6 text-xl font-semibold text-[#895C40]">{card.title}</h3>
          <p className="text-gray-600 mt-3">{card.desc}</p>

          <button className="text-[#243E36] cursor-pointer font-semibold mt-4">
            See more →
          </button>
        </motion.div>
      </motion.div>
    ))}

  </div>
</div>





        </div>
      </div>
    </div>
  );
};

export default Consultation;
