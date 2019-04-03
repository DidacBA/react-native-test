import React, { Component } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import Mapview, { Marker, Callout }  from 'react-native-maps';
import PopUp from './Popup';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        coords: {
          latitude: 41.39777459141653,
          longitude: 2.190523770780123
        }
      },
      error: null,
    };
  }

  async componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    return (
      <>
        <Mapview
          style={{flex: 1}}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker 
            coordinate={{latitude: 41.39777459141653, longitude: 2.190523770780123}}
          >
          <Callout>
            <PopUp />
          </Callout>
          </Marker>
        </Mapview>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
