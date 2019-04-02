import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    }
  }

  render() {
    return (
      <>
        <Text>
          Hola
        </Text>
        <Button 
          title="Push me!"
          onPress={() => this.setState({ pressed: !this.state.pressed })} 
        />
        {this.state.pressed ? <Text>Pushed</Text> : <Text>Not pushed</Text>}
      </>
    )
  }
}
