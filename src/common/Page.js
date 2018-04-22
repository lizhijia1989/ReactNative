/**
 * Page
 */

import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  push(route) {
    this.props.navigation.navigate(route);
  }
}