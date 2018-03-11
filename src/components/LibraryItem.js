import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

class LibraryItem extends Component {
  render() {
    const { title } = this.props.item;
    
    return (
      <TouchableOpacity>
        <View>
          <Text>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

LibraryItem.propTypes = {
  item: PropTypes.object
};

export default LibraryItem;
