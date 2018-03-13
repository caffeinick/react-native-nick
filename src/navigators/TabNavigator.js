import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import CounterScreen from '../screens/CounterScreen';
import LibraryStack from '../navigators/LibraryNavigator';

const routeConfig = {
  Counter: {
    screen: CounterScreen
  },
  Library: {
    screen: LibraryStack
  }
};

const tabRouterConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = `alert-circle`;
      if (routeName === 'Counter') {
        iconName = `numeric`
      } else if (routeName === 'Library') {
        iconName = `library-books`
      }
      return <Icon name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  animationEnabled: false,
  swipeEnabled: false,
}

const MainTabNavigator = TabNavigator(routeConfig, tabRouterConfig);

export default MainTabNavigator;
