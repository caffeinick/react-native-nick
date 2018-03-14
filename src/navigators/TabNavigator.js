import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import CounterStack from '../navigators/CounterNavigator';
import LibraryStack from '../navigators/LibraryNavigator';

const routeConfig = {
  Counter: {
    screen: CounterStack
  },
  Libraries: {
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
      } else if (routeName === 'Libraries') {
        iconName = `library-books`
      }
      return <Icon name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'teal',
    inactiveTintColor: 'gray',
  },
  animationEnabled: false,
  swipeEnabled: false,
}

const MainTabNavigator = TabNavigator(routeConfig, tabRouterConfig);

export default MainTabNavigator;
