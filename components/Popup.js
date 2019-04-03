import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushed: false,
    }
  }

  updateState = () => {
    this.setState({
      pushed: !this.state.pushed,
    })
  } 

  render() {
    return (
      <>
        <Text>
          I am a popup
        </Text>
        <Button 
          title="Push me!"
          color="#841584"
          onPress={() => this.updateState()} 
        />
        {this.state.pushed ? <Text>Pushed</Text> : <Text>Not pushed</Text>}
      </>
    )
  }
}
