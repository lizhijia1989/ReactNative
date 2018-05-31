/**
 * DemoKeyboardAvoiding
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';
import {
  isiOS
} from '../common/Constant.js';

export default class PageInputScrollView extends Page {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'InputScrollView'}
        />
        <InputScrollView
          style={styles.scrollView}
          keyboardDismissMode={isiOS ? 'on-drag' : 'none'}
          keyboardShouldPersistTaps="handled"
        >
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
          }
            <TextInput
              ref={r => { this.textInputRefA = r; }}
              style={styles.textInput}
            />
            <TextInput
              ref={r => { this.textInputRefA = r; }}
              style={styles.textInput}
            />
            <TextInput
              ref={r => { this.textInputRefA = r; }}
              style={styles.textInput}
            />
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
          }
        </InputScrollView>
      </Viewport>
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