import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewPropTypes,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, sizes, appStyles, appImages, Translate} from '../../services';
import {
  CardWrapper,
  RowWrapper,
  ComponentWrapper,
  Wrapper,
  AbsoluteWrapper,
} from '../wrappers';
import {Spacer} from '../spacers';
import {TinyTitle, RegularText, SmallText} from '../text';
import {
  TextInputColored,
  TextInputBordered,
  TextInputColoredModal,
} from '../textInput';
import Modal from 'react-native-modal';
import {CheckBoxPrimary} from '../checkBoxs';
import {ButtonColored, ButtonGradiantColored, ButtonBordered} from '../buttons';
import {SearchIcon, CloseIcon, TouchableCustomIcon} from '../icons';
import {styles} from './styles';
import {LineHorizontal} from '../lines';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';

export const SwipableModal = ({
  children,
  title,
  isVisible,
  toggleModal,
  footerFlex,
  headerFlex,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      style={{margin: 0}}
      // backdropOpacity={0}
      onBackdropPress={toggleModal}>
      <Wrapper flex={1}>
        <Wrapper flex={headerFlex ? headerFlex : 1.5} />
        <Wrapper
          flex={footerFlex ? footerFlex : 8.5}
          style={[styles.swipableModalFooter]}>
          {children}
          <AbsoluteWrapper style={[styles.barContainer]}>
            <Wrapper style={[appStyles.center]}>
              <TouchableOpacity onPress={toggleModal}>
                <LineHorizontal
                  height={4}
                  width={width(15)}
                  style={{borderRadius: 5}}
                  color={colors.appBgColor3}
                />
              </TouchableOpacity>
              <Spacer height={sizes.baseMargin} />
              <TinyTitle>{title}</TinyTitle>
            </Wrapper>
          </AbsoluteWrapper>
          <AbsoluteWrapper
            style={[
              {top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal},
            ]}>
            <CloseIcon onPress={toggleModal} />
          </AbsoluteWrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};

export const AddValueModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.enterValueModalPrimaryCard]}>
        <TinyTitle>{title ? title : 'Title'}</TinyTitle>
        <Spacer height={sizes.baseMargin} />
        <TextInputBordered
          placeholder={placeholder}
          value={value}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          inputContainerStyle={{marginHorizontal: 0}}
        />
        <Spacer height={sizes.baseMargin} />
        <ButtonColored
          text={buttonText ? buttonText : 'ADD'}
          onPress={onPressButton}
          buttonStyle={{marginHorizontal: 0}}
        />
        {children}
      </CardWrapper>
    </Modal>
  );
};

export const UploadEmiratesIdModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
  onPressFront,
  onPressBack,
  frontImage,
  backImage,
  loading,
  textValue,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.emiratesCardContainer]}>
        <View style={[styles.row, styles.spaceBetween]}>
          <TinyTitle>{title ? title : Translate('Add Emirates ID')}</TinyTitle>
          <TouchableCustomIcon
            onPress={toggleModal}
            icon={appImages.crossIcon}
            size={totalSize(3)}
          />
        </View>
        <Spacer height={sizes.baseMargin * 1.8} />
        <View
          style={{
            height: Platform.OS == 'ios' ? height(6) : height(8),
          }}>
          <TextInputColored
            containerStyle={[styles.inputfieldStyle]}
            fieldStyle={[styles.fieldStyle]}
            placeholder={Translate('Emirates ID Name')}
            onChangeText={onChangeText}
            value={textValue}
            autoFocus={true}
          />
        </View>
        <Spacer height={sizes.baseMargin * 1.8} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPressFront}
            style={[
              styles.cameraContainer,
              {
                marginRight: width(2),
              },
            ]}>
            <TouchableCustomIcon icon={frontImage} onPress={onPressFront} />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              {Translate('Front Side')}
            </SmallText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressBack}
            style={[
              styles.cameraContainer,
              {
                marginLeft: width(2),
              },
            ]}>
            <TouchableCustomIcon icon={backImage} onPress={onPressBack} />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              {Translate('Back Side')}
            </SmallText>
          </TouchableOpacity>
        </View>
        <Spacer height={sizes.baseMargin} />
        <View>
          <ButtonColored
            isLoading={loading}
            text={buttonText ? buttonText : Translate('SAVE')}
            onPress={onPressButton}
            buttonStyle={{
              marginHorizontal: 0,
              height: Platform.OS == 'ios' ? height(6) : height(7),
              borderRadius: 5,
            }}
          />
        </View>
      </CardWrapper>
    </Modal>
  );
};

export const UploadInsuranceCardModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  onPressButton,
  autoFocus,
  onPressFront,
  onPressBack,
  frontImage,
  backImage,
  textValue,
  loading,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.emiratesCardContainer]}>
        <View style={[styles.row, styles.spaceBetween]}>
          <TinyTitle>
            {title ? title : Translate('Add Insurance Card')}
          </TinyTitle>
          <TouchableCustomIcon
            onPress={toggleModal}
            icon={appImages.crossIcon}
            size={totalSize(3)}
          />
        </View>
        <Spacer height={sizes.baseMargin} />
        <View
          style={{
            height: Platform.OS == 'ios' ? height(6) : height(8),
          }}>
          <TextInputColoredModal
            containerStyle={[styles.inputfieldStyle]}
            fieldStyle={[styles.fieldStyle]}
            placeholder={Translate('Insurance Name')}
            onChangeText={onChangeText}
            value={textValue}
            autoFocus={true}
          />
        </View>
        <Spacer height={sizes.baseMargin * 1.8} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={onPressFront}
            style={[
              styles.cameraContainer,
              {
                marginRight: width(2),
              },
            ]}>
            <TouchableCustomIcon
              icon={frontImage}
              onPress={onPressFront}
              size={totalSize(6)}
            />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              {Translate('Front Side')}
            </SmallText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressBack}
            style={[
              styles.cameraContainer,
              {
                marginLeft: width(2),
              },
            ]}>
            <TouchableCustomIcon
              icon={backImage}
              onPress={onPressBack}
              size={totalSize(6)}
            />
            <SmallText style={{color: colors.textGrey, marginTop: height(2)}}>
              {Translate('Back Side')}
            </SmallText>
          </TouchableOpacity>
        </View>
        <Spacer height={sizes.baseMargin} />
        <View>
          <ButtonColored
            isLoading={loading}
            text={buttonText ? buttonText : Translate('SAVE')}
            onPress={onPressButton}
            buttonStyle={{
              marginHorizontal: 0,
              height: Platform.OS == 'ios' ? height(6) : height(7),
              borderRadius: 5,
            }}
          />
        </View>
      </CardWrapper>
    </Modal>
  );
};

export const FilterProductsModal = ({
  children,
  placeholder,
  title,
  value,
  onChangeText,
  isVisible,
  toggleModal,
  buttonText,
  selectedValue,
  onPressButton,
  autoFocus,
}) => {
  var radio_props = [
    {
      id: 0,
      label: 'Newest Items First',
      value: {
        sort_by: 'timestamp',
        sort_order: 'desc',
      },
    },
    {
      id: 1,
      label: 'Alphabetically: A to Z',
      value: {
        sort_by: 'product',
        sort_order: 'asc',
      },
    },
    {
      id: 2,
      label: 'Alphabetically: Z to A',
      value: {
        sort_by: 'product',
        sort_order: 'desc',
      },
    },
    {
      id: 3,
      label: 'Price: Low to High',
      value: {
        sort_by: 'price',
        sort_order: 'asc',
      },
    },
    {
      id: 4,
      label: 'Price: High to Low',
      value: {
        sort_by: 'price',
        sort_order: 'desc',
      },
    },
    {
      id: 5,
      label: 'Popularity',
      value: {
        sort_by: 'popularity',
        sort_order: 'desc',
      },
    },
  ];

  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <Modal
      isVisible={isVisible}
      //swipeDirection="down"
      //onSwipeComplete={toggleModal}
      style={{flex: 1, margin: 0, justifyContent: 'center'}}
      onBackdropPress={toggleModal}
      backdropOpacity={0.5}>
      <CardWrapper style={[styles.enterValueModalPrimaryCard]}>
        <Spacer height={sizes.baseMargin} />
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            // setSelectedOption(value);
            selectedValue(value);
          }}
          selectedLabelColor={colors.activeBottomIcon}
          selectedButtonColor={colors.activeBottomIcon}
          buttonColor={colors.textGrey}
          buttonSize={totalSize(1)}
        />
        <Spacer height={sizes.smallMargin} />
        <ButtonColored
          onPress={onPressButton}
          buttonStyle={{height: height(5)}}
          text={'Apply'}
        />
        {children}
      </CardWrapper>
    </Modal>
  );
};
export const DropdownPickerModal = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  containerStyle,
  disableBorderRadius,
  zIndex,
  zIndexInverse,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={
        containerStyle
          ? containerStyle
          : {
              marginLeft: width(4),
              width: width(40),
            }
      }
      disableBorderRadius={disableBorderRadius}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
    />
  );
};
