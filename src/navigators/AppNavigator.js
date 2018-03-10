import { StackNavigator } from 'react-navigation';

import { ListScreen, DetailScreen } from '../screens';

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

export { AppNavigator };
