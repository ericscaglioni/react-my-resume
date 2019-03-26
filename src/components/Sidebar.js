import React from 'react';

import MenuLinks from './MenuLinks';
import ResumeProfile from './ResumeProfile';

const getProfileFullName = (responseData) => (
    responseData.profile.firstName + " " + responseData.profile.lastName
);

const SideBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <ResumeProfile name={getProfileFullName(props.responseData)} img={props.responseData.profile.img}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <MenuLinks links={props.responseData.links} 
            onChangeLanguage={props.onChangeLanguage}
            languageIcon={props.languageIcon}
            currentLanguage={props.currentLanguage}
        />
    </nav>
);

export default SideBar;