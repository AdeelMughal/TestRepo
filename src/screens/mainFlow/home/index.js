import React, {Fragment, useState, useEffect, Component} from 'react';
import {StatusBar, SafeAreaView, View, FlatList} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CommonActions} from '@react-navigation/native';
import {colors} from '../../../services/utilities/colors/index';
import {width, height, totalSize} from 'react-native-dimension';
import {LoadingCard, HomeItemCard} from '../../../components';
import {routes} from '../../../services';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

export default function Home({navigation, route}) {
  const [loading, setLoading] = useState(true);
  const updatedData = useSelector(state => state.data);
  console.log('updated data called from home : ', updatedData.data);

  const [homeData, setHomeData] = useState([]);
  useEffect(async () => {
    setHomeData(updatedData.data);
    setLoading(false);
  }, [updatedData]);

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.activeBottomIcon}
      />
      {loading ? (
        <LoadingCard />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <FlatList
              data={homeData}
              extraData={homeData}
              // horizontal
              contentContainerStyle={{
                alignItems: 'center',
              }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={(contact, index) => String(index)}
              renderItem={({index, item}) => (
                <HomeItemCard
                  item={item}
                  onPress={() => {
                    navigation.navigate(routes.productDetail, {
                      item,
                    });
                  }}
                />
              )}
            />
          </View>
        </SafeAreaView>
      )}
    </Fragment>
  );
}
