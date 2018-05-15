/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index.js';
import DemoAnimated from './pages/DemoAnimated.js';
import DemoLayoutAnimation from './pages/DemoLayoutAnimation.js';
import DemoAnimatedEvent from './pages/DemoAnimatedEvent.js';
import DemoKeyboardAvoidingView from './pages/DemoKeyboardAvoidingView.js';

const App = StackNavigator(
  {
    Index: {
      screen: Index
    },
    DemoAnimated: {
      screen: DemoAnimated
    },
    DemoLayoutAnimation: {
      screen: DemoLayoutAnimation
    },
    DemoAnimatedEvent: {
      screen: DemoAnimatedEvent
    },
    DemoKeyboardAvoidingView: {
      screen: DemoKeyboardAvoidingView
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'
  }
);

export default App;