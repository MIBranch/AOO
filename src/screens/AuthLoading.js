import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import firebase from 'react-native-firebase'

export default class Login extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
  }
  render() {
    return(
      //temporarily by button. will be implied with Firebase Auth
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
