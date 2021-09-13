import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, appStyles, sizes} from '../../services';
import * as Animatable from 'react-native-animatable';
import {SmallText} from '../text';
import FastImage from 'react-native-fast-image';

export const BackIcon = ({style, color, onPress, size}) => {
  return (
    <Icon
      name="ios-arrow-back"
      type="ionicon"
      size={size ? size : totalSize(2.6)}
      //raised
      reverse
      reverseColor={color ? color : colors.activeBottomIcon}
      color={'transparent'}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const IconButton = ({
  style,
  onPress,
  iconSize,
  iconColor,
  iconName,
  iconType,
  buttonColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.IconButtonContainer,
        {backgroundColor: buttonColor ? buttonColor : colors.appColor1},
        style,
      ]}>
      <Icon
        name={iconName ? iconName : 'heart'}
        type={iconType ? iconType : 'material-community'}
        size={iconSize ? iconSize : sizes.icons.large}
        color={iconColor ? iconColor : colors.black}
      />
    </TouchableOpacity>
  );
};
export const MenuIcon = ({style, onPress, color, size}) => {
  return (
    <Icon
      name="menu"
      type="entypo"
      size={size ? size : totalSize(2.5)}
      color={color ? color : colors.black}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const SearchIcon = ({style, onPress, color, size}) => {
  return (
    <Icon
      name="search"
      type="font-awesome"
      size={size ? size : totalSize(2.5)}
      //raised
      // reverse
      // reverseColor={colors.appTextColor6}
      color={color ? color : colors.black}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const CartIcon = ({style, onPress, color, size}) => {
  return (
    <Icon
      name="shopping-cart"
      type="font-awesome"
      size={size ? size : totalSize(2.5)}
      //raised
      // reverse
      // reverseColor={colors.appTextColor6}
      color={color ? color : colors.black}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const FilterIcon = ({style, onPress, color, size}) => {
  return (
    <Icon
      name="options"
      type="ionicon"
      size={size ? size : totalSize(2.5)}
      //raised
      // reverse
      // reverseColor={colors.appTextColor6}
      color={color ? color : colors.appTextColor3}
      iconStyle={style}
      onPress={onPress}
    />
  );
};
export const CustomIcon = ({icon, size, animation, duration, color, style}) => {
  const defaulSize = totalSize(5);
  return (
    <Animatable.View animation={animation} duration={duration} style={style}>
      {/* <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
      /> */}
      <FastImage
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
        tintColor={color}
        source={icon}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Animatable.View>
  );
};
export const CustomIconCart = ({
  icon,
  size,
  animation,
  duration,
  color,
  style,
  quantity,
}) => {
  const defaulSize = totalSize(5);
  return (
    <Animatable.View animation={animation} duration={duration} style={style}>
      <FastImage
        style={{
          height: size ? size : defaulSize,
          width: size ? size : defaulSize,
          tintColor: color,
        }}
        tintColor={color}
        source={icon}
        resizeMode={FastImage.resizeMode.contain}
      />
      {quantity != 0 && (
        <View
          style={{
            position: 'absolute',
            right: -width(2),
            backgroundColor: colors.error,
            width: totalSize(1.8),
            height: totalSize(1.8),
            borderRadius: totalSize(1.8) / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SmallText style={appStyles.whiteText}>{quantity}</SmallText>
        </View>
      )}
    </Animatable.View>
  );
};
export const TouchableCustomIconCart = ({
  icon,
  size,
  animation,
  duration,
  color,
  style,
  quantity,
  onPress,
}) => {
  const defaulSize = totalSize(5);
  return (
    <Animatable.View animation={animation} duration={duration} style={style}>
      <TouchableOpacity onPress={onPress} style={style}>
        <FastImage
          style={{
            height: size ? size : defaulSize,
            width: size ? size : defaulSize,
            tintColor: color,
          }}
          tintColor={color}
          source={icon}
          resizeMode={FastImage.resizeMode.contain}
        />
        {quantity != 0 && (
          <View
            style={{
              position: 'absolute',
              right: -width(2),
              backgroundColor: colors.error,
              width: totalSize(1.8),
              height: totalSize(1.8),
              borderRadius: totalSize(1.8) / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SmallText style={appStyles.whiteText}>{quantity}</SmallText>
          </View>
        )}
      </TouchableOpacity>
    </Animatable.View>
  );
};
export const TouchableCustomIcon = ({
  icon,
  size,
  animation,
  duration,
  color,
  onPress,
  style,
}) => {
  const defaulSize = totalSize(5);
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <CustomIcon
        icon={icon}
        size={size}
        animation={animation}
        duration={duration}
        color={color}
      />
    </TouchableOpacity>
  );
};

export const IconWithText = ({
  text,
  containerStyle,
  title,
  customIcon,
  onPress,
  tintColor,
  iconName,
  iconType,
  iconSize,
  textStyle,
  titleStyle,
  direction,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        {flexDirection: direction ? direction : 'row', alignItems: 'center'},
        containerStyle,
      ]}>
      {customIcon ? (
        <CustomIcon
          icon={customIcon}
          size={iconSize ? iconSize : totalSize(2)}
          color={tintColor ? tintColor : colors.appColor1}
        />
      ) : (
        <Icon
          name={iconName ? iconName : 'email'}
          type={iconType ? iconType : 'material-community'}
          size={iconSize ? iconSize : totalSize(2)}
          color={tintColor ? tintColor : colors.appTextColor1}
          iconStyle={iconStyle}
        />
      )}
      <View
        style={
          direction === 'column'
            ? {marginVertical: height(1.5)}
            : {marginHorizontal: width(2)}
        }>
        {title ? (
          <Text
            style={[
              appStyles.textRegular,
              {
                color: tintColor ? tintColor : colors.appTextColor1,
                fontFamily: FontFamily.appTextBold,
                marginBottom: 5,
              },
              titleStyle,
            ]}>
            {title}
          </Text>
        ) : null}
        <SmallText
          style={[
            {color: tintColor ? tintColor : colors.appTextColor1},
            textStyle,
          ]}>
          {text}
        </SmallText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  IconButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    backgroundColor: colors.appColor1,
    borderRadius: 10,
    ...appStyles.center,
    //  ...appStyles.shadow
  },
});
