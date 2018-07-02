/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    console.log('constructor son');
  }

  componentWillMount() {
    console.log('componentWillMount son');
  }

  componentDidMount() {
    console.log('componentDidMount son');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps son');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate son');
  }

  render() {
    console.log('render son');
    return (
      <View
        style={{ height: this.props.update ? 10 : 20, backgroundColor: 'blue' }}
        onLayout={e => {
          console.log('onLayout son', e.nativeEvent);
        }}
      />
    );
  }
}

export default class Lifecycle extends Page {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      isOpen: false
    };
    console.log('===============');
    console.log('constructor father', this.ref);
  }

  componentWillMount() {
    console.log('componentWillMount father', this.ref);
  }

  componentDidMount() {
    console.log('componentDidMount father', this.ref);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps father');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate father');
  }

  render() {
    console.log('render father', this.ref);
    return (
      <Viewport>
        <Header
          page={this}
          title={'Lifecycle'}
        />
        <View
          style={{ height: this.state.update ? 10 : 20, backgroundColor: 'red' }}
          onLayout={e => {
            console.log('onLayout father', e.nativeEvent, this.ref);
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({
                update: !this.state.update
              });
            }}
          >
            <Text>press</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(1111)
              this.commonModalRef.toggle();
            }}
          >
            <Text>press</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log(2222)
              this.setState({
                isOpen: true
              });
            }}
          >
            <Text>press</Text>
          </TouchableOpacity>
          <LifecycleB ref={r => { this.ref = r; }} update={this.state.update} />
        </View>
        {
          <CommonModal
            ref={r => { this.commonModalRef = r; }}
            title={'我是标题我是标题'}
          >
            <Text>我是内容我是内容我是内容我是内容我是内容我是内容我是内容</Text>
          </CommonModal>
        }
        {
          <CommonModal
            isOpen={this.state.isOpen}
            onClosed={() => this.setState({ isOpen: false })}
            title={'我是标题2我是标题2'}
          >
            <Text>我是内容2我是内容2我是内容2我是内容2我是内容2我是内容2我是内容2</Text>
          </CommonModal>
        }
      </Viewport>
    );
  }
}