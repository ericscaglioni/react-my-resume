import React, { Component } from 'react';
import SideBar from './SideBar';

import {IntlProvider, addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_pt from 'react-intl/locale-data/pt';
import messages_en from '../translations/en.json';
import messages_pt from '../translations/pt.json';

addLocaleData([...locale_en, ...locale_pt]);

class Home extends Component {

    state = {
        locale: 'en',
        localeMessages: messages_en
    };

    onChangeLanguage = (lang) => {
        var messages, locale = '';
        switch (lang) {
            case 'en':
                locale = lang;
                messages = messages_en;
                break;
            case 'pt':
                locale = lang;
                messages = messages_pt;
                break;
            default:
                locale = lang;
                messages = messages_pt;
                break;
        }
        this.setState({ locale: locale, localeMessages: messages });
    };

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.localeMessages}>
                <SideBar onChangeLanguage={this.onChangeLanguage}/>
            </IntlProvider>
        );
    }
}

export default Home;