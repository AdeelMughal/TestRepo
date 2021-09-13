import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './card.Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../services/utilities/colors/index';
import {height} from 'react-native-dimension';
import otp from '../../assets/images/image1.png';
import {useNavigation} from '@react-navigation/native';
import GlobalConst from '../../services/Global/GlobalConst';

const Component = ({item, completed, disabled, onPress, onPressCall}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.card1}>
          <View style={styles.card1Inner}>
            <Image
              source={
                item.providerImage == '' ? otp : {uri: item.providerImage}
              }
              style={styles.image}
            />

            {item.job == ' ' ? (
              <Text style={styles.cardName}>{item.providerName}</Text>
            ) : (
              <View>
                <Text style={styles.cardName}>
                  {item.providerName && item.providerName}
                </Text>
                <Text style={styles.cardJob}>
                  {item.services && item.services.length
                    ? item.services[0].name
                    : '0'}
                </Text>
                <Text style={styles.cardJob}>status: {item.status}</Text>
              </View>
            )}
          </View>
          {completed ? (
            <View style={styles.card1}>
              <Text style={styles.price}>
                {' '}
                ${' '}
                {item.services && item.services.length
                  ? item.services[0].price
                  : '0'}
              </Text>
            </View>
          ) : (
            <View style={styles.card1}>
              <TouchableOpacity
                onPress={onPressCall}
                style={styles.cardIconContainer}>
                <FontAwesome
                  name="phone"
                  size={height(3)}
                  color={colors.appColor1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  GlobalConst.CurrentService = item;
                  navigation.navigate('chat');
                }}
                style={styles.cardIconContainer}>
                <MaterialIcons
                  name="sms"
                  size={height(3)}
                  color={colors.appColor1}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Text style={styles.cardDate}>Date</Text>
        <Text style={styles.cardDate1}>{item.date}</Text>
        <Text style={styles.cardDate}>Time</Text>
        <Text style={styles.cardDate1}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Component;
