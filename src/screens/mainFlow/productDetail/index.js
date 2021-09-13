import React, {Fragment, useState, useEffect, Component} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../services/utilities/colors/index';
import {width, height, totalSize} from 'react-native-dimension';
import {
  Spacer,
  SmallText,
  HomeItemCard,
  Wrapper,
  TinierTitle,
  TinyText,
  HeaderSimple,
  FilterProductsModal,
  SliderImages,
  TinyTitle,
  RegularText,
  LineHorizontal,
  MediumText,
  LargeText,
  CustomIcon,
  LoadingCard,
  BottomTabBar,
  ImageProfile,
} from '../../../components';
import {appStyles, sizes} from '../../../services';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {store} from '../../../Redux/configureStore';

export default function ProductDetail({navigation, route}) {
  const [loading, setLoading] = useState(false);
  const [paramData, setParamData] = useState(
    route.params.item ? route.params.item : {},
  );

  // const user = useSelector(state => state.user.user);
  // const user = store.getState().user.user.user;
  const homeData = useSelector(state => state.data);
  const [product, setProduct] = useState(null);
  const [LTR, setLTR] = useState(true);

  console.log(route.params.item);

  // useEffect(async () => {
  //   console.log('product ID in productdetail: ', productId, user.user_id);
  //   setLoading(true);
  //   let language = await AsyncStorage.getItem(storageConst.language);
  //   if (language == 'ar') {
  //     setLTR(false);
  //   }
  //   getProductDetail(productId, user.user_id, onGetResponse, setLoading);
  //   // getProductDetail('48825', user.user_id, onGetResponse, setLoading);
  //   getWishList(user.user_id, onGetWishlistResponse, setwishLoading);
  //   setPQuantity(
  //     store.getState().cart.data && store.getState().cart.data.data
  //       ? store.getState().cart.data.data
  //       : 0,
  //   );
  // }, [user, productId]);

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.activeBottomIcon}
      />
      {loading ? (
        <LoadingCard />
      ) : (
        <SafeAreaView style={[styles.container]}>
          <HeaderSimple
            onBackPress={() => navigation.pop()}
            title={paramData.name.first + ' ' + paramData.name.last}
          />
          <KeyboardAwareScrollView>
            <Wrapper style={[styles.productContainer, appStyles.shadow]}>
              <ImageProfile source={{uri: paramData.picture.large}} />
            </Wrapper>
            <Spacer height={sizes.baseMargin * 1.3} />

            <Spacer height={sizes.smallMargin} />
            <LineHorizontal />
            <Spacer height={sizes.smallMargin} />
            <View
              style={[
                styles.mainViewContainer,
                appStyles.spaceBetween,
                {width: width(100), paddingHorizontal: width(4)},
              ]}>
              <View>
                <TinyTitle>Details</TinyTitle>
                <Spacer height={sizes.TinyMargin} />
                <RegularText>
                  {'Email: '}
                  {paramData.email}
                </RegularText>
                <RegularText>
                  {'Date Joined: '}
                  {moment(paramData.registered.date).fromNow()}
                </RegularText>
                <RegularText>
                  {'DOB: '}
                  {moment(paramData.dob.date).format('MMMM Do YYYY')}
                </RegularText>
              </View>

              <Spacer height={sizes.smallMargin} />
              <LineHorizontal />
              <Spacer height={sizes.smallMargin} />
              <View>
                <TinyTitle>Location</TinyTitle>
                <Spacer height={sizes.TinyMargin} />
                <RegularText>
                  {'Email: '}
                  {paramData.email}
                </RegularText>
                <RegularText>
                  {'Date Joined: '}
                  {moment(paramData.registered.date).fromNow()}
                </RegularText>
                <RegularText>
                  {'DOB: '}
                  {moment(paramData.dob.date).format('MMMM Do YYYY')}
                </RegularText>
              </View>
            </View>
            <Spacer height={sizes.smallMargin} />
            <LineHorizontal />
            <Spacer height={sizes.smallMargin} />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </Fragment>
  );
}
