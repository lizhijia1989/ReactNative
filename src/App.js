/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index.js';
import Lifecycle from './pages/Lifecycle.js';
import Animated from './pages/Animated.js';
import LayoutAnimation from './pages/LayoutAnimation.js';
import AnimatedEvent from './pages/AnimatedEvent.js';
import KeyboardAvoidingView from './pages/KeyboardAvoidingView.js';
import KeyboardAwareScrollView from './pages/KeyboardAwareScrollView.js';
import InputScrollView from './pages/InputScrollView.js';
import CommonModalPage from './pages/CommonModalPage.js';

const App = StackNavigator(
  {
    Index: {
      screen: Index
    },
    Lifecycle: {
      screen: Lifecycle
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
    CommonModalPage: {
      screen: CommonModalPage
    },
    KeyboardAvoidingView: {
      screen: KeyboardAvoidingView
    },
    KeyboardAwareScrollView: {
      screen: KeyboardAwareScrollView
    },
    InputScrollView: {
      screen: InputScrollView
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'
  }
);

export default App;