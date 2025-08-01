import { useState } from "react";

const ProgressSteps :React.FC= () => {
    const [currentStep, setCurrentStep] = useState(1);
    
    const totalsteps = 5;

    const handlenext = ()=>{
        if (currentStep < totalsteps) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep);
        }
    }

    const handlePrev=()=>{
        if(currentStep>1){
            setCurrentStep(currentStep-1);
        }
        else{
            setCurrentStep(currentStep);
        }
    }
    
    
    return (
        <div className="progress-steps">
           <div className="step">
            <div className="step-number">{currentStep}</div>

           </div>
              <button onClick={handlenext}>click me to increment</button>
              <button onClick={handlePrev}>click me to decrement</button>
        </div>
    )

}

export default ProgressSteps;