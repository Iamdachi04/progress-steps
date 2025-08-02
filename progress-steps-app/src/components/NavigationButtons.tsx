import React from 'react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="navigation-buttons">
      <button 
        onClick={onPrev} 
        disabled={currentStep === 1}
        style={{ visibility: currentStep > 1 ? 'visible' : 'hidden' }}
      >
        Previous
      </button>

      {currentStep < totalSteps ? (
        <button onClick={onNext}>
          Next
        </button>
      ) : (
        <button onClick={onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;