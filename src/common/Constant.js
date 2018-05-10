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

const p1x = StyleSheet.hairlineWidth;

const isiOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isiPhoneX = (
  isiOS &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (screenWidth === 812 || screenHeight === 812)
);

const r = value => {
  const scaleValue = Math.floor((value * (screenWidth / 375)) + 0.5);
  return (value > 0 && scaleValue === 0) ? p1x : scaleValue;
};

const iPhoneXBottomHeight = 34;

export {
  screenWidth,
  screenHeight,
  p1x,
  isiOS,
  isAndroid,
  isiPhoneX,
  r,
  iPhoneXBottomHeight
};