import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import {sizes} from '../../services';
import {colors} from '../../services/utilities/colors/index';
import {BackIcon} from '../icons';
import * as Animatable from 'react-native-animatable';
import {TinyTitle} from '../text';
import {store} from '../../Redux/configureStore';

export const HeaderSimple = ({onBackPress, animation, title}) => {
  return (
    <Animatable.View animation={animation ? animation : 'fadeInDown'}>
      <View
        style={[
          styles.row,
          {
            width: width(100),
            paddingRight: width(5),
            backgroundColor: colors.activeBottomLight,
            marginTop: Platform.OS == 'ios' ? 0 : sizes.baseMargin,
          },
        ]}>
        <View style={styles.onlyRow}>
          <BackIcon onPress={onBackPress} />
          <TinyTitle>{title}</TinyTitle>
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bgLight,
  },
  headerText: {
    fontSize: totalSize(2.6),
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: totalSize(1.8),
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

  headerText: {
    fontSize: height(2.5),
    color: colors.appColor1,
    marginLeft: width(3),
  },
});
