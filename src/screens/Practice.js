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
});
