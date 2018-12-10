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
  Alert
} from 'react-native';
import Page from '../common/Page.js';
import Viewport from '../components/Viewport.js';
import Header from '../components/Header.js';

export default class Index extends Page {
  constructor(props) {
    super(props);
    this.list = [];
  }

  componentWillMount() {
    this.fetchList(9);
  }

  fetchList = number => {
    fetch('http://localhost:3000/GetList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `number=${number}`
    }).then(res => res.json()).then(res => {
      console.log('GetList', res);
      this.list = res.list || [];
      this.forceUpdate();
    }).catch(e => {
      console.log('e', e);
    });
  }

  onPressHandler = data => {
    fetch('http://localhost:3000/PostInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `info=${data}`
    }).then(res => res.json()).then(res => {
      console.log('PostInfo', res);
      Alert.alert(
        '',
        `${res.message}`,
        [
          { text: '确定' },
        ]
      );
    }).catch(e => {
      console.log('e', e);
    });
  }

  render() {
    return (
      <Viewport>
        <Header
          page={this}
          title={'ExpressDemo'}
        />
        {
          this.list.length ? <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}>
            {
              this.list.map((item, i) => <TouchableOpacity
                key={i}
                style={{ width: 80, height: 80, marginRight: 10, marginBottom: 10, backgroundColor: '#fff' }}
                onPress={() => this.onPressHandler(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>)
            }
          </View> : null
        }
      </Viewport>
    );
  }
}

const styles = StyleSheet.create({
  
});