import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';

export default class AddFriend extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (<Text style={styles.addTitle}>友達を追加</Text>);
    let headerTitleStyle: {alignSelf:"center"};
    return {headerTitle, headerTitleStyle}
  }
  render() {
    return(
      <View style={styles.container}>
          <Text>自分のID</Text>
          <TextInput
            placeholder="moonjawn@gmail.com"
            placeholderTextColor='rgba(0,0,255,0.5)'
            style={styles.input}
          />
          <Text>友達のIDを検索</Text>
          <TextInput
            placeholder="谷口さんID"
            placeholderTextColor='raba(0,0,255,0.5)'
            style={styles.input}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 5,
    fontSize: 15,
  }
});
