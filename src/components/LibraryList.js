import React, { Component } from 'react';
import { FlatList } from 'react-native';

import data from '../datas/libraries.json'
import { CardSection } from './common'
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  state = {
    libraries: data,
  }

  renderItemFunc = ({item}) => {
    return (
      <CardSection>
        <LibraryItem
          item={item}
        />
      </CardSection>
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
