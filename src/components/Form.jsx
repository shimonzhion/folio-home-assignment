import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    favoriteColor: '',
    dreamDestination: '',
    fearedAnimal: '',
    travelBudget: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const steps = [
    <Step1
      formData={formData}
      handleInputChange={handleInputChange}
      nextStep={() => setCurrentStep(currentStep + 1)}
    />,
    <Step2
      formData={formData}
      handleInputChange={handleInputChange}
      prevStep={() => setCurrentStep(currentStep - 1)}
    />,
  ];

  return (
    <div className='form-container'>
      <h3>
        Step {currentStep + 1} of {steps.length}
      </h3>
      {steps[currentStep]}
    </div>
  );
};

export default MultiStepForm;
