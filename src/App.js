import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CounterReducer from './reducers/CounterReducer';
import TabNavigator from './navigators/TabNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(CounterReducer)}>
        <TabNavigator />
      </Provider>
    );
  }
}
