/**
 * Viewport
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

const Viewport = props => (
  <View style={{ flex: 1 }}>
    {props.children}
  </View>
);

Viewport.propTypes = {
  children: PropTypes.array
};

export default Viewport;