import {totalSize} from 'react-native-dimension';

const fontFamily = {
  // appTextLight: 'Roboto-Light',
  // appTextRegular: 'Roboto-Regular',
  // appTextMedium: 'Roboto-Medium',
  // appTextBold: 'Roboto-Bold',
  // appTextLight: 'OpenSauceSans-Light',
  // appTextRegular: 'OpenSauceSans-Regular',
  // appTextMedium: 'OpenSauceSans-Medium',
  // appTextBold: 'OpenSauceSans-Bold',
  appTextLight: 'Poppins-Light', // 'Roboto-Light',
  appTextDisplayRegular: 'Poppins-Regular', //'SFProDisplay-Regular',
  appTextRegular: 'Poppins-Regular', //'SFProText-Regular',
  appTextMedium: 'Poppins-Medium', //'SFProDisplay-Semibold',
  appTextBold: 'Poppins-Bold', //'Roboto-Bold',
};
const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.5),
  small: totalSize(1.25),
  tiny: totalSize(1),
};

export {fontFamily, fontSize};
