import { useState } from "react";

const ProgressSteps :React.FC= () => {
    const [currentStep, setCurrentStep] = useState(1);
    
    const totalsteps = 5;

    const handlestepclick = ()=>{
        if (currentStep < totalsteps) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep);
        }
    }
    
    
    return (
        <div className="progress-steps">
           <div className="step">
            <div className="step-number">{currentStep}</div>

           </div>
              <button onClick={handlestepclick}></button>

        </div>
    )

}

export default ProgressSteps;