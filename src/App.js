/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index.js';
import Animated from './pages/Animated.js';
import LayoutAnimation from './pages/LayoutAnimation.js';
import AnimatedEvent from './pages/AnimatedEvent.js';
import KeyboardAvoidingView from './pages/KeyboardAvoidingView.js';
import LifeCycle from './pages/LifeCycle.js';

const App = StackNavigator(
  {
    Index: {
      screen: Index
    },
    Animated: {
      screen: Animated
    },
    LayoutAnimation: {
      screen: LayoutAnimation
    },
    AnimatedEvent: {
      screen: AnimatedEvent
    },
    KeyboardAvoidingView: {
      screen: KeyboardAvoidingView
    },
    LifeCycle: {
      screen: LifeCycle
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'
  }
);

export default App;