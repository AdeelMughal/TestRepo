// import React, {Fragment, useState, useEffect, Component} from 'react';
// import {UIManager, LayoutAnimation, Platform} from 'react-native';
// import {
//   addToCartTest,
//   deleteProductFromCart,
//   addToWishList,
//   deleteProductFromWishList,
//   deleteProductWithProductIdList,
// } from '../../services/api/cart.api';
// import {store} from '../../Redux/configureStore';
// import {fetchCartData} from '../../Redux/Actions/index';
// import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-community/async-storage';
// import i18n from 'i18n-js';
// import memoize from 'lodash.memoize';

// import Geocoder from 'react-native-geocoding';
// import {storageConst} from '../constants';
// import {lang} from 'moment';

// // Initialize the module (needs to be done only once)
// Geocoder.init('AIzaSyCG4ylljvLJbTAjcjk6FJhIPuYdDEAnUfQ'); // use a valid API key
// // With more options
// // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

// // Search by address
// // Geocoder.from("Colosseum")
// // 		.then(json => {
// // 			var location = json.results[0].geometry.location;
// // 			console.log(location);
// // 		})
// // 		.catch(error => console.warn(error));

// // Search by address, with a biased geo-bounds
// // Geocoder.from("Pyramid", {
// //   southwest: {lat: 36.05, lng: -115.25},
// //   northeast: {lat: 36.16, lng: -115.10}})
// //   .then(json => {
// //     var location = json.results[0].geometry.location;
// //     console.log(location);
// //   })
// //   .catch(error => console.warn(error));

// export const GetAddressFromCoords = async (lat, lng, setResponse) => {
//   // Search by geo-location (reverse geo-code)
//   await Geocoder.from(lat, lng)
//     .then(async json => {
//       var addressComponent =
//         json.results[0].address_components[0].long_name +
//         ', ' +
//         json.results[0].address_components[1].long_name;
//       console.log('Reverse geocoding: ', json);
//       setResponse(json);
//     })
//     .catch(error => console.warn(error));
// };

// // Works as well :
// // ------------

// // location object
// // Geocoder.from({
// // 	latitude : 41.89,
// // 	longitude : 12.49
// // });

// // latlng object
// // Geocoder.from({
// // 	lat : 41.89,
// // 	lng : 12.49
// // });

// // array
// // Geocoder.from([41.89, 12.49]);

// export const Translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );

// export const HelpingMethods = {
//   handleAnimation: () => {
//     if (Platform.OS === 'android') {
//       UIManager.setLayoutAnimationEnabledExperimental &&
//         UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//   },
//   checkExpiry: () => {
//     var d1 = Date.parse('2012-11-01');
//     var d2 = Date.parse('2012-11-04');
//     var expiryDate = Date.parse('2020-12-18');
//     var currentDate = Date.now();
//     console.log(expiryDate > currentDate);
//     if (expiryDate < currentDate) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   compareDate: () => {
//     var date1 = new Date('December 25, 2017 01:30:00');
//     var date2 = new Date('June 18, 2016 02:30:00');
//     console.log(date1.getTime() > date2.getTime());
//     //best to use .getTime() to compare dates
//     //if (date1.getTime() === date2.getTime()) {
//     //same date
//     //}

//     if (date1.getTime() > date2.getTime()) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// export const AddToWishListMethod = async ({item, user, getWishResponse}) => {
//   let language = await AsyncStorage.getItem(storageConst.language);
//   if (language == null || language == undefined) language = 'en';

//   let data = {
//     user_id: user.user_id,
//     product_data: [
//       {
//         amount: '1',
//         product_id: item.product_id,
//         product_options: [],
//       },
//     ],
//     lang_code: language,
//     currency_code: 'AED',
//   };
//   addToWishList(data, getWishResponse);
// };

// export const AddToComparisonListMethod = async ({
//   item,
//   user,
//   getCartResponse,
// }) => {
//   let language = await AsyncStorage.getItem(storageConst.language);
//   if (language == null || language == undefined) language = 'en';
//   let data = {
//     user_id: user.user_id,
//     product_data: [
//       {
//         amount: '1',
//         product_id: item.product_id,
//         product_options: [],
//       },
//     ],
//     lang_code: language,
//     currency_code: 'AED',
//   };
//   addToCartTest(data, getCartResponse);
// };

// export const AddToCartMethod = async ({item, user, getCartResponse}) => {
//   let language = await AsyncStorage.getItem(storageConst.language);
//   if (language == null || language == undefined) language = 'en';
//   let data = {
//     user_id: user.user_id,
//     product_data: [
//       {
//         amount: '1',
//         product_id: item.product_id,
//         product_options: [],
//       },
//     ],
//     lang_code: language,
//     currency_code: 'AED',
//   };
//   addToCartTest(data, getCartResponse);
// };

// export const ApplyCouponCode = async ({coupon_code, user, getCartResponse}) => {
//   let language = await AsyncStorage.getItem(storageConst.language);
//   if (language == null || language == undefined) language = 'en';

//   let data = {
//     user_id: user.user_id,
//     coupon_code: coupon_code,
//     lang_code: language,
//     currency_code: 'AED',
//   };
//   addToCartTest(data, getCartResponse);
// };

// export const ATCMultipleProductsMethod = async ({
//   product_id,
//   amount,
//   user,
//   getCartResponse,
// }) => {
//   let data = {
//     user_id: user.user_id,
//     product_data: [
//       {
//         amount: amount,
//         product_id: product_id,
//         product_options: [],
//       },
//     ],
//     lang_code: 'en',
//     currency_code: 'AED',
//   };
//   console.log('Data: ', data);
//   addToCartTest(data, getCartResponse);
// };

// export const ATCIncrementDecrementProductsMethod = async ({
//   product_id,
//   item_id,
//   amount,
//   user,
//   getCartResponse,
// }) => {
//   let data = {
//     user_id: user.user_id,
//     cart_product: {
//       amount: amount,
//       product_id: product_id,
//       item_id: item_id,
//     },
//     lang_code: 'en',
//     currency_code: 'AED',
//   };
//   deleteProductFromCart(data, getCartResponse);
// };

// export const RemoveProductFromCartMethod = async ({
//   product_id,
//   item_id,
//   user,
//   getCartResponse,
// }) => {
//   let data = {
//     user_id: user.user_id,
//     cart_product: {
//       amount: 0,
//       product_id: product_id,
//       item_id: item_id,
//     },
//     lang_code: 'en',
//     currency_code: 'AED',
//   };
//   console.log('request: ', data);
//   deleteProductFromCart(data, getCartResponse);
// };

// export const RemoveProductFromWishListMethod = async ({
//   item_id,
//   getWishResponse,
// }) => {
//   deleteProductFromWishList(item_id, getWishResponse);
// };

// export const RemoveProductFromWLMethod = async ({
//   user_id,
//   product_id,
//   getWishResponse,
// }) => {
//   let language = await AsyncStorage.getItem(storageConst.language);
//   if (language == null || language == undefined) language = 'en';

//   let wishData = {
//     user_id: user_id,
//     product_id: product_id,
//     lang_code: language,
//     currency_code: 'AED',
//   };
//   deleteProductWithProductIdList(wishData, getWishResponse);
// };

// // export const SearchFilterFunction = (text) => {
// //   if (text != '') {
// //     //passing the inserted text in textinput
// //     const newData = this.state.friends.filter(function(item) {
// //       //applying filter for the inserted text in search bar
// //       const itemData = item ? item.toUpperCase() : ''.toUpperCase();
// //       const textData = text.toUpperCase();
// //       return itemData.indexOf(textData) > -1;
// //     });

// //     this.setState({
// //       filterFriendsName: newData,
// //       search: text,
// //     });
// //   } else {
// //     this.setState({
// //       filterFriendsName: [],
// //       search: text,
// //     });
// //   }
// //   console.log(this.state.filterFriendsName);
// // }

// // export const handleSearchRankClick = (name) => {
// //   // alert(name);
// //   const {allFriendsData} = this.state;
// //   let imageUri = '';
// //   for (let i = 0; i < allFriendsData.length; i++) {
// //     if (allFriendsData[i].Name == name) {
// //       this.setState({PlayerImage: allFriendsData[i].ImageUri});
// //       imageUri = allFriendsData[i].ImageUri;
// //       // break;
// //     }
// //   }
// //   console.log('JD image = ', name);
// //   let saveObject = {
// //     PlayerName: name,
// //     PlayerImage: imageUri,
// //     GameType1: this.state.GType1,
// //     GameType2: this.state.GType2,
// //     Source: 'Telling',
// //   };
// //   this.setState({
// //     filterFriendsName: [],
// //     search: name,
// //     gameFinalObject: saveObject,
// //   });
// // }
