import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import { StackNavigator } from "react-navigation";
import stores from './src/stores';
import FlightScreen from './src/screens/FlightScreen';
import MainScreen from './src/screens/MainScreen';

console.disableYellowBox = true;
const Navigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    Flight: { screen: FlightScreen }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={styles.container}>
        <Navigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
