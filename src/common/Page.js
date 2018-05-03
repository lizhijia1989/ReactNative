/**
 * Page
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  push(route) {
    this.props.navigation.push(route);
  }

  pop() {
    this.props.navigation.pop();
  }
}