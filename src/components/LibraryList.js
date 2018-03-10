import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import data from '../datas/libraries.json'
// import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  state = {
    libraries: data
  }

  render() {
    const { libraries } = this.state;
    return (
      <FlatList
        data={libraries}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    );
  }
}

export default LibraryList;
