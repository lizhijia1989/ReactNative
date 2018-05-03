/**
 * Viewport
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Viewport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
      </View>
    );
  }
}