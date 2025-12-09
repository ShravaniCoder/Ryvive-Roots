import React from 'react'
import { motion } from "framer-motion";
import Banner from "../assets/bannerSSS.jpg";
import SubscriptionTypes from '../components/SubscriptionsTypes';
import FeatureCarousel from '../components/Esp';
import WhySubscribe from '../components/WhySubscription';
import HowItWorks from '../components/HowWorks';
import SubscriptionPlan from '../components/SubscriptionPlan';
import Coming from "../assets/Coming.jpg";

const Subscription = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <img
          src={Banner}
          alt="Subscription Banner"
          className="w-full h-[95vh] md:h-[65vh] object-cover object-top-left "
        />

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-[#FEF7F0]/60"></div>

        {/* Animated Text */}
     <motion.div
  className="absolute mt-10
             top-1/2 left-[4%] 
             transform -translate-y-1/2 
             text-[#243E36] font-cinzel 
             px-4 space-y-10 w-[90%] md:w-[50%] text-left"
  initial={{ x: -150, y: -150, opacity: 0 }}
  animate={{ x: 0, y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {/* Heading */}
  <h1 className="text-3xl md:text-5xl font-semibold uppercase leading-tight">
    Healthy Made Effortless
  </h1>

  {/* Subheading */}
  <p className="text-base font-semibold text-black md:text-2xl font-light max-w-[70%]">
    Daily salads & juices, prepared fresh and delivered to your door.
  </p>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-10">
   
     <button
  className="relative px-8 py-3 uppercase rounded-full cursor-pointer border-2 border-[#243E36] text-[#243E36] text-lg 
  font-medium
  hover:bg-[#243E36] hover:text-white hover:font-semibold
  transition
  before:rounded-full
  before:absolute before:inset-0 before:-m-2 
  before:border-2 before:border-[#243E36] before:content-['']
  hover:before:-m-3 hover:before:border-[1px]"
>
 Start Your Plan
</button>

 <button
  className="relative px-8 py-3 uppercase rounded-full cursor-pointer border-2 border-[#243E36] text-[#243E36] text-lg 
  font-medium
  hover:bg-[#243E36] hover:text-white hover:font-semibold
  transition
  before:rounded-full
  before:absolute before:inset-0 before:-m-2 
  before:border-2 before:border-[#243E36] before:content-['']
  hover:before:-m-3 hover:before:border-[1px]"
>
  Try 3-Day Trial
</button>


  </div>

 
  
</motion.div>



      </div>

       <FeatureCarousel />
        <WhySubscribe />
        <HowItWorks />
         {/* <SubscriptionPlan /> */}
<div className='px-6 md:px-20 bg-[#FEF7F0]'>
  <div className="w-full flex flex-col md:flex-row items-center justify-center md:items-center gap-6 p-6">

    {/* LEFT SIDE : IMAGE WITH FULL OVERLAY */}
    <div className="relative w-full md:w-1/2">
      <img
        src={Coming}
        alt="Season Greeting"
        className="w-full h-[60vh] object-cover"
      />

      {/* FULL OVERLAY */}
      <div className="absolute inset-0 bg-black/75 flex items-center justify-center">

        {/* WHITE BORDER FULL SIZE BUT LITTLE INSET */}
        <div className="w-[70%] h-[50%] border-8 border-white  flex items-center justify-center">
          <h1 className="text-white text-4xl font-manrope sm:text-5xl font-bold uppercase text-center leading-snug">
           Subscription <br /> are one the way
          </h1>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE : ENQUIRY FORM */}
    <div className="w-full md:w-1/2 font-merriweather bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

       <button
  type="submit"
  className="px-6 py-2 bg-[#895C40] hover:bg-[#895C40] text-white rounded-lg font-semibold"
>
  Submit
</button>

      </form>
    </div>

  </div>
</div>



      <SubscriptionTypes />
      
    </div>
  )
}

export default Subscription;
