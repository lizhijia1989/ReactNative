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
  KeyboardAvoidingView
} from 'react-native';
import Page from '../common/Page.js';
import {
  screenHeight,
  commonStyles,
  isiPhoneX
} from '../common/Constant.js';

export default class DemoKeyboardAvoidingView extends Page {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  handleLayout = e => {
    this.setState({
      height: e.nativeEvent.layout.height
    });;
  }

  render() {
    return (
      <View
        style={commonStyles.container}
        onLayout={this.handleLayout}
      >
        {
          // <KeyboardAvoidingView
          //   behavior={'position'}
          //   contentContainerStyle={{ height: this.state.height }}
          //   keyboardVerticalOffset={isiPhoneX ? 90 : 64}
          // >
        }
          <ScrollView
            style={styles.scrollView}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
          >
            {
              [0,1,2,3,4,5,6,7,8,9,10,11].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
            {
              // <TextInput
              //   style={styles.textInput}
              // />
            }
            {
              [0,1,2,3,4,5,6,7,8].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
            {
              // <TextInput
              //   style={styles.textInput}
              //   multiline
              //   onEndEditing={() => {
              //     console.log('onEndEditing')
              //   }}
              //   blurOnSubmit
              //   onSubmitEditing={() => {
              //     console.log('onSubmitEditing')
              //   }}
              //   returnKeyType="done"
              // />
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
          {
            // </KeyboardAvoidingView>
          }
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