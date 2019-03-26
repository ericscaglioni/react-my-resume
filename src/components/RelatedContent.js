import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const getFirstName = (responseData) => (
    responseData.profile.firstName
);

const getLastName = (responseData) => (
    responseData.profile.lastName
);

const getEmail = (responseData) => (
    responseData.profile.email
);

const getLinkedInUrl = (responseData) => (
    responseData.profile.urls.linkedIn
);

const getGithubUrl = (responseData) => (
    responseData.profile.urls.github
);

const getAddress = (responseData) => (
    {
        "zipCode": responseData.profile.address.zipCode,
        "street": responseData.profile.address.street,
        "number": responseData.profile.address.number,
        "district": responseData.profile.address.district,
        "city": responseData.profile.address.city,
        "state": responseData.profile.address.state,
        "country": responseData.profile.address.country,
        "phoneNumber": responseData.profile.phoneNumber
    }
);

const getAboutDescription = (currentLanguage, responseData) => {
    let aboutDescription = '';
    switch (currentLanguage) {
        case "en":
            aboutDescription = responseData.profile.aboutEn;
            break;
        case "pt":
            aboutDescription = responseData.profile.aboutPt;
            break; 
    }

    return {
        "about": aboutDescription
    };
};

const RelatedContent = (props) => (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">{getFirstName(props.responseData)}
                    <span className="text-primary"> {getLastName(props.responseData)}</span>
                </h1>
                <div className="subheading mb-5">
                    <FormattedMessage 
                        id="about.address"
                        values={getAddress(props.responseData)} />
                    <a href={"mailto:"+ getEmail(props.responseData)}>{getEmail(props.responseData)}</a>
                </div>
                <p className="lead mb-5">
                    <FormattedHTMLMessage 
                        id="about.description"
                        values={getAboutDescription(props.currentLanguage, props.responseData)}
                    />
                </p>
                <div className="social-icons">
                    <a href={getLinkedInUrl(props.responseData)}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={getGithubUrl(props.responseData)}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
);

export default RelatedContent;