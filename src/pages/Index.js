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
  TouchableHighlight
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';
import {
  commonStyles
} from '../common/Constant.js';

export default class Index extends Page {
  constructor(props) {
    super(props);
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
      },
      {
        title: 'PanResponder',
        route: 'DemoPanResponder'
      }
    ];
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
        />
        <ScrollView
          style={styles.scrollView}
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
        </ScrollView>
      </Viewport>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  item: {
    justifyContent: 'center',
    height: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  }
});