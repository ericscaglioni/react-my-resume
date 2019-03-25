import React from 'react';

import Language from './Language';
import MenuLinks from './MenuLinks';
import ResumeProfile from './ResumeProfile';

import responseData from './fakeLinks';

const SideBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <ResumeProfile name={responseData.profileName} img={responseData.profileImg}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <MenuLinks links={responseData.links} />
        <Language
            onChangeLanguage={props.onChangeLanguage}
            languageIcon={props.languageIcon}
            currentLanguage={props.currentLanguage}
        />
    </nav>
);

export default SideBar;