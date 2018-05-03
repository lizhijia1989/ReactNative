/**
 * DemoAnimated
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import Page from '../common/Page.js';
import Header from '../components/Header.js';

export default class DemoAnimated extends Page {
  constructor(props) {
    super(props);
    this.animCount = 0;
    this.animValue = new Animated.Value(0);
    this.isDoAnim = true;
  }

  componentDidMount() {
    this.doAnim();
  }

  componentWillUnmount() {
    this.isDoAnim = false;
  }

  doAnim = () => {
    const value = this.animCount % 2 === 0 ? 100 : 0;
    Animated.timing(
      this.animValue,
      {
        toValue: value,
        duration: 1000,
        easing: Easing.easeInEaseOut,
        useNativeDriver: true
      }
    ).start(e => {
      console.log('e.finished', e.finished);
      this.animCount++;
      this.animValue.setValue(value);
      if (!this.isDoAnim) return;
      if (e.finished) {
        console.log('e.fininshed in', e.finished);
        // this.animCount++;
        // this.animValue.setValue(value);
        this.doAnim();
      }
    });
  }

  handlePress= () => {
    if (this.isDoAnim) {
      // this.animValue.stopAnimation(() => {
      //   this.isDoAnim = false;
      // });//停止动画
      this.isDoAnim = false;
    } else {
      this.isDoAnim = true;
      this.doAnim();
    }
  }

  render() {
    return (
      <View>
        <Header />
        <View style={styles.container}>
          <Animated.View
            style={[styles.boxA, {
              transform: [
                {
                  translateX: this.animValue
                  // translateX: this.animValue.interpolate({
                  //   inputRange: [0, 50, 100],
                  //   outputRange: [0, 100, 110]
                  // })
                }
              ]
            }]}
          />
          <TouchableOpacity
            onPress={this.handlePress}
          >
            <Text>toggle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  boxA: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});