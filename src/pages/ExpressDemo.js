/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';

const API_LIST = 'http://localhost:3000/api/list';

export default class Index extends Page {
  constructor(props) {
    super(props);
    this.list = [];
  }

  componentWillMount() {
    this.fetchList(9);
  }

  fetchList = () => {
    fetch(API_LIST, {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      console.log('GET', res);
      this.list = res.list || [];
      this.forceUpdate();
    }).catch(e => {
      console.log('GET ERROR', e);
    });
  }

  add = () => {
    console.log('add req', this.text);
    fetch(API_LIST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `item=${this.text}`
    }).then(res => res.json()).then(res => {
      console.log('POST', res);
      this.list = res.list || [];
      this.forceUpdate();
    }).catch(e => {
      console.log('POST ERROR', e);
    });
  }

  delete = index => {
    console.log('delete req', index);
    fetch(API_LIST, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `index=${index}`
    }).then(res => res.json()).then(res => {
      console.log('DELETE', res);
      this.list = res.list || [];
      this.forceUpdate();
    }).catch(e => {
      console.log('POST ERROR', e);
    });
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'ExpressDemo'}
        />
        <View style={{ flex: 1, padding: 10 }}>
          {
            this.list.length ? <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {
                this.list.map((item, i) => <TouchableOpacity
                  key={i}
                  style={{ width: 80, height: 80, marginRight: 10, marginBottom: 10, backgroundColor: '#fff' }}
                  onPress={() => this.delete(i)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>)
              }
            </View> : null
          }
          <TextInput
            style={{ padding: 10, backgroundColor: '#fff' }}
            onChangeText={text => {
              this.text = text;
            }}
          />
          <TouchableOpacity onPress={this.add}><Text>添加</Text></TouchableOpacity>
        </View>
      </Viewport>
    );
  }
}

const styles = StyleSheet.create({
  
});