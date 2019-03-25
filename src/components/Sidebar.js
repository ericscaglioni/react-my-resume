import React, { Component } from 'react';
import profilePic from '../img/profile.jpg';
import {FormattedMessage} from 'react-intl';

import Language from './Language';

const SideBar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Eric Scaglioni</span>
            <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="" />
            </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">
                        <FormattedMessage id="menu.about"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#experience">
                        <FormattedMessage id="menu.experiences" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#education">
                        <FormattedMessage id="menu.education" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#skills">
                        <FormattedMessage id="menu.skills" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#interests">
                        <FormattedMessage id="menu.interests" />
                    </a>
                </li>
            </ul>
        </div>
        <Language
            onChangeLanguage={props.onChangeLanguage}
            languageIcon={props.languageIcon}
            currentLanguage={props.currentLanguage}
        />
    </nav>
);

export default SideBar;