import React, { useState } from "react";
import { FaUser, FaHeartbeat } from "react-icons/fa";
import { IoMale } from "react-icons/io5";

export default function PersonalInfoLayout() {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(50);
  const [feet, setFeet] = useState(4);
  const [inches, setInches] = useState(9);
  const progress = 12.5;

  return (
    <div className=" bg-[#FEF7F0] py-10">
    <div className="w-full max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-xl  border">
      {/* Header */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <IoMale className="text-green-700 text-2xl" /> Personal Info
      </h2>

      {/* Gender Dropdown */}
      <div className="mt-6">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      {/* Age & Weight Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Age */}
        <div className="text-center">
          <FaUser className="text-gray-500 text-2xl mx-auto" />
          <p className="text-gray-500 text-sm mt-1">Your Age</p>
          <p className="font-semibold text-lg">{age}</p>

          <input
            type="range"
            min="10"
            max="80"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full accent-green-600 mt-3"
          />
        </div>

        {/* Weight */}
        <div className="text-center">
          <FaHeartbeat className="text-gray-500 text-2xl mx-auto" />
          <p className="text-gray-500 text-sm mt-1">Your Weight in Kgs</p>
          <p className="font-semibold text-lg">{weight}</p>

          <input
            type="range"
            min="20"
            max="150"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full accent-green-600 mt-3"
          />
        </div>
      </div>

      {/* Height Section */}
      <div className="mt-10">
        <p className="font-semibold text-lg">Your Height <span className="text-green-600">*</span></p>

        {/* Feet */}
        <div className="flex items-center gap-6 mt-6">
          <p className="text-gray-700 w-24">In Feet</p>
          <p className="font-semibold w-10 text-center">{feet}</p>
          <input
            type="range"
            min="3"
            max="8"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            className="w-full accent-green-600"
          />
          <div className="bg-green-700 text-white px-4 py-2 rounded-full font-bold">{feet}</div>
        </div>

        {/* Inches */}
        <div className="flex items-center gap-6 mt-6">
          <p className="text-gray-700 w-24">In Inches</p>
          <p className="font-semibold w-10 text-center">{inches}</p>
          <input
            type="range"
            min="0"
            max="11"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            className="w-full accent-green-600"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button className="px-6 py-3 bg-gray-200 rounded-md text-gray-700">↩</button>
        <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow">➜</button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-2 rounded-full mt-10">
        <div
          className="bg-green-700 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-center text-green-700 font-semibold mt-2">{progress}%</p>
    </div>
    </div>
  );
}