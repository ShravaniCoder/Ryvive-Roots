import React from 'react'
import { motion } from "framer-motion";
import Banner from "../assets/AbouttBg.jpg";

const Franchise = () => {
  return (
    <div> <div className="relative">
            <img
              src={Banner}
              alt="Our Story Banner"
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
    
            {/* Centered Animated Text */}
            <motion.h1
              className="absolute text-[#895C40] font-semibold font-cinzel uppercase text-5xl md:text-7xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ x: -150, y: -150, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              Franchise
            </motion.h1>
          </div></div>
  )
}

export default Franchise;