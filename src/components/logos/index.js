import React from 'react';
import {height, totalSize, width} from 'react-native-dimension';
import FastImage from 'react-native-fast-image';
import {colors, sizes, appStyles, appImages} from '../../services';
import {IconWithText, CustomIcon} from '../icons';
import {RowWrapperBasic, Wrapper} from '../wrappers';

export const LogoMain = ({size, animation, duration, color, logo}) => {
  return (
    <Wrapper animation={animation} duration={duration}>
      <CustomIcon
        icon={logo ? logo : appImages.logoFull}
        size={size ? size : totalSize(25)}
        color={color}
      />
    </Wrapper>
  );
};

export const LogoMainImage = ({
  style,
  resizeMode,
  animation,
  duration,
  color,
  logo,
}) => {
  return (
    <Wrapper animation={animation} duration={duration}>
      <FastImage
        source={logo ? logo : appImages.logoFull}
        resizeMode={resizeMode ? resizeMode : 'contain'}
        style={[{width: width(60), height: height(20)}, style]}
      />
    </Wrapper>
  );
};
