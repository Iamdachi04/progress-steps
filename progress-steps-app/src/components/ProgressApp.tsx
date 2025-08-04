import React , { useEffect, useState } from "react";

interface Submission {
 name: string;
 surname: string;
}


const [isFormVisible, setIsFormVisible] = useState(true);

const ProgressApp: React.FC = () => {
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
        <h2>hulti - step form</h2>
    </div>
)
};

export default ProgressApp;