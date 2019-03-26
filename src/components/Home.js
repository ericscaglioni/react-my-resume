import React, { Component } from 'react';
import MainContent from './MainContent';

import {IntlProvider, addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_pt from 'react-intl/locale-data/pt';
import messages_en from '../translations/en.json';
import messages_pt from '../translations/pt.json';

import brazilPic from '../img/brazil.png';
import usaPic from '../img/usa.png';

import responseData from './responseData';

addLocaleData([...locale_en, ...locale_pt]);

class Home extends Component {

    state = {
        locale: 'en',
        localeMessages: messages_en,
        otherLanguageIcon: brazilPic
    };

    onChangeLanguage = (currentLang) => {
        var messages, locale, otherLangIcon = '';
        switch (currentLang) {
            case 'en':
                locale = 'pt';
                messages = messages_pt;
                otherLangIcon = usaPic;
                break;
            case 'pt':
                locale = 'en';
                messages = messages_en;
                otherLangIcon = brazilPic;
                break;
            default:
                locale = 'en';
                messages = messages_en;
                otherLangIcon = brazilPic;
                break;
        }
        this.setState({ locale: locale, localeMessages: messages, otherLanguageIcon: otherLangIcon });
    };

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.localeMessages}>
                <MainContent 
                    onChangeLanguage={this.onChangeLanguage} 
                    languageIcon={this.state.otherLanguageIcon} 
                    currentLanguage={this.state.locale}
                    responseData={responseData}
                />
            </IntlProvider>
        );
    }
}

export default Home;