/**
 * DemoLayoutAnimation
 * 支持width | margin | padding | position
 * 不支持border | transform
 */

import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';

const { UIManager } = NativeModules;
if (UIManager.setLayoutAnimationEnabledExperimental) UIManager.setLayoutAnimationEnabledExperimental(true);

class BoxA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      value: 100
    };
  }

  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      visible: !this.state.visible
    });
  }
  
  bigger = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      value: this.state.value + 30
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this.toggle}
        >
          <View>
            <Text>toggleA</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={this.bigger}
        >
          <View>
            <Text>biggerA</Text>
          </View>
        </TouchableWithoutFeedback>
        {
          this.state.visible &&
          <View
            style={[styles.boxA, {
              width: this.state.value,
              height: this.state.value
            }]}
          >
            <Text>BoxA</Text>
          </View>
        }
      </View>
    );
  }
}

// diff ios android
class BoxB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      value: 100
    };
  }

  doAnim = () => {
    LayoutAnimation.configureNext({
      duration: 300, //时间
      create: { //创建
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.scaleXY,//显隐时 opacity | scaleXY
      },
      update: { //更新
          type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
  }

  toggle = () => {
    this.doAnim();
    // LayoutAnimation.easeInEaseOut();
    this.setState({
      value: this.state.value === 100 ? 0 : 100
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this.toggle}
        >
          <View>
            <Text>toggleB</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.boxB, { height: this.state.value }]}>
          <Text>BoxB</Text>
        </View>
      </View>
    );
  }
}

class BoxC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20
    };
  }
  
  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      value: this.state.value === 20 ? 40 : 20
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this.toggle}
        >
          <View>
            <Text>toggleC</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.boxC, {
          transform: [
            {
              rotateZ: this.state.value + 'deg'
            }
          ]
        }]}>
          <Text>BoxC</Text>
        </View>
      </View>
    );
  }
}

export default class DemoLayoutAnimation extends Page {
  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'LayoutAnimation'}
        />
        <BoxA />
        <BoxB />
        <BoxC />
      </Viewport>
    );
  }
}

const styles = StyleSheet.create({
  boxA: {
    // overflow: 'hidden',
    backgroundColor: 'red'
  },
  boxB: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    backgroundColor: 'blue'
  },
  boxC: {
    width: 100,
    height: 100,
    backgroundColor: 'pink'
  }
});