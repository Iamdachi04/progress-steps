import React , { useEffect, useState } from "react";
import ProgressSteps from './ProgressSteps';
import SubmissionList from './SubmissionList';

interface Submission {
 name: string;
 surname: string;
}



const ProgressApp: React.FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);
const [submissions, setSubmissions] = useState<Submission[]>(() => {
     const savedSubmissions = localStorage.getItem('submissions');
     return savedSubmissions ? JSON.parse(savedSubmissions) : [];
});

useEffect(() => {
    localStorage.setItem('submissions', JSON.stringify(submissions));
}, [submissions]);


const handleAddSubmission = (newSubmission:Submission)=>{
    setSubmissions([...submissions, newSubmission]);
    setIsFormVisible(false);
}

const handleStartNewForm = () => {
    setIsFormVisible(true);
};

return (
    <div className="progress-app-container">
        <h2>multi - step form</h2>
        {isFormVisible ? (
            <ProgressSteps onAddSubmission={handleAddSubmission} />
        ) : (
            <SubmissionList
                submissions={submissions}
                onStartNewForm={handleStartNewForm}
                onClearAll={() => setSubmissions([])}
            />
        )}
    </div>
)
};

export default ProgressApp;