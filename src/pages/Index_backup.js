/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Animated,
  PanResponder
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
    this.dy = 0;
    this.state = {
      scrollEnabled: false
    };
    this._panResponder = PanResponder.create({
      // onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        const dy = gestureState.dy;
        const vy = gestureState.vy;
        console.log('onMoveShouldSetPanResponder', this.dy, dy, vy);
        if (this.dy === 0 && (dy >= 0 && vy >= 0)) return false;
        if (this.dy !== 0 && (dy <= 0 && vy <= 0) && this.scrollY !== 0) return false;
        this.props.callback(false);
        return true;
      },
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      //   const dy = gestureState.dy;
      //   const vy = gestureState.vy;
      //   return false
      // },
      onPanResponderMove: (evt, gestureState) => {
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
      },
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        this.props.callback(true);
        const dy = gestureState.dy;
        const vy = gestureState.vy;
        console.log('onPanResponderRelease', dy, vy);
        const shouldDoAnimate = (Math.abs(dy) > 200 || Math.abs(vy) > 8)
         && ((this.dy === 0 && (dy < 0 || vy < 0)) || (this.dy !== 0 && (dy > 0 || vy > 0)));
        const shouldSlideDy = this.dy === 0 ? (300 + 120 - screenHeight) : 0;
        const toValue = shouldDoAnimate ? shouldSlideDy : this.dy;
        Animated.timing(
          this.animValue,
          {
            toValue: toValue,
            duration: 300,
            useNativeDriver: true
          }
        ).start(() => {
          if (this.dy !== toValue) {
            this.dy = toValue;
            this.props.scrollViewRef.scrollToEnd();
            this.scrollViewRef.scrollTo({ y: 0})
            this.setState({
              scrollEnabled: !this.state.scrollEnabled
            });
            this.props.callback(this.dy === 0);
            console.log('doAnimated');
          }
        });
      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.props.callback(true);
      }
    });
  }
  render() {
    return (
      <Animated.View
        style={{ position: 'absolute', top: this.props.testY, left: 0, zIndex: 10, width: screenWidth, height: 600, backgroundColor: 'pink', transform:[{ translateY: this.animValue }] }}
        {...this._panResponder.panHandlers}
      >
        <ScrollView
          ref={r => this.scrollViewRef = r}
          style={{ flex: 1 }}
          scrollEnabled={this.state.scrollEnabled}
          onScroll={e => {
            this.scrollY = e.nativeEvent.contentOffset.y;
          }}
        >
          <Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>33333</Text><Text>33333</Text><Text>33333</Text><Text>123123</Text><Text>123123</Text><Text>66666</Text><Text>66666</Text><Text>66666</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>111111</Text><Text>111111</Text><Text>111111</Text><Text>111111</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>66666</Text><Text>66666</Text><Text>66666</Text><Text>66666</Text><Text>66666</Text><Text>66666</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text><Text>123123</Text>
        </ScrollView>
      </Animated.View>
    );
  }
}

export default class Index extends Page {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.pages = [
      {
        title: 'Animated',
        route: 'DemoAnimated'
      },
      {
        title: 'LayoutAnimation',
        route: 'DemoLayoutAnimation'
      },
      {
        title: 'Animated.event',
        route: 'DemoAnimatedEvent'
      },
      {
        title: 'KeyboardAvoidingView',
        route: 'DemoKeyboardAvoidingView'
      },
      {
        title: 'KeyboardAwareScrollView',
        route: 'DemoKeyboardAwareScrollView'
      }
    ];
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
          // canCancelContentTouches={this.state.scrollEnabled}
        >
          {
            this.pages.map((item, i) => (
              <TouchableHighlight
                key={i}
                underlayColor='#ddd'
                style={[styles.item, i === 0 && { borderTopWidth: 1 }]}
                onPress={() => this.push(item.route)}
              >
                <Text>{item.title}</Text>
              </TouchableHighlight>
            ))
          }
          <View style={{ height: 700, backgroundColor: 'blue' }} />
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
  item: {
    justifyContent: 'center',
    height: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  }
});