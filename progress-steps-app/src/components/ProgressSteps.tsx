import { useState } from "react";

import NavigationButtons from './NavigationButtons'; 
import FinalStepForm from './FinalStepForm';
const ProgressSteps :React.FC= () => {


 const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", surname: "" });
    const totalsteps = 5;
    const renderStepContent = () => {
        switch (currentStep) {
            case 5:
                return <FinalStepForm formData={formData} setFormData={setFormData} />;
            default:
                return <div>{currentStep}</div>;
        }
    };

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

            <h1>Progress Steps</h1>
            
            <NavigationButtons
                currentStep={currentStep}
                totalSteps={totalsteps}
                onNext={handlenext}
                onPrev={handlePrev}
                onSubmit={handleSubmit}
            />
            <div className="step-content">
                {renderStepContent()}
            </div>
        </div>
    )
}

export default ProgressSteps;