Project Setup & Initialization
[X] Initialize a new React project using Vite (vite create progress-steps-app --template react).

[X] Install necessary dependencies for a test runner (e.g., Vitest, React Testing Library).

[X] Set up the basic project structure and files (src/components/, src/utils/, etc.).

Core Component Development
[X] Create src/components/ProgressSteps.jsx as the main container component.

[X] Implement useState hooks for currentStep, submissions, and formData in ProgressSteps.jsx.

[X] Create src/components/NavigationButtons.jsx.

[X] Create src/components/ProgressBar.jsx.

[X] Create src/components/FinalStepForm.jsx for the input fields.

[X] Create src/components/SubmissionList.jsx to display submitted data.

[X] Create src/components/RestartButton.jsx.

Logic & State Management
[X] In ProgressSteps.jsx, define handleNext function to increment currentStep (max 5).

[X] In ProgressSteps.jsx, define handlePrev function to decrement currentStep (min 1).

[ ] In ProgressSteps.jsx, define handleSubmit function to process form data.

[ ] In ProgressSteps.jsx, define handleRestart function to reset currentStep to 1 and clear formData.

[ ] In FinalStepForm.jsx, implement controlled components for name and surname inputs that update parent formData state.

UI & Styling
[ ] In ProgressSteps.jsx, conditionally render the FinalStepForm only when currentStep === 5.

[ ] In ProgressBar.jsx, implement dynamic styling based on the currentStep prop to show active, complete, and future steps.

[ ] In NavigationButtons.jsx, implement logic to disable the "Prev" button on step 1.

[ ] In NavigationButtons.jsx, implement logic to change the "Next" button text to "Submit" on step 5.

[ ] In NavigationButtons.jsx, implement logic to disable the "Submit" button on step 5.

[ ] In SubmissionList.jsx, implement mapping over the submissions array to display each entry.

[ ] In ProgressSteps.jsx, place the RestartButton above the SubmissionList component.

Validation & Error Handling
[ ] Create src/utils/validation.js and export a validateName function.

[ ] The validateName function should return true for English alphabetical characters (a-z, A-Z) only.

[ ] Update handleSubmit in ProgressSteps.jsx to use validateName on both name and surname.

[ ] In handleSubmit, create a submission object that includes an isValid boolean flag.

[ ] In SubmissionList.jsx, implement conditional rendering to display "Submission x: not a good name!!!" for entries where isValid is false.

Testing
[ ] Unit Tests:

[ ] ProgressSteps.test.js: Verify initial state (currentStep, submissions, formData).

[ ] ProgressSteps.test.js: Verify handleNext and handlePrev functions work as expected.

[ ] validation.test.js: Test validateName with valid, invalid, and empty strings.

[ ] Component Tests:

[ ] NavigationButtons.test.js: Verify disabled states of "Prev" and "Next"/"Submit" buttons.

[ ] ProgressBar.test.js: Verify the correct number of steps are rendered and styled correctly based on currentStep.

[ ] FinalStepForm.test.js: Verify the input fields are controlled by state and the onChange handler is called.

[ ] SubmissionList.test.js: Verify correct display of valid and invalid submissions.

[ ] End-to-End Tests:

[ ] Simulate a full user flow from start to a valid submission.

[ ] Simulate a submission with invalid data and verify the error message is displayed in the list.

[ ] Simulate a restart and verify the progress bar and form clear, but the submission list remains.

[ ] Verify that a second valid submission is added to the list correctly.

Final Review
[ ] Perform a final code review to ensure best practices and clean code.

[ ] Check for console errors and warnings.

[ ] Ensure all functionality works as per the specification.