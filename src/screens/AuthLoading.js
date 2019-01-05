import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      //temporarily by button. will be implied with Firebase Auth
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('App')}
          title="Logged">
        </Button>
        <Button onPress={() => this.props.navigation.navigate('Auth')}
          title="NotLogged">
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
