import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import data from '../datas/LibraryList.json';

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
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </SafeAreaView>
    );
  }
}

ListScreen.propTypes = {
  navigation: PropTypes.object
}

export { ListScreen };
