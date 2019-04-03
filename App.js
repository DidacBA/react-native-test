import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
