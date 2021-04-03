// Screens
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// React Navigation Setup

const MainNavigator = createSwitchNavigator({});

const App = createAppContainer(MainNavigator);

export default App;
