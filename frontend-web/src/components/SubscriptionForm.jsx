import React, { useState } from "react";
import StepGoal from "./SubscriptionForm/Goal";
import StepPersonalInfo from "./SubscriptionForm/PersonalInfo";
import StepPlanOptions from "./SubscriptionForm/PlanOptions";


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 3;

  const [formData, setFormData] = useState({
    goal: "",
    age: "",
    plan: ""
  });

  const StepDisplay = () => {
    switch (currentStep) {
      case 1: return <StepGoal formData={formData} setFormData={setFormData} />;
      case 2: return <StepPersonalInfo formData={formData} setFormData={setFormData} />;
      case 3: return <StepPlanOptions formData={formData} setFormData={setFormData} />;
      default: return null;
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-green-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mb-6 font-semibold text-green-700">
        {progress.toFixed(2)}%
      </p>

      {/* Step Section */}
      <div className="min-h-[300px]">
        <StepDisplay />
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(currentStep - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Back
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-700 text-white rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
