import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {
  appImages,
  appStyles,
  colors,
  fontFamily,
  Translate,
} from '../../services';
import {CardWrapper, MainWrapper, Wrapper} from '../wrappers';
import * as Animatable from 'react-native-animatable';
import {CustomIcon, TouchableCustomIcon} from '..';
import {
  RegularText,
  TinyTitle,
  SmallText,
  TinierTitle,
  TinyText,
  MediumText,
  LargeText,
  SmallTitle,
} from '../text';
import {LogoMain} from '../logos';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {Spacer} from '../spacers';

export const BottomTabBar = ({onPress}) => {
  return (
    <MainWrapper
      animation="fadeIn"
      style={[
        // appStyles.center,
        appStyles.rowView,
        {
          position: 'absolute',
          bottom: 0,
          justifyContent: 'space-around',
          backgroundColor: colors.snow,
          width: width(100),
          height: height(9),
          paddingBottom: height(3),
        },
      ]}>
      <TouchableCustomIcon
        onPress={() => onPress(1)}
        icon={appImages.navHome}
        size={totalSize(3.5)}
      />
      <TouchableCustomIcon
        onPress={() => onPress(2)}
        icon={appImages.navCategory}
        size={totalSize(3.5)}
      />
      <View style={appStyles.center}>
        <TouchableCustomIcon
          onPress={() => onPress(3)}
          icon={appImages.navService}
          size={Platform.OS == 'ios' ? totalSize(6) : totalSize(8)}
          style={{
            position: 'absolute',
            top: Platform.OS == 'ios' ? -height(5) : -height(7),
          }}
        />
      </View>
      <TouchableCustomIcon
        onPress={() => onPress(4)}
        icon={appImages.navUser}
        size={totalSize(3.5)}
      />
      <TouchableCustomIcon
        onPress={() => onPress(5)}
        icon={appImages.navCart}
        size={totalSize(3.5)}
      />
      {/* <Image
        source={appImages.gif1}
        style={{width: width(80), height: height(12), resizeMode: 'contain'}}
        resizeMode={'contain'}
      /> */}
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
