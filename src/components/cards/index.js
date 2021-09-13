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
  sizes,
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
import {Spacer} from '../spacers';
import FastImage from 'react-native-fast-image';
import moment from 'moment';

export const LoadingCard = () => {
  return (
    <MainWrapper
      animation="fadeIn"
      style={[appStyles.center, {backgroundColor: colors.snow}]}>
      <Spacer height={height(2)} />
      <Image
        source={appImages.loaderGif}
        style={{
          width: totalSize(10),
          height: totalSize(10),
          resizeMode: 'contain',
        }}
        resizeMode={'contain'}
      />
    </MainWrapper>
  );
};
export const LoadingCardCustom = ({gif, text}) => {
  return (
    <MainWrapper
      animation="fadeIn"
      style={[appStyles.center, {backgroundColor: colors.snow}]}>
      <Spacer height={height(2)} />
      <Image
        source={gif ? gif : appImages.gif1}
        style={{width: width(80), height: height(25), resizeMode: 'contain'}}
        resizeMode={'contain'}
      />
      <Spacer height={height(6)} />
      <Wrapper animation="fadeIn" duration={2000}>
        <View
          style={{
            borderRadius: 5,
            paddingVertical: 10,
            backgroundColor: colors.gradient1,
            marginHorizontal: width(5),
          }}>
          <MediumText
            style={[
              appStyles.textWhite,
              {textAlign: 'center', marginHorizontal: width(3)},
            ]}>
            {text}
          </MediumText>
        </View>
      </Wrapper>
    </MainWrapper>
  );
};
export const NoInternetCard = () => {
  return (
    <MainWrapper
      animation="fadeIn"
      style={[appStyles.center, {backgroundColor: colors.snow}]}>
      <Spacer height={height(2)} />
      <Image
        source={appImages.noInternetGif}
        style={{width: width(80), height: height(25), resizeMode: 'contain'}}
        resizeMode={'contain'}
      />
    </MainWrapper>
  );
};

export const Card = ({style, width, height}) => {
  return <CardWrapper></CardWrapper>;
};
export const TestCard = ({style, onPress, icon, iconSize, item, animation}) => {
  return (
    <Animatable.View animation={animation ? animation : 'fadeInDown'}>
      <TouchableOpacity
        style={[styles.testCardContainer, style]}
        // onPress={onPress}
      >
        <View style={[styles.onlyRow, styles.container, {alignItems: null}]}>
          <View style={appStyles.center}>
            <View style={styles.iconContainer}>
              <CustomIcon
                icon={item.img}
                size={iconSize ? iconSize : totalSize(3)}
              />
            </View>
            <TinyText style={{marginTop: height(0.6)}}>{item.name}</TinyText>
          </View>
          <View style={{marginLeft: width(3.5)}}>
            <View style={styles.onlyRow}>
              <SmallText style={{color: colors.textGrey1}}>Status: </SmallText>
              <SmallText
                style={{
                  color:
                    item.status == 'Confirmed'
                      ? colors.statusBarColor
                      : colors.gradient1,
                }}>
                {item.status}
              </SmallText>
            </View>
            <View style={[styles.onlyRow, {marginTop: height(0.8)}]}>
              <SmallText style={{color: colors.textGrey1}}>
                {item.status == 'Confirmed' ? 'Test Type: ' : 'Test Reslt: '}
              </SmallText>
              <SmallText>
                {item.status == 'Confirmed' ? item.name : item.testResult}
              </SmallText>
            </View>
            <View style={[styles.onlyRow, {marginTop: height(0.8)}]}>
              <SmallText style={{color: colors.textGrey1}}>Date: </SmallText>
              <SmallText>{item.date}</SmallText>
            </View>
          </View>
        </View>

        {item.status == 'Confirmed' ? (
          <View style={appStyles.center}>
            <SmallText>Token Number</SmallText>
            <View style={styles.tokenContainer}>
              {Platform.OS == 'ios' ? (
                <TinyTitle style={appStyles.whiteText}>
                  {item.tokenNumber}
                </TinyTitle>
              ) : (
                <SmallTitle style={appStyles.whiteText}>
                  {item.tokenNumber}
                </SmallTitle>
              )}
            </View>
            <TinyText
              style={{
                color: colors.textGrey,
              }}>{`Time: ${item.time}`}</TinyText>
          </View>
        ) : (
          <View style={appStyles.center}>
            <TouchableCustomIcon
              onPress={onPress}
              icon={appImages.downloadPrescription}
              size={totalSize(3.5)}
            />
            <TinyText
              style={{
                color: colors.statusBarColor,
                marginTop: height(0.5),
              }}>
              Download
            </TinyText>
            <TinyText
              style={{
                color: colors.statusBarColor,
              }}>
              Report
            </TinyText>
          </View>
        )}
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const HomeItemCard = ({style, onPress, item, animation}) => {
  return (
    <Animatable.View
      animation={animation ? animation : 'fadeInDown'}
      style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={[styles.productContainer, style]}
        onPress={onPress}>
        <FastImage
          style={[styles.productImageImge]}
          source={{uri: item.picture.medium}}
          resizeMode="contain"
        />
        <View
          style={{
            paddingLeft: width(4),
          }}>
          <RegularText>
            {item.name.title + ' ' + item.name.first + ' ' + item.name.last}
          </RegularText>
          <SmallText>{item.email}</SmallText>
          <SmallText>{item.phone}</SmallText>
          <SmallText>
            {item.location.city + ', ' + item.location.country}
          </SmallText>
          <SmallText>{moment(item.registered.date).fromNow()}</SmallText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.addCartButton,
          {
            marginTop: -height(2.5),
          },
        ]}>
        {Platform.OS == 'ios' ? (
          <TinyText style={styles.cartButtonText}>See Details</TinyText>
        ) : (
          <SmallText style={styles.cartButtonText}>See Details</SmallText>
        )}
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const ComparisonItemCard = ({style, onPress, item, animation}) => {
  return (
    <Animatable.View animation={animation ? animation : 'fadeInDown'}>
      <TouchableOpacity
        style={[styles.comparisonContainer, style]}
        onPress={onPress}>
        <View style={[styles.imagesRowContainer]}>
          <View />
          <Image
            style={styles.productImageImge}
            source={item.img}
            // resizeMode="cover"
          />
          <View />
        </View>
        <View style={{paddingVertical: totalSize(1), paddingLeft: width(2)}}>
          {Platform.OS == 'ios' ? (
            <>
              <SmallText style={{color: colors.textGrey}}>
                {item.titl1}
              </SmallText>
              <SmallText style={{color: colors.textGrey}}>
                {item.title2}
              </SmallText>
              <SmallText style={{color: colors.textGrey}}>
                {item.quantity}
              </SmallText>
              <View style={styles.onlyRow}>
                <SmallText style={{color: colors.textGrey}}>AED </SmallText>
                <TinierTitle>{item.price}</TinierTitle>
              </View>
            </>
          ) : (
            <>
              <RegularText style={{color: colors.textGrey}}>
                {item.titl1}
              </RegularText>
              <RegularText style={{color: colors.textGrey}}>
                {item.title2}
              </RegularText>
              <RegularText style={{color: colors.textGrey}}>
                {item.quantity}
              </RegularText>
              <View style={styles.onlyRow}>
                <RegularText style={{color: colors.textGrey}}>AED </RegularText>
                <TinyTitle style={{fontWeight: 'bold', color: colors.textGrey}}>
                  {item.price}
                </TinyTitle>
              </View>
            </>
          )}
        </View>
        <TouchableOpacity style={[styles.addCartButton, {alignSelf: 'center'}]}>
          {Platform.OS == 'ios' ? (
            <TinyText style={styles.cartButtonText}>Add to Cart</TinyText>
          ) : (
            <SmallText style={styles.cartButtonText}>Add to Cart</SmallText>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </Animatable.View>
  );
};
export const WishListCard = ({
  style,
  onPress,
  addToCartPress,
  deleteItemPress,
  item,
  animation,
  LTR,
}) => {
  return (
    <Animatable.View
      animation={animation ? animation : 'fadeInDown'}
      style={{alignItems: 'center', marginRight: totalSize(1.5)}}>
      <TouchableOpacity
        style={[styles.productContainer, style]}
        onPress={onPress}>
        <View style={[styles.imagesRowContainer]}>
          <View />
          <Image
            style={styles.productImageImge}
            source={
              item.image_url && item.image_url != ''
                ? {uri: item.image_url}
                : appImages.placeHolderProduct
            }
            resizeMode="contain"
          />
          <TouchableCustomIcon
            icon={appImages.crossIcon}
            size={Platform.OS == 'ios' ? totalSize(3) : totalSize(3.5)}
            onPress={deleteItemPress}
          />
        </View>
        <View style={{paddingVertical: totalSize(1)}}>
          <RegularText
            style={{
              fontFamily: fontFamily.appTextLight,
              textAlign: LTR ? 'left' : 'right',
            }}>
            {item.product && item.product.length > 28
              ? item.product.substring(0, 28 - 3) + '...'
              : item.product
              ? item.product
              : 'Dummy Product'}
          </RegularText>
          <RegularText
            style={{color: colors.textGrey, textAlign: LTR ? 'left' : 'right'}}>
            {item.company_name}
          </RegularText>
          {Platform.OS == 'ios' ? (
            <TinierTitle style={{textAlign: LTR ? 'left' : 'right'}}>
              {item.format_price}
            </TinierTitle>
          ) : (
            <TinyTitle style={{textAlign: LTR ? 'left' : 'right'}}>
              {item.format_price}
            </TinyTitle>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={addToCartPress}
        style={[
          styles.addCartButton,
          {
            marginTop: -height(2.5),
          },
        ]}>
        {Platform.OS == 'ios' ? (
          <TinyText style={styles.cartButtonText}>
            {Translate('Add To Cart')}
          </TinyText>
        ) : (
          <SmallText style={styles.cartButtonText}>
            {Translate('Add To Cart')}
          </SmallText>
        )}
      </TouchableOpacity>
    </Animatable.View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bgLight,
  },
  tokenContainer: {
    width: Platform.OS == 'ios' ? width(16) : width(12),
    height: height(6),
    borderRadius: 5,
    marginVertical: height(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.statusBarColor,
  },
  iconContainer: {
    width: Platform.OS == 'ios' ? width(16) : width(12),
    height: height(7),
    borderRadius: 5,
    // paddingVertical: height(1),
    // marginVertical: height(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.iconBgGre,
  },
  alignCenter: {
    alignItems: 'center',
  },
  bottomNavBar: {
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    justifyContent: 'space-around',
    paddingVertical: totalSize(1.5),
    elevation: 5,
    marginTop: totalSize(5),
  },
  navBarText: {
    fontSize: totalSize(1.4),
    color: colors.textGrey,
    marginTop: totalSize(0.4),
  },
  productImageImge: {
    width: width(22),
    height: Platform.OS == 'ios' ? height(14) : height(18),
    marginTop: totalSize(1.8),
    borderRadius: totalSize(2),
  },
  iconStyle: {
    width: totalSize(3),
    height: totalSize(3),
  },
  imagesRowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: totalSize(0.5),
  },
  productContainer: {
    width: width(92),
    // height: Platform.OS == 'ios' ? height(30) : height(28),
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.borderLightColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: totalSize(1),
    paddingHorizontal: width(3),
    paddingBottom: height(2),
  },
  comparisonContainer: {
    backgroundColor: colors.snow,
    paddingHorizontal: totalSize(0.8),
    paddingVertical: totalSize(0.8),
  },
  testCardContainer: {
    width: width(100),
    // height: height(12),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderLightColor, //textGrey
    paddingHorizontal: width(4),
    paddingVertical: height(2),
    marginTop: height(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  addCartButton: {
    // paddingHorizontal: totalSize(2),
    width: width(35),
    paddingVertical: totalSize(1),
    borderRadius: totalSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.activeBottomIcon,
  },
  cartButtonText: {
    fontSize: totalSize(1.5),
    color: colors.snow,
    fontFamily: fontFamily.appTextMedium,
  },
  productRegularText: {
    fontSize: totalSize(1.8),
    color: colors.textGrey,
    fontWeight: '800',
  },
  priceText: {
    fontSize: totalSize(2.1),
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  categoryImge: {
    width: width(40),
    height: height(30),
    borderRadius: 15,
    marginRight: totalSize(1.5),
  },
  parentColorContainer: {
    flex: 1,
    width: width(100),
    backgroundColor: colors.blueBitLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blueLighter,
  },
  serviceContainer: {
    flex: 1,
  },
  headerContainer: {
    width: width(100),
    backgroundColor: colors.greenLighter,
    borderBottomLeftRadius: totalSize(5),
    borderBottomRightRadius: totalSize(5),
    borderWidth: 1,
    borderColor: colors.greenBitLight,
  },
  headerText: {
    fontSize: totalSize(2.6),
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: totalSize(1.8),
  },
  viewAllButton: {
    borderWidth: 1,
    paddingVertical: Platform.OS == 'ios' ? totalSize(0.1) : totalSize(0.3),
    paddingHorizontal: totalSize(0.9),
    backgroundColor: colors.snow,
    borderColor: colors.gradient1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryMainContainer: {
    // paddingVertical: totalSize(1.5),
    marginLeft: width(4),
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  titleRowContainer: {
    // width: width(90),
    paddingRight: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerImage: {
    width: width(90),
    height: height(30),
    marginTop: totalSize(2),
    borderRadius: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  simpleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfieldStyle: {
    paddingHorizontal: totalSize(1),
    flex: 1,
  },
  searchBarStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: totalSize(2),
    backgroundColor: colors.snow,
    borderRadius: 10,
    paddingHorizontal: totalSize(1.3),
    height: height(6),
    // paddingVertical: totalSize(0.6),
  },
  prescriptionButton: {
    paddingHorizontal: totalSize(0.5),
    // paddingVertical: totalSize(0.5),
    height: totalSize(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradientwrap: {
    paddingHorizontal: totalSize(0.5),
    paddingVertical: totalSize(0.5),
    borderRadius: totalSize(5),
    height: totalSize(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: totalSize(20),
    width: totalSize(30),
    borderRadius: 100,
    //marginTop: 350
  },
  searchContainer: {
    width: width(80),
    height: height(7),
    backgroundColor: colors.snow,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: height(3),
    alignSelf: 'center',
    borderRadius: width(2),
    flexDirection: 'row',
    paddingHorizontal: width(2),
  },
  search: {
    backgroundColor: colors.snow,
    width: width(50),
    alignSelf: 'center',
  },
  headerText: {
    fontSize: height(2.5),
    color: colors.appColor1,
    marginLeft: width(3),
  },
  headerText1: {
    fontSize: height(1.5),
    color: colors.black,
    marginLeft: width(3),
  },
  flatListContainer: {
    width: width(90),
    height: height(10),
    borderRadius: height(2),
    backgroundColor: colors.snow,
    marginLeft: width(5),
    marginTop: height(1),
    elevation: 3,
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
    alignSelf: 'center',
  },
  flatListInnerContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width(2),
    marginTop: totalSize(1),
  },
  flatListInnerContainer1: {
    flexDirection: 'row',
    zIndex: 0,
  },
  drawerContainer: {
    height: height(7),
    width: height(7),
    borderRadius: height(5),
    backgroundColor: colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: height(15),
    right: width(20),
    zIndex: 1,
  },
});
