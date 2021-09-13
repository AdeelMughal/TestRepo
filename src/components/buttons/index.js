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
  colors,
  appStyles,
  fontSize,
  sizes,
  appImages,
  fontFamily,
} from '../../services';
import {ButtonTextRegular, ButtonTextMedium} from '../text';
import {color} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {CustomIcon} from '../icons';
import {
  Wrapper,
  RowWrapperBasic,
  RowWrapper,
  ComponentWrapper,
  AbsoluteWrapper,
} from '../wrappers';
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

export const LanguageButton = ({
  text,
  animation,
  onPress,
  buttonStyle,
  textStyle,
  customIcon,
  iconName,
  iconType,
  iconSize,
  buttonColor,
  iconStyle,
  tintColor,
  iconColor,
  isLoading,
}) => {
  return (
    <TouchableOpacity disabled={isLoading} onPress={onPress}>
      <Wrapper
        animation={animation}
        style={[
          appStyles.buttonColord,
          {
            borderRadius: sizes.buttonRadius,
            height: height(7),
            backgroundColor: buttonColor
              ? buttonColor
              : colors.activeBottomIcon,
          },
          appStyles.shadow,
          buttonStyle,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isLoading ? (
            <UIActivityIndicator
              color={tintColor ? tintColor : colors.appTextColor6}
              size={totalSize(2.5)}
            />
          ) : (
            <ButtonTextMedium
              style={[
                {
                  color: tintColor ? tintColor : colors.appTextColor6,
                  fontFamily: fontFamily.appTextMedium,
                },
                textStyle,
              ]}>
              {text}
            </ButtonTextMedium>
          )}
        </View>
        <AbsoluteWrapper style={[{left: sizes.marginHorizontal}]}>
          {customIcon ? (
            <CustomIcon
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(3)}
              // color={iconColor ? iconColor : colors.appTextColor6}
            />
          ) : iconName ? (
            <Icon
              name={iconName ? iconName : 'email-outline'}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : totalSize(3)}
              color={
                iconColor
                  ? iconColor
                  : tintColor
                  ? tintColor
                  : colors.appTextColor6
              }
              iconStyle={[{}, iconStyle]}
            />
          ) : null}
        </AbsoluteWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ButtonColored = ({
  text,
  animation,
  onPress,
  buttonStyle,
  textStyle,
  customIcon,
  iconName,
  iconType,
  iconSize,
  buttonColor,
  iconStyle,
  tintColor,
  iconColor,
  isLoading,
}) => {
  return (
    <TouchableOpacity disabled={isLoading} onPress={onPress}>
      <Wrapper
        animation={animation}
        style={[
          appStyles.buttonColord,
          {
            borderRadius: sizes.buttonRadius,
            height: height(7),
            backgroundColor: buttonColor
              ? buttonColor
              : colors.activeBottomIcon,
          },
          appStyles.shadow,
          buttonStyle,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={tintColor ? tintColor : colors.appTextColor6}
                            iconStyle={[{ marginRight: width(5) }, iconStyle]}

                        />
                        :
                        null
                } */}
          {isLoading ? (
            <UIActivityIndicator
              color={tintColor ? tintColor : colors.appTextColor6}
              size={totalSize(2.5)}
            />
          ) : (
            <ButtonTextMedium
              style={[
                {
                  color: tintColor ? tintColor : colors.appTextColor6,
                  fontFamily: fontFamily.appTextMedium,
                },
                textStyle,
              ]}>
              {text}
            </ButtonTextMedium>
          )}
        </View>
        <AbsoluteWrapper style={[{left: sizes.marginHorizontal}]}>
          {customIcon ? (
            <CustomIcon
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(3)}
              // color={iconColor ? iconColor : colors.appTextColor6}
            />
          ) : iconName ? (
            <Icon
              name={iconName ? iconName : 'email-outline'}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : totalSize(3)}
              color={
                iconColor
                  ? iconColor
                  : tintColor
                  ? tintColor
                  : colors.appTextColor6
              }
              iconStyle={[{}, iconStyle]}
            />
          ) : null}
        </AbsoluteWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

export const ButtonColoredSmall = ({
  text,
  onPress,
  buttonStyle,
  customIcon,
  direction,
  textStyle,
  iconName,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: 15,
          paddingHorizontal: width(5),
          paddingVertical: height(1),
          backgroundColor: colors.appColor1,
        },
        buttonStyle,
      ]}>
      <View
        style={{
          flexDirection: direction ? direction : 'row',
          alignItems: 'center',
        }}>
        {customIcon ? (
          <CustomIcon
            icon={customIcon}
            size={iconSize ? iconSize : totalSize(2)}
            color={iconColor ? iconColor : colors.appTextColor6}
          />
        ) : iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(2)}
            color={iconColor ? iconColor : colors.appTextColor6}
            iconStyle={[{}, iconStyle]}
          />
        ) : null}
        <ButtonTextRegular style={[{color: colors.appTextColor6}, textStyle]}>
          {' '}
          {text}{' '}
        </ButtonTextRegular>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonPrescription = ({
  text,
  onPress,
  iconSizeLeft,
  iconStyleLeft,
}) => {
  return (
    // <LinearGradient
    //   style={{
    //     paddingHorizontal: totalSize(0.5),
    //     paddingVertical: totalSize(0.5),
    //     borderRadius: totalSize(5),
    //     height: Platform.OS == 'ios' ? totalSize(3.3) : totalSize(3.6),
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    //   colors={[
    //     colors.gradient1,
    //     colors.gr2,
    //     colors.gr2,
    //     colors.gr2,
    //     colors.gradient3,
    //   ]}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: totalSize(1),
        paddingVertical: totalSize(0.5),
        height: Platform.OS == 'ios' ? totalSize(3.3) : totalSize(3.6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gradient1,
        borderRadius: totalSize(5),
        height: Platform.OS == 'ios' ? totalSize(3.3) : totalSize(3.6),
      }}>
      <Text
        style={{
          fontSize: totalSize(1.3),
          marginRight: totalSize(0.5),
          color: colors.snow,
        }}>
        {text ? text : 'Upload Prescription'}
      </Text>
      <CustomIcon
        icon={appImages.prescription}
        size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
        // color={iconColorLeft ? iconColorLeft : colors.appTextColor1}
        containerStyle={iconStyleLeft}
      />
    </TouchableOpacity>
    // </LinearGradient>
  );
};

export const ButtonBordered = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  iconName,
  customIcon,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
  tintColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        appStyles.buttonBorderd,
        {
          borderRadius: sizes.buttonRadius,
          height: height(7),
          borderColor: tintColor ? tintColor : colors.appColor1,
        },
        buttonStyle,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* {
                    customIcon ?
                        <CustomIcon
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={iconColor ? iconColor : null}
                            style={[{ marginRight: width(5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(5) }, iconStyle]}

                            />
                            :
                            null
                } */}
        <ButtonTextMedium
          style={[
            {color: tintColor ? tintColor : colors.appColor1},
            textStyle,
          ]}>
          {text}
        </ButtonTextMedium>
      </View>
      <AbsoluteWrapper style={[{left: sizes.marginHorizontal}]}>
        {customIcon ? (
          <CustomIcon
            icon={customIcon}
            size={iconSize ? iconSize : totalSize(3)}
            color={iconColor ? iconColor : null}
            style={[{marginRight: width(5)}, iconStyle]}
          />
        ) : iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(3)}
            color={
              iconColor ? iconColor : tintColor ? tintColor : colors.appColor1
            }
            iconStyle={[{marginRight: width(5)}, iconStyle]}
          />
        ) : null}
      </AbsoluteWrapper>
    </TouchableOpacity>
  );
};

export const ButtonBorderedSmall = ({
  text,
  onPress,
  buttonStyle,
  rowReverse,
  textStyle,
  iconName,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
  tintColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: 15,
          paddingHorizontal: width(5),
          paddingVertical: height(1),
          borderColor: tintColor ? tintColor : colors.appColor1,
          borderWidth: 1,
        },
        buttonStyle,
      ]}>
      <View
        style={{
          flexDirection: rowReverse ? 'row-reverse' : 'row',
          alignItems: 'center',
        }}>
        {iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(2)}
            color={tintColor ? tintColor : colors.appColor1}
            iconStyle={[{marginHorizontal: width(2)}, iconStyle]}
          />
        ) : null}
        <Text
          style={[
            appStyles.ButtonTextRegular,
            {
              color: tintColor ? tintColor : colors.appColor1,
              fontSize: fontSize.regular,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonArrowColored = ({
  text,
  onPress,
  animation,
  buttonStyle,
  textStyle,
  iconName,
  iconType,
  iconSize,
  buttonColor,
  iconStyle,
  tintColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ComponentWrapper
        animation={animation}
        style={[
          {
            borderRadius: sizes.buttonRadius,
            backgroundColor: buttonColor ? buttonColor : colors.appColor1,
            paddingVertical: height(1.25),
          },
          appStyles.shadow,
          buttonStyle,
        ]}>
        <RowWrapper>
          <ButtonTextMedium
            style={[
              {color: tintColor ? tintColor : colors.appTextColor6},
              textStyle,
            ]}>
            {text}
          </ButtonTextMedium>
          <Icon
            name={iconName ? iconName : 'chevron-right'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(5)}
            color={tintColor ? tintColor : colors.appTextColor6}
            iconStyle={[{}, iconStyle]}
          />
        </RowWrapper>
      </ComponentWrapper>
    </TouchableOpacity>
  );
};
