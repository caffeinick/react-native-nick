import { StackNavigator } from 'react-navigation';

import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen'

const routeConfig = {
  Home: {
    screen: ListScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
};

const navigationConfig = {
  initialRouteName: 'Home',
};

const AppNavigator = StackNavigator(routeConfig, navigationConfig);

export default AppNavigator;
