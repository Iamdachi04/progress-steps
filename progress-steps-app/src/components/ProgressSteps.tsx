import { useState } from "react";
import FinalStepForm from "./FinalStepForm";

const ProgressSteps :React.FC= () => {
    const [isPrevVisible , setIsPrevVisible] = useState(false);
    const [isNextVisible , setIsNextVisible] = useState(true);
    const [isSubmitVisible , setIsSubmitVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
    });
    const totalsteps = 5;

    const handlenext = ()=>{
        if (currentStep < totalsteps) {
            setCurrentStep(currentStep + 1);
            setIsSubmitVisible(false);
            setIsPrevVisible(true);
        } else {
            setIsNextVisible(false);
            setIsPrevVisible(true);
            setIsSubmitVisible(true)
            setCurrentStep(currentStep);
        }
    }

    const handlePrev=()=>{
        if(currentStep>1){
            setCurrentStep(currentStep-1);
            setIsNextVisible(true);
        }
        else if(currentStep===1){
            setIsPrevVisible(false);
            setIsNextVisible(true);
            setCurrentStep(currentStep);
        }
    }

    const handleRestart = ()=>{
        setCurrentStep(1);
        setIsNextVisible(true);
        setIsPrevVisible(false);
        setIsSubmitVisible(false);
    }
    
    
    function handleSubmit(): void {
        setIsNextVisible(false);
        setIsPrevVisible(false);
        setIsSubmitVisible(false);
    }

    return (
        <div className="progress-steps">
           <div className="step">
            <div className="step-number">{currentStep}</div>

           </div>
           {currentStep === totalsteps ? (
              <FinalStepForm formData={formData} setFormData={setFormData} />
            ) : (
              <div>
                This is the content for Step {currentStep}.
              </div>
            )}
              {isNextVisible &&  currentStep !== 5 && (
                 <button onClick={handlenext}>{isNextVisible && "click me to increment"}</button>
              )}
             
              {isPrevVisible &&  currentStep !== 1 && (
                  <button onClick={handlePrev}>click me to decrement</button>
              )}
              {isSubmitVisible ||  currentStep === 5 &&(
                  <button onClick={handleSubmit}>click me to submit</button>
              )}
                {currentStep === 5 &&  (
                    <button onClick={handleRestart}>click me to restart</button>
                )}
        </div>
    )

}

export default ProgressSteps;