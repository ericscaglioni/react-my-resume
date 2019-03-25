import React from 'react';
import {FormattedMessage} from 'react-intl';

const MenuLink = (props) => (
    <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={'#' + props.id}>
            <FormattedMessage id={props.description}/>
        </a>
    </li>
);

export default MenuLink;