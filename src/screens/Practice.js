import React, { Component } from 'react';
import { StyleSheet, Picker, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
    this.state = {message:'select me!'};
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          UI
        </Text>
        <Text style={styles.message}>
          {this.state.message}
        </Text>
        <Picker prompt={'Select item:'}
          selectedValue={this.state.value}
          onValueChange={this.doAction}>
          <Picker.Item label="Windows" value="Windows" />
          <Picker.Item label="Mac" value="macOS" />
          <Picker.Item label="Linux" value="Linux" />
          <Picker.Item label="ChromeBook" value="ChromeOS" />
        </Picker>
      </View>
    );
  }

  doAction = (itemValue, itemIndex)=>
    this.setState({value: itemValue, message:'select: "' + itemValue + '".'})

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
