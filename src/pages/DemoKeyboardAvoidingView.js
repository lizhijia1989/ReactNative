/**
 * DemoKeyboardAvoiding
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';
import {
  screenHeight
} from '../common/Constant.js';

export default class DemoKeyboardAvoidingView extends Page {
  constructor(props) {
    super(props);
    this.state = {
      behaviorA: true,
      keyboardHeight: 333
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
    const { keyboardHeight, behaviorA } = this.state;
    return (
      <Viewport>
        <Header
          page={this}
          title={'KeyboardAvoidingView'}
        />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'position'}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={behaviorA ? 0 : -keyboardHeight}
        >
          <ScrollView
            style={styles.scrollView}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            scrollEventThrottle={16}
            onScroll={e => {
              this.textInputRefA.measure((x, y, w, h, left, top) => {
                const height = screenHeight - keyboardHeight - h;
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
              });
            }}
          >
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
            {
              <TextInput
                ref={r => { this.textInputRefA = r; }}
                style={styles.textInput}
              />
            }
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, i) => <Text style={{ height: 50 }} key={i}>{item}</Text>)
            }
          </ScrollView>
        </KeyboardAvoidingView>
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