import React, { Component } from 'react';
import { StyleSheet, Alert, Button, Text, View } from 'react-native';

export default class Practice extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Hello!!</Text>
        <Button title="Click" onPress={this.doAction} />
      </View>
    );
  }

  doAction = ()=>{
    Alert.alert('you clicked!!');
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 30
  },
  title: {
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold'
  }
});
