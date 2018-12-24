import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
    this.state = {message: 'your name', text:''};
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Hello!!</Text>
        <Text style={styles.message}>
          {this.state.message}
        </Text>
        <TextInput
          ref={component => this._textInput = component}
          style={styles.input}
          placeholder="write here..."
          onChangeText={this.doType}
        />
        <Button title="Click" onPress={this.doAction} />
      </View>
    );
  }

  doType = (text) => this.setState({text});

  doAction = ()=>{
    this.setState({Text:'', message:'Hello, ' + this.state.text + '!', });
    this._textInput.setNativeProps({text: ''});
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
  input: {
    padding: 10,
    fontSize: 32,
  },
});
