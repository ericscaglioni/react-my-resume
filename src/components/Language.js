import React, {Component} from 'react';

export default class Language extends Component {
    onChangeLanguage = () => {
        this.props.onChangeLanguage(this.props.currentLanguage);
    };

    render() {
        return (
            <a onClick={this.onChangeLanguage} href="#">
                <img className="img-fluid" src={this.props.languageIcon} alt=''/>
            </a>
        );
    };
}