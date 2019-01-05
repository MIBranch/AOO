import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>AOO</Text>
          <Text style={styles.subTitle}>近くに友達はいるかな</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2979FF'
    },
  });
}
