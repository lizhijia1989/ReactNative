/**
 * DemoKeyboardAvoiding
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';
import {
  isiOS,
  isiPhoneX
} from '../common/Constant.js';

export default class PageKeyboardAvoidingView extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'KeyboardAvoidingView'}
        />
          <ScrollView
            ref={r => { this.scrollViewRef = r; }}
            style={styles.scrollView}
            // keyboardDismissMode={'on-drag'}
            // keyboardShouldPersistTaps={'handled'}
          >
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
          </ScrollView>
        <KeyboardAvoidingView
          style={{ backgroundColor: 'blue' }}
          behavior={isiOS ? 'padding' : null}
          // behavior={isiOS ? 'position' : null}
        >
          <View style={styles.bottomBar}>
            <TextInput
              style={styles.textInput}
            />
          </View>
        </KeyboardAvoidingView>
      </Viewport>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  bottomBar: {
    paddingBottom: isiPhoneX ? 34 : 0,
    backgroundColor: '#fff'
  },
  textInput: {
    margin: 10,
    padding: 5,
    fontSize: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999'
  }
});