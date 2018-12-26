import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
    this.state = {value: false};
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          UI
        </Text>
        <Text style={styles.message}>
          switch:{this.state.value ? 'ON':'Off'}
        </Text>
        <Switch value={this.state.value} onValueChange={this.doAction} />
      </View>
    );
  }

  doAction = (value)=>this.setState({value: value});

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
    color: 'black',
    fontSize: 32,
  }
});
