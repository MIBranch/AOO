import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import AddFriend from './src/screens/AddFriend';
import MyInfo from './src/screens/MyInfo';
import Practice from './src/screens/Practice';
import AuthLoading from './src/screens/AuthLoading';
import SignUp from './src/screens/SignUp';

const AppStack = createStackNavigator({
  Main: Main,
  AddFriend: AddFriend,
  MyInfo: MyInfo,
  Practice: Practice,
  SignUp: SignUp,
});

const AuthStack = createStackNavigator({
  Login: Login,
});

export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
    Practice: Practice,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'AuthLoading'
  }
  ));
