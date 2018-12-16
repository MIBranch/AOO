import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Practice extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          Wooonmmmmm
        </Text>
        <Text style={styles.subTitle}>
          Welcome to Practice!!
        </Text>
        <Text style={styles.message}>
          少しだけお時間ください。AOO開発のドライバーにしますから。
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  base: {
    padding: 30
  },
  title: {
    padding: 10,
    color:'red',
    textAlign:'center',
    fontSize:60,
    fontWeight:'bold'
  },
  subTitle: {
    padding: 10,
    color:'blue',
    fontSize:20,
    fontWeight:'bold'
  },
  message: {
    padding: 10,
    color:'green',
    fontSize:26,
    fontWeight:'bold'
  }
});
