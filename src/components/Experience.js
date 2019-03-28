import React from 'react';

const Experience = (props) => (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
            <h3 className="mb-0">{props.experience.jobTitle}</h3>
            <div className="subheading mb-3">{props.experience.company}</div>
            <p>{props.experience.jobDescription}</p>
        </div>
        <div className="resume-date text-md-right">
            <span className="text-primary">{props.experience.beginingDate + " - " + props.experience.endingDate}</span>
        </div>
    </div>
);

export default Experience;