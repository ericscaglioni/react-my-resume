import React from 'react';
import SideBar from './SideBar';
import RelatedContent from './RelatedContent';

const MainContent = (props) => (
    <div>
        <SideBar
            onChangeLanguage={props.onChangeLanguage}
            languageIcon={props.languageIcon}
            currentLanguage={props.currentLanguage}
            responseData={props.responseData}
        />
        <RelatedContent 
            responseData={props.responseData}
            currentLanguage={props.currentLanguage}
        />
    </div>
);

export default MainContent;