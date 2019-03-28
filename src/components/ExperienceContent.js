import React from 'react';
import Experiences from './Experiences';

const getExperiences = (responseData) => (
    responseData.profile.experiences.map((experience) => (
        {
            company: experience.company,
            jobDescription: experience.jobDescription,
            jobTitle: experience.jobTitle,
            beginingDate: experience.beginingDate,
            endingDate: experience.endingDate
        }
    ))
);

const ExperienceContent = (props) => (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
            <h2 className="mb-5">Experience</h2>
            <Experiences experiences={getExperiences(props.responseData)} />
        </div>
    </section>
);

export default ExperienceContent;