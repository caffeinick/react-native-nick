import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Card } from '../components/common'
import LibraryList from '../components/LibraryList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Libraries',
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
          <Card>
            <LibraryList />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ListScreen.propTypes = {
  navigation: PropTypes.object
}

export { ListScreen };
