import React from 'react';
import MenuLink from './MenuLink';
import Language from './Language';

const MenuLinks = (props) => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            {
                props.links.map((option) => (
                    <MenuLink key={option.id} id={option.id} description={option.key} />
                ))
            }
            <li className="nav-item">
                <Language
                    onChangeLanguage={props.onChangeLanguage}
                    languageIcon={props.languageIcon}
                    currentLanguage={props.currentLanguage}
                />
            </li>
        </ul>
    </div>
);

export default MenuLinks;