import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ViewPropTypes,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {
  colors,
  sizes,
  appStyles,
  appImages,
  fontFamily,
  Translate,
} from '../../services';
import PropTypes from 'prop-types';
import {Wrapper, AbsoluteWrapper} from '../wrappers';
import {color} from 'react-native-reanimated';
import {SliderBox} from 'react-native-image-slider-box';
import {
  LargeText,
  LargeTitle,
  MediumText,
  MediumTitle,
  RegularText,
  SmallText,
  SmallTitle,
  TinierTitle,
  TinyText,
  TinyTitle,
  XLTitle,
  XXLTitle,
} from '../text';
import {BackIcon, CustomIcon} from '../icons';
import FastImage from 'react-native-fast-image';
import {Spacer} from '../spacers';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ActivityIndicator} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

export const FastImageComponent = ({source, imageStyle}) => (
  <FastImage
    style={imageStyle ? imageStyle : {width: width(15), height: height(5)}}
    source={source}
    // source={{
    //   uri: 'https://unsplash.it/400/400?image=1',
    //   headers: {Authorization: 'someAuthToken'},
    //   priority: FastImage.priority.normal,
    // }}
    resizeMode={FastImage.resizeMode.cover}
  />
);
export const ImageRound = ({style, size, source}) => {
  const defaultSize = totalSize(5);
  return (
    <Image
      source={source}
      style={[
        {
          height: size ? size : defaultSize,
          width: size ? size : defaultSize,
          borderRadius: 150,
        },
        style,
      ]}
    />
  );
};
export const ImageSqareRound = ({style, size, source}) => {
  const defaultSize = totalSize(5);
  return (
    <Image
      source={source}
      style={[
        {
          height: size ? size : defaultSize,
          width: size ? size : defaultSize,
          borderRadius: 15,
        },
        style,
      ]}
    />
  );
};
export const ImageProfile = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'zoomIn'}
        style={[styles.ImageProfileContainer, containerStyle]}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={colors.black} />
        ) : (
          <Image source={source} style={[styles.ImageProfile, imageStyle]} />
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageHomeBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        {/* <Image
          source={source ? source : appImages.banner}
          style={[styles.ImageHomeBanner, imageStyle]}
        /> */}
        <FastImage
          source={source ? source : appImages.banner}
          style={[styles.ImageHomeBanner, imageStyle]}
          // resizeMode={FastImage.resizeMode.contain}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoryBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          // source={source ? source : appImages.banner}
          source={appImages.bgYellowBanner}
          style={[styles.ImageCategoryBanner, imageStyle]}>
          <View
            style={[
              appStyles.rowView,
              {justifyContent: 'space-between', paddingRight: width(5)},
            ]}>
            <View style={{marginLeft: width(5)}}>
              <TinierTitle style={appStyles.whiteText}>{text}</TinierTitle>
              <TinyText style={appStyles.whiteText}>{subText}</TinyText>
            </View>

            <CustomIcon
              icon={source ? source : appImages.placeHolderProduct}
              size={totalSize(7)}
            />
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const HomeMapBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          // source={source ? source : appImages.banner}
          source={appImages.mapBg}
          style={[styles.HomeBanner, imageStyle]}>
          <View
            style={[
              {
                alignSelf: 'flex-end',
                alignItems: 'center',
                paddingRight: width(5),
              },
            ]}>
            {Platform.OS == 'ios' ? (
              <TinierTitle>{Translate('24/7 Pharmacies')}</TinierTitle>
            ) : (
              <TinyTitle>{Translate('24/7 Pharmacies')}</TinyTitle>
            )}
            <Spacer height={sizes.TinyMargin} />
            {Platform.OS == 'ios' ? (
              <RegularText style={{color: colors.textGrey1}}>
                {Translate('Pharmacies Open Now')}
              </RegularText>
            ) : (
              <MediumText style={{color: colors.textGrey1}}>
                {Translate('Pharmacies Open Now')}
              </MediumText>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText style={[appStyles.whiteText, {marginRight: width(1)}]}>
                {Translate('Show On Map')}
              </SmallText>
            ) : (
              <RegularText
                style={[appStyles.whiteText, {marginRight: width(1)}]}>
                {Translate('Show On Map')}
              </RegularText>
            )}
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.addProduct,
                {
                  // width: width(22)
                  width: null,
                  height: null,
                  paddingHorizontal: width(3),
                  paddingVertical: height(1),
                  borderRadius: totalSize(5),
                  marginRight: 0,
                },
              ]}>
              {Platform.OS == 'ios' ? (
                <SmallText
                  style={[appStyles.whiteText, {marginRight: width(1)}]}>
                  {Translate('Show On Map')}
                </SmallText>
              ) : (
                <RegularText
                  style={[appStyles.whiteText, {marginRight: width(1)}]}>
                  {Translate('Show On Map')}
                </RegularText>
              )}
              <CustomIcon icon={appImages.mapButtonPin} size={totalSize(1.7)} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const SliderImages = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  images,
}) => {
  return (
    <SliderBox
      images={
        images ? images : ['https://source.unsplash.com/1024x768/?nature']
      }
      // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      resizeMethod={'resize'}
      resizeMode={'contain'}
      inactiveDotColor={colors.textGrey}
      dotColor={colors.gradient1}
      dotStyle={{
        width: totalSize(0.8),
        height: totalSize(0.8),
        // borderRadius: 15,
        marginHorizontal: width(0.1),
        padding: 0,
        margin: 0,
      }}
      sliderBoxHeight={Platform.OS == 'ios' ? height(22) : height(26)}
      paginationBoxVerticalPadding={height(3)}
    />
  );
};
export const SliderHomeBanner = ({onPress, images}) => {
  return (
    <SliderBox
      images={
        images ? images : ['https://source.unsplash.com/1024x768/?nature']
      }
      onCurrentImagePressed={onPress}
      // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      resizeMethod={'resize'}
      resizeMode={'stretch'} //cover
      inactiveDotColor={colors.textGrey}
      dotColor={colors.activeBottomIcon}
      autoplay
      circleLoop
      dotStyle={{
        width: totalSize(0.8),
        height: totalSize(0.8),
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        // paddinTop: height(5),
        // marginTop: -height(5),
      }}
      sliderBoxHeight={Platform.OS == 'ios' ? height(22) : height(26)}
      paginationBoxVerticalPadding={height(1)}
      ImageComponentStyle={{
        borderRadius: 10,
        width: width(90),
        // width: width(100),
      }}
    />
  );
};
// export const SliderHomeBanner = ({onPress, images}) => {
//   const _renderItem = ({item, index}) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     );
//   };
//   return (
//     <Carousel
//       // ref={c => {
//       //   this._carousel = c;
//       // }}
//       data={[
//         {
//           title: 'Beautiful and dramatic Antelope Canyon',
//           subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//           illustration: 'https://i.imgur.com/UYiroysl.jpg',
//         },
//         {
//           title: 'Earlier this morning, NYC',
//           subtitle: 'Lorem ipsum dolor sit amet',
//           illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//         },
//         {
//           title: 'White Pocket Sunset',
//           subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//           illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//         },
//         {
//           title: 'Acrocorinth, Greece',
//           subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//           illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//         },
//         {
//           title: 'The lone tree, majestic landscape of New Zealand',
//           subtitle: 'Lorem ipsum dolor sit amet',
//           illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//         },
//         {
//           title: 'Middle Earth, Germany',
//           subtitle: 'Lorem ipsum dolor sit amet',
//           illustration: 'https://i.imgur.com/lceHsT6l.jpg',
//         },
//       ]}
//       renderItem={_renderItem}
//       sliderWidth={width(100)} //sliderWidth
//       itemWidth={width(70)} //itemWidth
//       loop
//       pagingEnabled
//       sliderHeight={height(30)}
//       itemHeight={height(30)}
//     />
//   );
// };
export const FilterPageBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}>
          <View style={{marginLeft: width(3), paddingRight: width(40)}}>
            <View style={styles.row}>
              <Icon
                name={'arrowleft'}
                type={'antdesign'}
                color={colors.snow}
                style={{alignSelf: 'flex-start'}}
                onPress={onBackPress}
              />
              <View style={{marginLeft: width(2)}}>
                <TinierTitle style={appStyles.whiteText}>{text}</TinierTitle>
                {Platform.OS == 'ios' ? (
                  <SmallText
                    style={[appStyles.whiteText, {marginTop: height(2)}]}>
                    {subText}
                  </SmallText>
                ) : (
                  <RegularText
                    style={[appStyles.whiteText, {marginTop: height(2)}]}>
                    {subText}
                  </RegularText>
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const CovidTestBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}
          resizeMode={resizeMode ? resizeMode : 'contain'}>
          <View
            style={{
              marginLeft: width(5),
              paddingRight: width(50),
              alignItems: 'flex-start',
            }}>
            <Icon
              name={'arrowleft'}
              type={'antdesign'}
              color={colors.snow}
              onPress={onBackPress}
            />
            {Platform.OS == 'ios' ? (
              <SmallTitle style={[appStyles.whiteText, {marginTop: height(4)}]}>
                {text}
              </SmallTitle>
            ) : (
              <SmallTitle
                style={[
                  appStyles.whiteText,
                  {fontFamily: fontFamily.appTextBold, marginTop: height(4)},
                ]}>
                {text}
              </SmallTitle>
            )}
            {Platform.OS == 'ios' ? (
              <SmallText style={[appStyles.whiteText, {marginTop: height(2)}]}>
                {subText}
              </SmallText>
            ) : (
              <MediumText style={[appStyles.whiteText, {marginTop: height(2)}]}>
                {subText}
              </MediumText>
            )}
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const MyPointsBanner = ({
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  text,
  subText,
  onBackPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'flipInY'} //zoomIn
        style={[styles.ImageHomeBannerContainer, containerStyle]}>
        <ImageBackground
          source={source ? source : appImages.banner}
          style={[styles.ImageCategoryBanner, imageStyle]}
          resizeMode={resizeMode ? resizeMode : 'contain'}>
          <View
            style={{
              width: width(100),
            }}>
            <View style={[appStyles.rowView, {marginLeft: width(5)}]}>
              <Icon
                name={'arrowleft'}
                type={'antdesign'}
                color={colors.snow}
                onPress={onBackPress}
              />
              {Platform.OS == 'ios' ? (
                <MediumText
                  style={[appStyles.whiteText, {marginLeft: width(2)}]}>
                  My Points
                </MediumText>
              ) : (
                <LargeText
                  style={[
                    appStyles.whiteText,
                    {fontFamily: fontFamily.appTextBold, marginLeft: width(2)},
                  ]}>
                  My Points
                </LargeText>
              )}
            </View>
            <View
              style={[
                appStyles.rowView,
                {alignSelf: 'center', marginTop: height(6)},
              ]}>
              <CustomIcon icon={appImages.flash} size={totalSize(6)} />
              {Platform.OS == 'ios' ? (
                <XLTitle style={[appStyles.whiteText, {marginLeft: width(2)}]}>
                  105
                </XLTitle>
              ) : (
                <XXLTitle
                  style={[
                    appStyles.whiteText,
                    {fontFamily: fontFamily.appTextBold, marginLeft: width(2)},
                  ]}>
                  105
                </XXLTitle>
              )}
            </View>

            <View
              style={[
                appStyles.rowView,
                {
                  marginLeft: width(7),
                  marginTop: Platform.OS == 'ios' ? height(2) : height(4),
                },
              ]}>
              {Platform.OS == 'ios' ? (
                <SmallText style={[appStyles.whiteText]}>
                  Total Points 200
                </SmallText>
              ) : (
                <MediumText style={[appStyles.whiteText]}>
                  Total Points 200
                </MediumText>
              )}
              {Platform.OS == 'ios' ? (
                <SmallText
                  style={[appStyles.whiteText, {marginLeft: width(4)}]}>
                  1 Point = 1 AED
                </SmallText>
              ) : (
                <MediumText
                  style={[appStyles.whiteText, {marginLeft: width(4)}]}>
                  1 Point = 1 AED
                </MediumText>
              )}
            </View>
          </View>
        </ImageBackground>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageHomeCategoriesText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          styles.ImageHomeBannerContainer,
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
        ]}>
        {/* <Image
          style={[styles.categoryImge, imageStyle]}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={[styles.categoryImge, imageStyle]}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
        />
        <SmallText style={{textAlign: 'center'}}>
          {/* {item.category} */}
          {item.category && item.category.length > 20
            ? item.category.substring(0, 20 - 3) + '...'
            : item.category}
        </SmallText>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoriesTextSimple = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          // {marginTop: height(0.5)},
        ]}>
        {/* <Image
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/* <SmallText style={{textAlign: 'center'}}>
          {item.category && item.category.length > 20
            ? item.category.substring(0, 20 - 3) + '...'
            : item.category}
        </SmallText> */}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoriesText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          {marginTop: height(0.5)},
        ]}>
        {/* <Image
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={FastImage.resizeMode.contain}
        />
        <SmallText style={{textAlign: 'center'}}>
          {item.category && item.category.length > 20
            ? item.category.substring(0, 20 - 3) + '...'
            : item.category
            ? item.category
            : ''}
        </SmallText>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const CategoriesLeftImage = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          {
            flexWrap: 'wrap',
          },
          // {marginTop: height(0.5)},
        ]}>
        <View style={styles.categoriesLeftImage}>
          <FastImage
            style={imageStyle ? imageStyle : styles.categoriesSmallImage}
            source={source ? source : appImages.item1}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        {Platform.OS == 'ios' ? (
          <SmallText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </SmallText>
        ) : (
          <RegularText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </RegularText>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageSideCategoriesRight = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          {
            flexWrap: 'wrap',
            marginLeft: width(1.5),
            marginTop: height(0.5),
          },
          // {marginTop: height(0.5)},
        ]}>
        <View style={styles.categoriesRightImage}>
          <FastImage
            style={imageStyle ? imageStyle : styles.categoriesLargeImage}
            source={source ? source : appImages.item1}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        {Platform.OS == 'ios' ? (
          <SmallText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </SmallText>
        ) : (
          <RegularText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </RegularText>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageSideCategoriesWOText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          // {marginTop: height(0.5)},
        ]}>
        {/* <Image
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/* <SmallText style={{textAlign: 'center'}}>
          {item.category && item.category.length > 20
            ? item.category.substring(0, 20 - 3) + '...'
            : item.category
            ? item.category
            : ''}
        </SmallText> */}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCategoriesWOText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          styles.ImageHomeBannerContainer,
          containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
        ]}>
        {/* <Image
          style={[styles.categoryImge, imageStyle]}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={[styles.categoryHomeImge, imageStyle]}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
        />
        {/* <SmallText style={{textAlign: 'center'}}>
          {item.category && item.category.length > 20
            ? item.category.substring(0, 20 - 3) + '...'
            : item.category}
        </SmallText> */}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const HomeCategories = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          // styles.ImageHomeBannerContainer,
          // containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          {
            // flex: 1,
            width: Platform.OS == 'ios' ? totalSize(10) : totalSize(11),
            flexWrap: 'wrap',
            marginRight: width(3),
          },
        ]}>
        <View style={styles.homeCategoriesContainer}>
          <FastImage
            style={[
              // styles.categoryHomeImge,
              styles.homeRoundCategoryImage,
              imageStyle,
            ]}
            source={source ? source : appImages.placeHolderProduct}
            resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
          />
        </View>
        {Platform.OS == 'ios' ? (
          <RegularText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </RegularText>
        ) : (
          <RegularText
            style={{
              fontFamily: fontFamily.appTextMedium,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.category && item.category.length > 20
              ? item.category.substring(0, 20 - 3) + '...'
              : item.category}
          </RegularText>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ProductListingCategories = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        height: Platform.OS == 'ios' ? height(25) : height(30),
        marginLeft: width(3),
        marginTop: height(1),
      }}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          // styles.ImageHomeBannerContainer,
          // containerStyle,
          appStyles.center,
          appStyles.shadowSmall,
          {
            // flex: 1,
            // height: height(22),
            width: Platform.OS == 'ios' ? totalSize(8) : totalSize(10),
            flexWrap: 'wrap',
          },
        ]}>
        <View style={styles.homeCategoriesContainer}>
          <FastImage
            style={[
              // styles.categoryHomeImge,
              styles.homeRoundCategoryImage,
              imageStyle,
            ]}
            source={source ? source : appImages.placeHolderProduct}
            resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
          />
        </View>
        {Platform.OS == 'ios' ? (
          <SmallText
            style={{
              fontFamily: fontFamily.appTextRegular,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.name && item.name.length > 20
              ? item.name.substring(0, 20 - 3) + '...'
              : item.name}
          </SmallText>
        ) : (
          <RegularText
            style={{
              fontFamily: fontFamily.appTextRegular,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {item.name && item.name.length > 20
              ? item.name.substring(0, 20 - 3) + '...'
              : item.name}
          </RegularText>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageSubCategoriesText = ({
  item,
  imageStyle,
  source,
  containerStyle,
  animation,
  onPress,
  resizeMode,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Wrapper
        animation={animation ? animation : 'fadeInDown'}
        style={[
          containerStyle,
          appStyles.center,
          // appStyles.shadowSmall,
          // {marginTop: height(0.5)},
        ]}>
        {/* <Image
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? source : appImages.item1}
          resizeMode={resizeMode ? resizeMode : 'contain'}
        /> */}
        <FastImage
          style={imageStyle ? imageStyle : styles.categoriesImage}
          source={source ? {uri: source} : appImages.placeHolderProduct}
          resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.contain}
        />
        <SmallText style={{textAlign: 'center'}}>
          {item.name && item.name.length > 20
            ? item.name.substring(0, 20 - 3) + '...'
            : item.name
            ? item.name
            : ''}
        </SmallText>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const ImageCollectionItem = ({imageStyle, source, containerStyle}) => {
  return (
    <Wrapper style={containerStyle}>
      <Image source={source} style={[styles.ImageCollectionItem, imageStyle]} />
    </Wrapper>
  );
};
export const ImageBackgroundTop = ({imageStyle, source, containerStyle}) => {
  return (
    <AbsoluteWrapper style={[containerStyle]}>
      <Image
        source={source}
        style={[{width: width(100), height: height(45)}, imageStyle]}
      />
      <AbsoluteWrapper
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: colors.appBgColor5 + '40',
        }}
      />
    </AbsoluteWrapper>
  );
};

const styles = StyleSheet.create({
  ImageProfileContainer: {
    ...appStyles.shadowColored,
    // backgroundColor:'transparent',
    borderRadius: 100,
    backgroundColor: colors.appBgColor1,
  },
  homeCategoriesContainer: {
    width: Platform.OS == 'ios' ? totalSize(10) : totalSize(10),
    height: Platform.OS == 'ios' ? totalSize(10) : totalSize(10),
    borderRadius: Platform.OS == 'ios' ? totalSize(10) / 2 : totalSize(10) / 2,
    // backgroundColor: colors.searchBarBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesLeftImage: {
    width: width(24),
    height: Platform.OS == 'ios' ? height(9) : height(10),
    borderRadius: 5,

    // backgroundColor: colors.searchBarBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesRightImage: {
    width: width(35),
    height: Platform.OS == 'ios' ? height(13) : height(16),
    borderRadius: 5,

    // backgroundColor: colors.searchBarBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addProduct: {
    width: width(31),
    height: Platform.OS == 'ios' ? height(3) : height(4),
    marginRight: width(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.statusBarColor,
    borderRadius: 3,
    flexDirection: 'row',
  },
  ImageHomeBannerContainer: {
    // ...appStyles.shadowColored,
    alignSelf: 'center',
  },
  ImageProfile: {
    width: totalSize(15),
    height: totalSize(15),
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.appBgColor1,
  },
  ImageProfileOverlay: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  ImageCollectionItem: {
    width: width(32.5),
    height: height(20),
    borderRadius: 15,
  },
  ImageHomeBanner: {
    width: width(92),
    height: Platform.OS == 'ios' ? height(25) : height(30),
    borderRadius: 15,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  ImageCategoryBanner: {
    width: width(69),
    height: Platform.OS == 'ios' ? height(10) : height(12),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  HomeBanner: {
    width: width(100),
    height: Platform.OS == 'ios' ? height(18) : height(20),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  ImageHomeCategory: {
    width: width(40),
    height: height(30),
    borderRadius: 15,
    marginRight: totalSize(1.5),
    resizeMode: 'contain',
  },
  homeRoundCategoryImage: {
    width: Platform.OS == 'ios' ? totalSize(9) : totalSize(10),
    height: Platform.OS == 'ios' ? totalSize(9) : totalSize(10),
    borderRadius: Platform.OS == 'ios' ? totalSize(9) / 2 : totalSize(10) / 2,
    // marginRight: totalSize(1.5),
    // resizeMode: 'contain',
  },
  categoryImge: {
    width: width(40),
    height: Platform.OS == 'ios' ? height(25) : height(30),
    borderRadius: 5,
    marginRight: totalSize(1.5),
    resizeMode: 'contain',
  },
  categoryHomeImge: {
    width: width(22),
    height: Platform.OS == 'ios' ? height(14) : height(17),
    borderRadius: 10,
    marginRight: totalSize(1.5),
    resizeMode: 'cover',
  },
  categoriesImage: {
    width: width(24),
    height: Platform.OS == 'ios' ? height(7.8) : height(10),
    // resizeMode: 'contain',
  },
  categoriesSmallImage: {
    width: width(22),
    height: Platform.OS == 'ios' ? height(9) : height(10),
    borderRadius: 5,
    // resizeMode: 'contain',
  },
  categoriesLargeImage: {
    width: width(33),
    height: Platform.OS == 'ios' ? height(13) : height(16),
    borderRadius: 5,
    marginLeft: width(0.7),
    marginTop: height(0.5),
    // resizeMode: 'cover',
  },
});
