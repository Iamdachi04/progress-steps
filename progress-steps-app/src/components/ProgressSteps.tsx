import { useState } from "react";

import NavigationButtons from './NavigationButtons'; 

const ProgressSteps :React.FC= () => {


 const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", surname: "" });
    const totalsteps = 5;

    const handlenext = () => {
        if (currentStep < totalsteps) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    }
    
    function handleSubmit(): void {
        console.log("Submitting form with data:", formData);
    }

  return (
        <div className="progress-steps">

            <div className="step">
                <div className="step-number">{currentStep}</div>
            </div>
            
            <NavigationButtons
                currentStep={currentStep}
                totalSteps={totalsteps}
                onNext={handlenext}
                onPrev={handlePrev}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ProgressSteps;