import { StackNavigator } from 'react-navigation';

import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

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

const LibraryNavigator = StackNavigator(routeConfig, navigationConfig);

export default LibraryNavigator;
