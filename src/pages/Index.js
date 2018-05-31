/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';

export default class Index extends Page {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
    this.pages = [
      {
        title: 'Lifecycle',
        route: 'Lifecycle'
      },
      {
        title: 'Animated',
        route: 'Animated'
      },
      {
        title: 'LayoutAnimation',
        route: 'LayoutAnimation'
      },
      {
        title: 'Animated.event',
        route: 'AnimatedEvent'
      },
      {
        title: 'KeyboardAvoidingView',
        route: 'KeyboardAvoidingView'
      },
      {
        title: 'KeyboardAwareScrollView',
        route: 'KeyboardAwareScrollView'
      },
      {
        title: 'InputScrollView',
        route: 'InputScrollView'
      }
    ];
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'首页'}
          hideBackBtn
        />
        <ScrollView
          style={styles.scrollView}
        >
          {
            this.pages.map((item, i) => (
              <TouchableHighlight
                key={i}
                underlayColor={'#ddd'}
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