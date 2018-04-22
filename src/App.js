/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index.js';
import DemoLayoutAnimation from './pages/DemoLayoutAnimation.js';
import DemoAnimated from './pages/DemoAnimated.js';
import DemoAnimatedEvent from './pages/DemoAnimatedEvent.js';
import DemoKeyboardAvoidingView from './pages/DemoKeyboardAvoidingView.js';
import DemoKeyboardAwareScrollView from './pages/DemoKeyboardAwareScrollView.js';
import DemoPanResponder from './pages/DemoPanResponder.js';

const App = StackNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: {
        headerTitle: '首页'
      }
    },
    DemoLayoutAnimation: {
      screen: DemoLayoutAnimation,
      navigationOptions: {
        headerTitle: 'LayoutAnimation'
      }
    },
    DemoAnimated: {
      screen: DemoAnimated,
      navigationOptions: {
        headerTitle: 'Animated'
      }
    },
    DemoAnimatedEvent: {
      screen: DemoAnimatedEvent,
      navigationOptions: {
        headerTitle: 'Animated.event'
      }
    },
    DemoKeyboardAvoidingView: {
      screen: DemoKeyboardAvoidingView,
      navigationOptions: {
        headerTitle: 'KeyboardAvoidingView'
      }
    },
    DemoKeyboardAwareScrollView: {
      screen: DemoKeyboardAwareScrollView,
      navigationOptions: {
        headerTitle: 'KeyboardAwareScrollView'
      }
    },
    DemoPanResponder: {
      screen: DemoPanResponder,
      navigationOptions: {
        headerTitle: 'PanResponder'
      }
    }
  },
  {
    initialRouteName: 'Index',
  }
);

export default App;