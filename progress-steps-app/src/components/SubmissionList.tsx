import React from 'react'; 
//this is the interface of the submission object
interface Submission { 
    name: string; 
    surname: string; 
} 

interface SubmissionListProps { 
   submissions: Submission[]; 
   onStartNewForm: () => void; 
   onClearAll: () => void; 
} 

const SubmissionList: React.FC<SubmissionListProps> = ({ submissions, onStartNewForm, onClearAll }) => { 
    return ( 
        <div className="submission-list-container"> 
            <button onClick={onStartNewForm}>Start New Form</button> 
            <button onClick={onClearAll}>Clear All Submissions</button> 
             <h2>Submitted Entries</h2> 
              <ul> 
                 {/* The submissions array is mapped to display each entry. */} 
                  {submissions.map((entry, index) => ( 
                    <li key={index}> 
                     {entry.name} {entry.surname} 
                    </li> 
                ))} 
             </ul> 
        </div> 
); 
};
export default SubmissionList;