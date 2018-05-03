/**
 * DemoKeyboardAvoiding
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  UIManager,
  Keyboard
} from 'react-native';
import Page from '../common/Page.js';
import {
  screenWidth,
  screenHeight,
  commonStyles,
  isiPhoneX
} from '../common/Constant.js';

export default class DemoKeyboardAvoidingView extends Page {
  constructor(props) {
    super(props);
    this.state = {
      behaviorA: true,
      keyboardHeight: 0
    };
  }

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow');
  }

  keyboardWillShow = e => {
    const h = e.endCoordinates.height;
    if (h === this.state.keyboardHeight) return;
    this.setState({
      keyboardHeight: h
    });
  }

  render() {
    console.log('render',this.state.keyboardHeight)
    return (
      <View
        style={commonStyles.container}
        onLayout={this.handleLayout}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'position'}
          contentContainerStyle={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: screenWidth }}
          keyboardVerticalOffset={this.state.behaviorA ? (isiPhoneX ? 90 : 64) : -600}
        >
          <ScrollView
            style={styles.scrollView}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}
            onScroll={e => {
              this.textInputRefA.measure((x, y, w, h, left, top) => {
                const height = this.state.keyboardHeight ? this.state.keyboardHeight : 400;
                const { behaviorA } = this.state;
                if (top > height) {
                  if (!behaviorA) {
                    this.setState({
                      behaviorA: true
                    });
                  }
                } else {
                  if (behaviorA) {
                    this.setState({
                      behaviorA: false
                    });
                  }
                }
              })
            }}
          >
            {
              [0,1,2,3,4,5,6,7,8].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
            {
              <TextInput
                ref={r => { this.textInputRefA = r }}
                style={styles.textInput}
              />
            }
            {
              [0,1,2,3,4,5,6,7,8,9,10,11].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
          </ScrollView>
          {
            <KeyboardAvoidingView
              contentContainerStyle={styles.bottomBar}
              behavior={'position'}
              keyboardVerticalOffset={isiPhoneX ? 90 : 64}
            >
              <TextInput
                style={styles.textInput}
                multiline
                onEndEditing={() => {
                  console.log('onEndEditing')
                }}
                blurOnSubmit
                onSubmitEditing={() => {
                  console.log('onSubmitEditing')
                }}
                returnKeyType="done"
              />
            </KeyboardAvoidingView>
          }
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  textInput: {
    margin: 10,
    padding: 5,
    fontSize: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999'
  },
  bottomBar: {
    backgroundColor: '#fff'
  }
});