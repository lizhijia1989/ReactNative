/**
 * DemoPanResponder
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Animated,
  PanResponder,
  StatusBar
} from 'react-native';
import Page from '../common/Page.js';
import {
  commonStyles,
  screenWidth,
  screenHeight
} from '../common/Constant.js';

class TestView extends Component {
  constructor(props) {
    super(props);
    this.animValue = new Animated.Value(0);
    this.dy = 0; // 当前位置
    this.scrollY = 0;
    this.state = {
      scrollEnabled: false
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: this.onMoveShouldSetPanResponderHandler,
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      //   const dy = gestureState.dy;
      //   const vy = gestureState.vy;
      //   return false
      // },
      onPanResponderMove: this.onPanResponderMoveHandler,
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: this.onPanResponderReleaseHandler,
      onPanResponderTerminationRequest: (evt, gestureState) => {
        console.log('onPanResponderTerminationRequest');
        // this.props.scrollViewRef.scrollToEnd();
        return false;
      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.props.scrollViewRef.scrollToEnd();
        // if (this.dy === 0) this.props.callback(true);
      }
    });
  }

  onMoveShouldSetPanResponderHandler = (evt, gestureState) => {
    const dy = gestureState.dy;
    const vy = gestureState.vy;
    console.log('onMoveShouldSetPanResponder',this.dy, dy, vy ,this.scrollY);
    // 滑出前，捕捉上滑手势
    if (this.dy === 0 && (dy < 0 || vy < 0)) {
      this.props.callback(false);
      return true;
    }
    // 滑出后，滚动到顶部时捕捉下滑手势
    if (this.dy !== 0 && this.scrollY <= 0) {
      if (dy > 0 || vy > 0) {
        return true;
      }
    }
    return false;
  }

  onPanResponderMoveHandler = (evt, gestureState) => {
    Animated.timing(
      this.animValue,
      {
        toValue: this.dy + gestureState.dy * .5,
        duration: 0,
        useNativeDriver: true
      }
    ).start(() => {
      this.animValue.setValue(this.dy + gestureState.dy * .5);
    });
    // console.log('onPanResponderMove', gestureState);
  }

  onPanResponderReleaseHandler = (evt, gestureState) => {
    // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
    // 一般来说这意味着一个手势操作已经成功完成。
    const dy = gestureState.dy;
    const vy = gestureState.vy;
    console.log('onPanResponderRelease', dy, vy);
    // 判定滑出条件
    const shouldDoAnimate = (
      (Math.abs(dy) > 150 || Math.abs(vy) > 5) &&
      (
        (this.dy === 0 && (dy < 0 || vy < 0)) ||
        (this.dy !== 0 && (dy > 0 || vy > 0))
      )
    );
    const shouldSlideDy = this.dy === 0 ? (300 + 120 - screenHeight) : 0;
    const toValue = shouldDoAnimate ? shouldSlideDy : this.dy;
    this.doAnimate(toValue);
  }

  doAnimate = toValue => {
    console.log(1111,this.dy,toValue)
    this.props.callback((this.dy === 0 && this.dy === toValue) || (this.dy !== 0 && this.dy !== toValue));
    if (this.dy !== toValue) {
      this.props.scrollViewRef.scrollToEnd();
      this.scrollViewRef.scrollTo({ y: 0 });
      this.setState({
        scrollEnabled: !this.state.scrollEnabled
      });
    }
    Animated.spring(
      this.animValue,
      {
        toValue: toValue,
        duration: 300,
        useNativeDriver: true
      }
    ).start(() => {
      if (this.dy !== toValue) {
        this.dy = toValue;
        console.log('doAnimated');
      }
    });
  }

  render() {
    return (
      <Animated.View
        style={{ position: 'absolute', top: this.props.testY, left: 0, zIndex: 10, width: screenWidth, height: screenHeight, backgroundColor: 'pink', transform:[{ translateY: this.animValue }] }}
        {...this._panResponder.panHandlers}
      >
        <ScrollView
          ref={r => this.scrollViewRef = r}
          style={{ flex: 1 }}
          scrollEnabled={this.state.scrollEnabled}
          scrollEventThrottle={16}
          onScroll={e => {
            this.scrollY = e.nativeEvent.contentOffset.y;
          }}
        >
          <Text
            style={{ height: 200 }}
            onPress={() => {
              if (this.dy !== 0) {
                console.log('close')
                this.doAnimate(0);
              }
            }}
          >11111</Text>
          <Text style={{ height: 200 }}>2222</Text>
          <Text style={{ height: 200 }}>33333</Text>
          <Text style={{ height: 200 }}>44444</Text>
          <Text style={{ height: 200 }}>55555</Text>
          <Text style={{ height: 200 }}>66666</Text>
        </ScrollView>
      </Animated.View>
    );
  }
}

export default class Index extends Page {
  constructor(props) {
    super(props);
    this.state = {
      testY: screenHeight,
      scrollEnabled: true
    };
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <ScrollView
          ref={r => this.scrollViewRef = r}
          style={styles.scrollView}
          scrollEnabled={this.state.scrollEnabled}
        >
          <View style={{ height: 300, backgroundColor: 'yellow' }} />
          <View style={{ height: 300, backgroundColor: 'orange' }} />
          <View style={{ height: 300, backgroundColor: 'purple' }} />
          <View
            style={{ height: 300, backgroundColor: 'red' }}
            onLayout={e => {
              this.setState({
                testY: e.nativeEvent.layout.y
              });
            }}
          />
          {
            this.state.testY ?
            <TestView
              testY={this.state.testY}
              scrollViewRef={this.scrollViewRef}
              callback={bool => {
                this.setState({
                  scrollEnabled: bool
                })
              }}
            />
            : null
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});