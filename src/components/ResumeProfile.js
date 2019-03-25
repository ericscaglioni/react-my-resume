import React from 'react';

const ResumeProfile = (props) => (
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{props.name}</span>
        <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={props.img} alt="" />
        </span>
    </a>
);

export default ResumeProfile;