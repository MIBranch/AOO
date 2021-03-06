import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import AddFriend from './src/screens/AddFriend';
import MyInfo from './src/screens/MyInfo';
import SignUp from './src/screens/SignUp';
import AuthLoading from './src/screens/AuthLoading';
import ChangeName from './src/screens/ChangeName';
import ChangeEmail from './src/screens/ChangeEmail';

const AppStack = createStackNavigator({
  Main: Main,
  AddFriend: AddFriend,
  MyInfo: MyInfo,
  ChangeName: ChangeName,
  ChangeEmail: ChangeEmail,
});

const AuthStack = createStackNavigator({
  Login: Login,
  SignUp: SignUp,
});

export default AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
  ));
