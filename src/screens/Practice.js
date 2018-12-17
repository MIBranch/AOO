import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
    this.title = 'Mooonsaan'
    this.message = '1weekWaite';
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.small} />
        <View style={styles.middle} />
        <View style={styles.large} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 30
  },
  small: {
    width: 200,
    height: 200,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#00aa00',
  },
  middle: {
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#66ff66',
  },
  large: {
    width: 200,
    height: 200,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#ccffcc',
  }
});
