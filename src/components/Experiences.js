import React from 'react';
import Experience from './Experience';

const Experiences = (props) => (
    props.experiences.map((experience) => (
        <Experience key={experience.company} experience={experience} />
    ))
);

export default Experiences;