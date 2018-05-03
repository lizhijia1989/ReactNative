/**
 * Header
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: 40 }}>
        <Text>title</Text>
      </View>
    );
  }
}