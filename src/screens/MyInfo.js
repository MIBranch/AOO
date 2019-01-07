import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Icon, Badge} from 'native-base';
import firebase from 'react-native-firebase';

export default class MyInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (<Text style={styles.addTitle}>プロフィール</Text>);
    let headerTitleStyle: {alignSelf:"center"};
    return {headerTitle, headerTitleStyle}
  }
  handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('AuthLoading'))
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>表示名</Text>
        <TextInput
          placeholder="谷口貴也"
          placeholderTextColor='rgba(0,0,255,0.5)'
          style={styles.input}
        />
        <Text></Text>
        <Text>自分のつぶやき</Text>
        <TextInput
          placeholder="今日は誰かとご飯に行きたい"
          placeholderTextColor='rgba(0,0,255,0.5)'
          style={styles.input}
        />
        <Text></Text>
        <Text>自分のID(登録のeメールアドレス変更)</Text>
        <TextInput
          placeholder="moonjawn@gmail.com"
          placeholderTextColor='rgba(0,0,255,0.5)'
          style={styles.input}
        />
        <Text></Text>
        <Button search style={styles.base} onPress={() => alert("更新しました")}>
          <Text>更新</Text>
        </Button>
        <Text></Text>
        <Button search style={styles.goTitle} onPress={this.handleLogOut}>
          <Text>LOGOUT</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    fontSize: 35,
  },
  base: {
    padding: 10,
    color: '#2979FF',
  },
  input: {
    padding: 5,
    fontSize: 20,
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(0,0,255,0.87)',
    borderBottomWidth: 1
  },
  goTitle: {
    padding: 5,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
