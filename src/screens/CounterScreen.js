import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../components/common/Header';

class CounterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  
  render() {
    const { 
      containerStyle, 
      buttonStyle, 
      innerTextStyle,
      counterContainerStyle, 
      counterStyle
    } = styles;
    return (
      <View style={{flex: 1}}>
        <Header
          headerText={`hello`}
        />
        <View style={containerStyle}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={this.onPress}
          >
            <Text style={innerTextStyle}>
              Touch Here!
            </Text>
          </TouchableOpacity>
          <View style={counterContainerStyle}>
            <Text style={counterStyle}>{this.state.count}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  innerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  counterContainerStyle: {
    alignItems: 'center',
    padding: 10
  },
  counterStyle: {
    color: 'teal',
    fontSize: 30,
    fontWeight: 'bold'
  }
};


export default CounterScreen;
