import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {Navigation, storageConst} from './src/services';
import {Wrapper} from './src/components';
import {Provider} from 'react-redux';
import store from './src/Redux/index';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  ar: () => require('./src/assets/translation/ar.json'),
  en: () => require('./src/assets/translation/en.json'),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = lang => {
  const fallback = {languageTag: lang == 'en' ? 'en' : 'ar', isRTL: false};

  const {languageTag, isRTL} = fallback;
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    setI18nConfig();
  }

  componentDidMount() {
    AsyncStorage.getItem(storageConst.language).then(async value => {
      console.log(value);
      if (!value) {
        // console.warn('No language selected');
        AsyncStorage.setItem(storageConst.language, 'en');
        this.handleLocalizationChange('en');
      } else {
        if (value === 'en') {
          console.warn('english language selected');
          this.handleLocalizationChange('en');
        } else {
          console.warn('Arabic language selected');
          this.handleLocalizationChange('ar');
        }
      }
    });
  }

  // componentWillUnmount() {
  //   RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  // }

  handleLocalizationChange = async lang => {
    // setI18nConfig(lang);
    setI18nConfig(lang);
    this.forceUpdate();
  };

  render() {
    return (
      <Wrapper style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Provider store={store}>
          {/* <WalkthroughProvider> */}
          <Navigation />
          {/* </WalkthroughProvider> */}
        </Provider>
      </Wrapper>
    );
  }
}

export default App;
