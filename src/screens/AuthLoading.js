import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      //temporarily by button. will be implied with Firebase Auth
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
