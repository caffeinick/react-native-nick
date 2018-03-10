import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export { DetailScreen };
