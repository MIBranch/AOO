import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class MyInfo extends Component {
  render() {
    return(
      <View style={styles.container}>
          <Text>MyInfo</Text>
          <Button onPress={() => this.props.navigation.navigate('Login')}
            title="LOGOUT">
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
