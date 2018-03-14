import { StackNavigator } from 'react-navigation';

import CounterScreen from '../screens/CounterScreen';
import ReduxCounterScreen from '../screens/ReduxCounterScreen';

const routeConfig = {
  Home: {
    screen: CounterScreen,
  },
  Redux: {
    screen: ReduxCounterScreen,
  }
};

const navigationConfig = {
  initialRouteName: 'Home',
};

const CounterNavigator = StackNavigator(routeConfig, navigationConfig);

export default CounterNavigator;
