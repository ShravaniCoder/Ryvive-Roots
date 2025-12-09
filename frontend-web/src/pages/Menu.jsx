import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/MenuBanner.jpg";

const Menu = () => {
  return (
    <div>
      <div>
        {" "}
         <div className="relative">
          <img
            src={Banner}
            alt="Our Story Banner"
            className="w-full h-[50vh] md:h-[70vh] object-cover object-bottom-left"
          />
        
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-[#FEF7F0]/35 "></div>
        
          {/* Animated Text */}
          <motion.h1
            className="absolute text-[#243E36] font-semibold font-cinzel uppercase 
                       text-5xl md:text-7xl text-center top-1/2 left-1/2 
                       transform -translate-x-1/2 -translate-y-1/2"
            initial={{ x: -150, y: -150, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Our Menu
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
