import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import data from '../datas/libraries.json'
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  state = {
    libraries: data,
  }

  renderItemFunc = ({item}) => {
    return (
      <LibraryItem
        item={item}
      />
    );
  }

  render() {
    const { libraries } = this.state;
    return (
      <FlatList
        data={libraries}
        extraData={this.state}
        renderItem={this.renderItemFunc}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default LibraryList;
