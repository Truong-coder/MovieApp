import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/MovieContext';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Add: AddScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Movies',
      headerTitleAlign: 'center'
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
