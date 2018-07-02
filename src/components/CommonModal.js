/**
 * Modal
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import { r, screenHeight, isiPhoneX } from '../common/Constant.js';

export default class CommonModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onClosed: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  };

  constructor(props) {
    super(props);
    this.animValue = new Animated.Value(0);
    this.state = {
      isOpen: props.isOpen || false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.isOpen) {
      this.toggle();
    }
  }

  toggle = () => {
    const { isOpen } = this.state;
    const animValue = isOpen ? 0 : 1;
    if (animValue === 1) {
      this.setState({
        isOpen: !isOpen
      }, () => {
        this.doAnimate(animValue);
      });
    } else {
      this.doAnimate(animValue);
    }
  }

  doAnimate = animValue => {
    Animated.timing(
      this.animValue,
      {
        toValue: animValue,
        duration: 300,
      }
    ).start(e => {
      if (e.finished) {
        this.animValue.setValue(animValue);
        if (animValue === 0) {
          if (this.props.onClosed) this.props.onClosed(); // 必须放在setState之前
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
      }
    });
  }

  render() {
    const { title, children } = this.props;
    const maskBgColor = this.animValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .7)']
    });
    const modalPos = this.animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [screenHeight, 0]
    });
    return (
      <Modal
        animationType={'none'}
        transparent
        visible={this.state.isOpen}
        onRequestClose={this.toggle}
      >
        <Animated.View style={{ flex: 1, backgroundColor: maskBgColor }}>
          <TouchableWithoutFeedback
            onPress={this.toggle}
          >
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[styles.modal, { transform: [{ translateY: modalPos }] }]}
          >
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <ScrollView
              style={styles.body}
              alwaysBounceVertical={false}
            >
              {children}
              <View style={{ height: isiPhoneX ? r(40) : r(30) }} />
            </ScrollView>
          </Animated.View>
        </Animated.View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    minHeight: screenHeight * 0.3,
    maxHeight: screenHeight * 0.7,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: r(44),
    paddingHorizontal: r(15),
    backgroundColor: '#f7f7f7'
  },
  body: {
    paddingHorizontal: r(15),
    paddingTop: r(15),
    backgroundColor: '#fff'
  }
});