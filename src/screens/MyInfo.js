import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class MyInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (<Text style={styles.addTitle}>プロフィール</Text>);
    let headerTitleStyle: {alignSelf:"center"};
    return {headerTitle, headerTitleStyle}
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
          <Text>自分のつぶやき</Text>
          <TextInput
            placeholder="今日は誰かとご飯に行きたい"
            placeholderTextColor='rgba(0,0,255,0.5)'
            style={styles.input}
          />
          <Text>自分のID(登録のeメールアドレス変更)</Text>
          <TextInput
            placeholder="moonjawn@gmail.com"
            placeholderTextColor='rgba(0,0,255,0.5)'
            style={styles.input}
          />
          <Button onPress={() => this.props.navigation.navigate('Login')}
            title="LOGOUT">
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
  input: {
    padding: 5,
    fontSize: 20,
  },
});
