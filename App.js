import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';

const AppStackNavigator = createStackNavigator({
  Login: Login,
  Main: Main
});

AppStackNavigator.navigationOptions = {
  header: null,
};

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
