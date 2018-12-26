import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={style.title}>Hello!</Text>
        <Welcome />
        <Welcome />
      </View>
    );
  }

}

class Welcome extends Component {
  render() {
    return (
      <Text style={styles.message}>こんにちは！</Text>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 25
  },
  title: {
    padding: 10,
    color: 'red',
    fontSize: 60,
  },
  message: {
    padding: 10,
    fontSize: 32,
  },
});
