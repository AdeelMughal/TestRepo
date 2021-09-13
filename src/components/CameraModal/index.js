import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'react-native-elements';
import {totalSize, height, width} from 'react-native-dimension';
import {colors, sizes, Translate} from '../../services';
import {Spacer} from '../spacers';
import {ButtonBordered} from '../buttons';

export function CameraModal({
  isVisible,
  onClose,
  imageFromCamera,
  imageFromGallery,
}) {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.imageModalContainer}>
        <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
          <AntDesign name="closecircle" size={height(3.5)} color="#000000" />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.picOption} onPress={imageFromCamera}>
            <MaterialIcons
              name="photo-camera"
              size={height(3.7)}
              color="black"
            />
            <Text style={styles.picOptionText}>Take Photo</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.picOption} onPress={imageFromGallery}>
            <MaterialIcons
              name="insert-photo"
              size={height(3.7)}
              color="black"
            />
            <Text style={styles.picOptionText}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export function CameraDocumentModal({
  isVisible,
  onClose,
  imageFromCamera,
  imageFromGallery,
  FromDocuments,
}) {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.imageModalContainer}>
        <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
          <AntDesign name="closecircle" size={height(3.5)} color="#000000" />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.picOption} onPress={imageFromCamera}>
            <MaterialIcons
              name="photo-camera"
              size={height(3.7)}
              color="black"
            />
            <Text style={styles.picOptionText}>Take Photo</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.picOption} onPress={imageFromGallery}>
            <MaterialIcons
              name="insert-photo"
              size={height(3.7)}
              color="black"
            />
            <Text style={styles.picOptionText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={[styles.picOption, {marginLeft: width(1)}]}
            onPress={FromDocuments}>
            <Icon
              name="file"
              type="font-awesome"
              size={height(3)}
              color="black"
            />
            <Text style={[styles.picOptionText, {marginLeft: width(3)}]}>
              Choose Document
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export function VersionModal({isVisible, onPress}) {
  return (
    <Modal isVisible={isVisible}>
      <View
        style={[
          // styles.imageModalContainer,
          {
            backgroundColor: 'white',
            borderRadius: 20,
            alignSelf: 'center',
            width: width(90),
            paddingVertical: height(5),
          },
        ]}>
        {/* <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
          <AntDesign name="closecircle" size={height(3.5)} color="#000000" />
        </TouchableOpacity> */}
        <View
          style={{
            width: width(72),
            alignSelf: 'center',
            alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          <TouchableOpacity style={styles.picOption} onPress={onPress}>
            <MaterialIcons name="shop" size={totalSize(4.5)} color="black" />
            <Text style={styles.picOptionText}>
              {Translate('New version is available in store now')}
            </Text>
          </TouchableOpacity>
          <Spacer height={sizes.baseMargin * 1.5} />
          <ButtonBordered
            buttonStyle={{
              backgroundColor: colors.activeBottomIcon,
              height: Platform.OS == 'ios' ? height(6) : height(7),
              width: width(50),
              alignSelf: 'center',
              borderRadius: 5,
            }}
            textStyle={{color: colors.snow}}
            text={Translate('UPDATE')}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
}
