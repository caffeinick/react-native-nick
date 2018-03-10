import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import LibraryList from '../components/LibraryList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'React-Native',
    headerStyle: {
      backgroundColor: 'teal',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <LibraryList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ListScreen.propTypes = {
  navigation: PropTypes.object
}

export { ListScreen };
