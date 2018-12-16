import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import AddFriend from './src/screens/AddFriend';
import MyInfo from './src/screens/MyInfo';
import Practice from './src/screens/Practice';

const AppStackNavigator = createStackNavigator({
  Login: Login,
  Main: Main,
  AddFriend: AddFriend,
  MyInfo: MyInfo,
  Practice: Practice
});

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
