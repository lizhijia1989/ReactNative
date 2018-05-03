/**
 * Page
 */

import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  push(route) {
    this.props.navigation.push(route);
  }

  pop() {
    this.props.navigation.pop();
  }
}