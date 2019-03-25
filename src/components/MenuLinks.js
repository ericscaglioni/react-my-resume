import React from 'react';
import MenuLink from './MenuLink';

const MenuLinks = (props) => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            {
                props.links.map((option) => (
                    <MenuLink key={option.id} id={option.id} description={option.key} />
                ))
            }
        </ul>
    </div>
);

export default MenuLinks;