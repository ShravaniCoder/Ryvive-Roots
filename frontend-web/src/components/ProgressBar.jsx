import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Main Progress Container */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        {/* Filled Part */}
        <div
          className="h-full bg-green-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Text */}
      <p className="text-center mt-2 text-green-700 font-medium">
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default ProgressBar;
