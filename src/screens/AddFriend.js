import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class AddFriend extends Component {
  render() {
    return(
      <View style={styles.container}>
          <Text>AddFriend</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
