import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const LibraryItem = props => {
  return (
    <TouchableOpacity>
      <View>
        <Text>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

LibraryItem.propTypes = {
  title: PropTypes.string
};

export default LibraryItem;
