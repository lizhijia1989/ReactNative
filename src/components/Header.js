/**
 * Header
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { r, isiPhoneX } from '../common/Constant.js';

export default class Header extends Component {
  static propTypes = {
    page: PropTypes.object,
    title: PropTypes.string,
    hideBackBtn: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { title, hideBackBtn = false } = this.props;
    return (
      <View style={styles.container}>
        {
          !hideBackBtn ?
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.page.pop()}
          >
            <View style={styles.backText} />
          </TouchableOpacity>
          : null
        }
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    paddingTop: isiPhoneX ? 44 : 20,
    paddingHorizontal: r(44),
    backgroundColor: '#4289ff'
  },
  title: {
    height: r(44),
    lineHeight: r(44),
    textAlign: 'center',
    fontSize: r(18),
    color: '#fff'
  },
  back: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: r(44),
    height: r(44)
  },
  backText: {
    width: r(12),
    height: r(12),
    borderTopWidth: r(2),
    borderLeftWidth: r(2),
    borderStyle: 'solid',
    borderColor: '#fff',
    transform: [{
      rotate: '-45deg'
    }]
  }
});