Phase 1: Foundation and State Management
Goal: Establish the project structure, define the core state, and create the main container component.

Steps:

Initialize a new React project.

Create the main ProgressSteps component to hold all logic and state.

Define the initial state: currentStep (starting at 1) and an empty submissions array.

Create placeholder functions for navigation (handleNext, handlePrev).

Set up a basic test file to ensure the initial state is correctly set.

Phase 2: Navigation and UI Integration
Goal: Implement the primary navigation logic and the visual progress bar.

Steps:

Develop the NavigationButtons component, containing "Prev" and "Next" buttons.

Implement the logic to enable/disable these buttons based on the currentStep state.

Develop the ProgressBar component, which will receive currentStep as a prop and render the 5 numbered circles with dynamic styling.

Integrate both the NavigationButtons and ProgressBar into the main ProgressSteps component.

Write integration tests to confirm button clicks correctly update the currentStep and that the ProgressBar reflects these changes visually.

Phase 3: Final Step Form and Submission
Goal: Create the form for data entry on the final step and implement the submission process.

Steps:

Create the FinalStepForm component with two controlled input fields for name and surname.

Integrate this form so it only renders when currentStep is 5.

Change the "Next" button to a "Submit" button on this final step.

Implement the handleSubmit function in the ProgressSteps component to process the form data.

Develop tests for the form's rendering conditions and for the handleSubmit function's initial data handling.

Phase 4: Validation and Data Display
Goal: Add the validation logic and the cumulative display of submissions.

Steps:

Create a helper function (validateName) to check for non-English alphabetical characters.

Modify the handleSubmit function to use this validation.

Create the SubmissionList component to render the submissions array.

Implement the logic within SubmissionList to display "Submission x: not a good name!!!" for invalid entries.

Write unit tests for the validateName function and for the SubmissionList's rendering of both valid and invalid data.

Phase 5: Restart Functionality and Final Polish
Goal: Implement the restart button and finalize the component.

Steps:

Create a RestartButton component.

Integrate the RestartButton and the SubmissionList into a container.

Implement the handleRestart function to reset currentStep to 1 and clear the form data.

Write tests to ensure the restart functionality works correctly, including verifying that the submission list remains on screen.

Perform a final code review and ensure all components and logic are cleanly integrated.

Code Generation Prompts
Prompt 1: Project Setup and Foundational Component
You are an expert React developer. Your task is to start a new project from scratch.

1.  **Initialize Project:** Use Vite to create a new React project with JavaScript. Name the project `progress-steps-app`.
2.  **Create Main Component:** Create a file named `ProgressSteps.jsx`. This will be the main container component for our application.
3.  **Define Initial State:** In `ProgressSteps.jsx`, use the `useState` hook to manage the following state variables:
    * `currentStep`: An integer, initialized to `1`.
    * `submissions`: An array, initialized to `[]`.
    * `formData`: An object with keys `name` and `surname`, both initialized to an empty string.
4.  **Render Basic Structure:** The component should return a main `div` with a title and a simple message displaying the current step number. For example: `<h1>Progress Steps</h1> <p>Current Step: {currentStep}</p>`.
5.  **Create Test File:** Create a test file named `ProgressSteps.test.js`.
6.  **Write Initial Test:** In the test file, write a test to verify that the `ProgressSteps` component correctly initializes `currentStep` to `1` and renders the text "Current Step: 1".
7.  **Export:** Make sure the `ProgressSteps` component is the default export.
Prompt 2: Navigation Logic and Buttons
Building on the previous prompt, you have a `ProgressSteps.jsx` component with `currentStep`, `submissions`, and `formData` state. Now, let's create the navigation buttons and their logic.

1.  **Create `NavigationButtons.jsx`:** Create a new component that receives `currentStep`, `handleNext`, `handlePrev`, and the total number of steps (`totalSteps`) as props.
2.  **Render Buttons:** Inside `NavigationButtons`, render two buttons: one labeled "Prev" and one labeled "Next".
3.  **Implement Disabled States:**
    * The "Prev" button should be disabled when `currentStep` is `1`.
    * The "Next" button should be disabled when `currentStep` is `5` (total steps).
4.  **Wire Functions:**
    * Attach the `handlePrev` function to the "Prev" button's `onClick` event.
    * Attach the `handleNext` function to the "Next" button's `onClick` event.
5.  **Update `ProgressSteps.jsx`:**
    * Define two new functions in `ProgressSteps.jsx`: `handleNext` and `handlePrev`.
    * `handleNext` should increment `currentStep` but not go beyond `5`.
    * `handlePrev` should decrement `currentStep` but not go below `1`.
    * Render the `NavigationButtons` component within `ProgressSteps.jsx`, passing the necessary props.
6.  **Update Test File:** In `ProgressSteps.test.js`, add new tests to verify:
    * The "Prev" button is disabled when `currentStep` is `1`.
    * Clicking the "Next" button when `currentStep` is `1` changes `currentStep` to `2`.
    * The "Next" button is disabled when `currentStep` is `5`.
    * Clicking the "Prev" button when `currentStep` is `2` changes `currentStep` to `1`.
Prompt 3: The Progress Bar Component
You have the navigation logic complete. Now, let's build the visual progress bar to reflect the state.

1.  **Create `ProgressBar.jsx`:** Create a new component that accepts `currentStep` and `totalSteps` as props.
2.  **Render Steps:** The component should render a `div` containing a series of `totalSteps` (5) elements, each representing a step. Each step should include a numbered circle.
3.  **Dynamic Styling:**
    * Apply a CSS class like `.active-step` to the circle and `.active-line` to the connecting line for all steps that are less than or equal to `currentStep`.
    * Apply a default, muted class for all other steps.
    * Use CSS to define these classes with a primary color (e.g., blue) for active states and a muted color (e.g., gray) for inactive states.
4.  **Integrate with `ProgressSteps.jsx`:** Render the `ProgressBar` component inside `ProgressSteps.jsx`, passing the `currentStep` and `totalSteps` (5) props.
5.  **Update Test File:** In `ProgressSteps.test.js`, add new tests to verify:
    * When `currentStep` is `1`, only the first step and its line are visually active.
    * When `currentStep` is `3`, the first three steps and their connecting lines are visually active.
    * When `currentStep` is `5`, all steps and lines are active.
Prompt 4: Final Step Form and "Submit" Button
Your project has a functional progress bar and navigation. The next step is to build the form for the final step.

1.  **Create `FinalStepForm.jsx`:** Create a new component that receives `formData`, `setFormData`, and a `handleSubmit` function as props.
2.  **Render Inputs:** Inside `FinalStepForm`, render two controlled input fields for `name` and `surname`. The `value` should be from `formData`, and `onChange` should update the `formData` state via the `setFormData` prop.
3.  **Integrate with `ProgressSteps.jsx`:**
    * In `ProgressSteps.jsx`, modify the render logic so that the `FinalStepForm` component is only rendered when `currentStep` is equal to `5`. Otherwise, render `null` or a generic placeholder for the content.
4.  **Replace "Next" Button:** In the `NavigationButtons` component, modify the rendering of the "Next" button. When `currentStep` is `5`, the button text should change to "Submit" and its `onClick` handler should be switched to a new `handleSubmit` function passed from the parent.
5.  **Define `handleSubmit`:** In `ProgressSteps.jsx`, create a new function called `handleSubmit`. For now, this function should simply log the `formData` to the console.
6.  **Update Test File:** In `ProgressSteps.test.js`, add tests to verify:
    * The `FinalStepForm` component is rendered when `currentStep` is `5`.
    * The `FinalStepForm` is not rendered when `currentStep` is less than `5`.
    * The "Next" button's text changes to "Submit" on the final step.
Prompt 5: Validation and Submission Logic
The form is ready, but it needs validation and the ability to process submissions correctly.

1.  **Create `utils/validation.js`:** Create a new file for a helper function. In it, define and export a function `validateName(name)`. This function should return `true` if the input contains only English alphabetical characters (a-z, A-Z) and `false` otherwise.
2.  **Update `ProgressSteps.jsx`:**
    * Import the `validateName` function.
    * Modify the `handleSubmit` function. It should now:
        * Validate both `formData.name` and `formData.surname` using `validateName`.
        * Create a new submission object with an `id`, the `name` and `surname`, and an `isValid` boolean flag based on the validation result.
        * Add this new submission object to the `submissions` state array.
        * Reset the `formData` state to empty strings.
3.  **Update Test File:** In `ProgressSteps.test.js`, add new tests for:
    * The `validateName` function with various valid and invalid inputs.
    * Clicking the "Submit" button with valid data, verifying that a new object is added to the `submissions` array with `isValid: true`.
    * Clicking the "Submit" button with invalid data, verifying that a new object is added to the `submissions` array with `isValid: false`.
Prompt 6: Cumulative Display and Restart Functionality
The submission logic is complete. The final step is to display the cumulative submissions and implement the restart feature.

1.  **Create `SubmissionList.jsx`:** Create a component that receives the `submissions` array as a prop.
2.  **Render the List:** `SubmissionList` should map over the `submissions` array. For each submission, it should render a list item.
    * If `submission.isValid` is `true`, display "Submission {submission.id}: {submission.name} {submission.surname}".
    * If `submission.isValid` is `false`, display "Submission {submission.id}: not a good name!!!".
3.  **Create `RestartButton.jsx`:** Create a component that renders a "Restart" button and receives a `handleRestart` function as a prop.
4.  **Update `ProgressSteps.jsx`:**
    * Define a `handleRestart` function that resets `currentStep` to `1` and clears the `formData`.
    * Render the `RestartButton` component, passing `handleRestart` as the prop.
    * Render the `SubmissionList` component, passing the `submissions` array as a prop.
    * Position the `RestartButton` visually above the `SubmissionList`.
5.  **Final Integration:** Ensure all components are rendered in the correct order within `ProgressSteps.jsx`. The main component should now render the `ProgressBar`, either the `FinalStepForm` or a placeholder, the `NavigationButtons`, and finally the `RestartButton` and `SubmissionList`.
6.  **Finalize Tests:** In `ProgressSteps.test.js`, add new tests for:
    * The `SubmissionList` component correctly displaying both valid and invalid submissions.
    * Clicking the "Restart" button correctly resets the `currentStep` and clears the form data, but the `submissions` list remains unchanged.
    * A full end-to-end test simulating a user entering valid data, submitting, and then restarting the process to submit a new entry.