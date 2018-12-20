import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Practice extends Component {
  counter = 0;

  constructor(props) {
    super(props);
    this.state = {message: 'click me...'};
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Hello!!</Text>
        <Text style={styles.message}>{this.state.message}</Text>
        <Button title="Click" onPress={this.doAction} />
      </View>
    );
  }

  doAction = ()=>{
    this.setState({message:'count: ' + ++this.counter});
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 30
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
