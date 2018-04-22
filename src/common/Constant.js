/**
 * Constant
 */

import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

const {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('window');

const isiOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isiPhoneX = (
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (screenWidth === 812 || screenHeight === 812)
);

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: isiPhoneX ? 34 : 0,
    backgroundColor: '#f3f3f3'
  }
});

export {
  screenWidth,
  screenHeight,
  isiOS,
  isAndroid,
  isiPhoneX,
  commonStyles
};