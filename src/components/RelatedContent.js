import React from 'react';
import AboutContent from './AboutContent';
import ExperienceContent from './ExperienceContent';

const RelatedContent = (props) => (
    <div className="container-fluid p-0">
        <AboutContent responseData={props.responseData} currentLanguage={props.currentLanguage} />
        <hr className="m-0" />
        <ExperienceContent responseData={props.responseData} />
    </div>
);

export default RelatedContent;