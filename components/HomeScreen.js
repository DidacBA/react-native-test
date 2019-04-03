import React, { Component } from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Test App',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Map"
        onPress={() => navigate('Map')}
      />
    );
  }
}