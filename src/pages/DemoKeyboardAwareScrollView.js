/**
 * DemoKeyboardAwareScrollView
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Page from '../common/Page.js';
import {
  commonStyles
} from '../common/Constant.js';
import KeyboardAwareScrollView from '../components/KeyboardAwareScrollView.js'

export default class DemoKeyboardAwareScrollView extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
        >
          {
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, i) => <Text style={{ height: 40 }} key={i}>{item}</Text>)
          }
          <TextInput
            style={styles.textInput}
          />
          {
            [0,1,2,3,4,5,6,7,8].map((item, i) => <Text style={{ height: 40 }} key={i}>{item}</Text>)
          }
          <TextInput
            style={[styles.textInput, styles.textInputMultiline]}
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
          {
            [0,1,2,3,4,5,6,7,8,9,10,11].map((item, i) => <Text style={{ height: 40 }} key={i}>{item}</Text>)
          }
        </KeyboardAwareScrollView>
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
  textInputMultiline: {
    minHeight: 50
  }
});