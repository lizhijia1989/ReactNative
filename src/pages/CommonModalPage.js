/**
 * CommonModal
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';
import CommonModal from '../components/CommonModal.js';

export default class CommonModalPage extends Page {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'CommonModal'}
        />
        <TouchableOpacity
          onPress={() => {
            this.commonModalRef.toggle();
          }}
        ><Text>Modal1</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              isOpen: true
            });
          }}
        >
          <Text>Modal2</Text>
        </TouchableOpacity>
        <CommonModal
          ref={r => { this.commonModalRef = r; }}
          title={'我是标题我是标题'}
        >
          <Text>我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Text>
        </CommonModal>
        <CommonModal
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({ isOpen: false })}
          title={'我是标题2我是标题2'}
        >
          <Text>我是内容2我是内容2我是内容2我是内容2我是内容2我是内容2我是内容2</Text>
        </CommonModal>
      </Viewport>
    );
  }
}