import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation';

import LoginScreen from './src/login/login'
import ForgottenScreen from './src/login/forgotten'
import EulaScreen from './src/login/eula'
import AllMoviesScreen from './src/login/allMovies'
import MovieDetailsScreen from './src/login/movieDetails'

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ForgottenScreen: { screen: ForgottenScreen },
  EulaScreen: { screen: EulaScreen },
  AllMoviesScreen: { screen: AllMoviesScreen },
  MovieDetailsScreen: { screen: MovieDetailsScreen },
});
const App = createAppContainer(MainNavigator);

export default App;

//export class App extends React.Component {
//  render() {
//    return (
//      <LoginScreen />
//    );
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
