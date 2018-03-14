import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../components/common/Header';

class CounterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPlus = () => {
    this.setState({
      count: this.state.count+1
    })
  };

  onMinus = () => {
    this.setState({
      count: this.state.count-1
    })
  };
  
  render() {
    const { 
      centerContainer,
      buttonContainerStyle, 
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
        <View style={centerContainer}>
          <View style={counterContainerStyle}>
            <Text style={counterStyle}>
              {this.state.count}
            </Text>
          </View>
          <View style={buttonContainerStyle}>
            <TouchableOpacity
              style={buttonStyle}
              onPress={this.onMinus}
            >
              <Text style={innerTextStyle}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={buttonStyle}
              onPress={this.onPlus}
            >
              <Text style={innerTextStyle}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = {
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 50,
    padding: 10,
    margin: 10
  },
  innerTextStyle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  counterContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  counterStyle: {
    color: 'teal',
    fontSize: 60,
    fontWeight: 'bold'
  }
};


export default CounterScreen;
