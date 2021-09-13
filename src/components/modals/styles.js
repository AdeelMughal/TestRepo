import {StyleSheet} from 'react-native';
import {sizes, colors, appStyles} from '../../services';
import {width, height, totalSize} from 'react-native-dimension';

export const styles = StyleSheet.create({
  professionsCard: {
    //borderColor:colors.appBgColor3,
    marginBottom: sizes.marginBottom,
  },
  selectedProfessionsCard: {
    // borderColor:colors.appTextColor1,
    backgroundColor: colors.appBgColor2,
    marginBottom: sizes.marginBottom,
  },

  ////SwipableModal
  swipableModalFooter: {
    backgroundColor: colors.appBgColor1,
    borderTopLeftRadius: sizes.cardRadius,
    borderTopRightRadius: sizes.cardRadius,
    paddingTop: sizes.baseMargin,
    ...appStyles.shadowDark,
  },
  barContainer: {
    top: sizes.TinyMargin,
    alignSelf: 'center',
  },
  //EnterValueModalPrimaryCard
  enterValueModalPrimaryCard: {
    backgroundColor: colors.appBgColor1,
    borderRadius: sizes.modalRadius,
    padding: sizes.baseMargin,
    marginHorizontal: sizes.marginHorizontal * 4,
    ...appStyles.shadow,
  },
  emiratesCardContainer: {
    // flex: 1,
    // height: Platform.OS == 'ios' ? height(40) : height(44),
    backgroundColor: colors.appBgColor1,
    borderRadius: 5,
    padding: sizes.baseMargin,
    marginHorizontal: sizes.marginHorizontal,
    ...appStyles.shadow,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  inputfieldStyle: {
    // paddingHorizontal: totalSize(1),
    flex: 1,
    marginHorizontal: 0,
    borderRadius: 4,
    backgroundColor: colors.silver,
    elevation: 0.4,
  },
  fieldStyle: {
    backgroundColor: colors.silver,
    height: Platform.OS == 'ios' ? height(5) : height(6),
    paddingHorizontal: totalSize(1),
  },
  cameraContainer: {
    flex: 1,
    height: height(16),
    backgroundColor: colors.greyBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
