/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index.js';
import LifeCycle from './pages/LifeCycle.js';
import Animated from './pages/Animated.js';
import LayoutAnimation from './pages/LayoutAnimation.js';
import AnimatedEvent from './pages/AnimatedEvent.js';
import KeyboardAvoidingView from './pages/KeyboardAvoidingView.js';
import KeyboardAwareScrollView from './pages/KeyboardAwareScrollView.js';

const App = StackNavigator(
  {
    Index: {
      screen: Index
    },
    LifeCycle: {
      screen: LifeCycle
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
    KeyboardAwareScrollView: {
      screen: KeyboardAwareScrollView
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'
  }
);

export default App;