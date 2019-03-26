import React, {Component} from 'react';

export default class Language extends Component {
    onChangeLanguage = () => {
        this.props.onChangeLanguage(this.props.currentLanguage);
    };

    render() {
        return (
            <a className="nav-link js-scroll-trigger" onClick={this.onChangeLanguage} href="#">
                <img className="img-fluid" src={this.props.languageIcon} alt=''/>
            </a>
        );
    };
}