import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
      header: null
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>AOO</Text>
          <Text style={styles.subTitle}>近くに友達はいるかな。</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="メールアドレス"
            placeholderTextColor='rgba(255,255,255,0.7)'
            style={styles.input}
            />
          <TextInput
            placeholder="パスワード"
            placeholderTextColor='rgba(255,255,255,0.7)'
            secureTextEntry
            style={styles.input}
            />

          <Button onPress={() => this.props.navigation.navigate('Main')}
            title="ログイン"
            color="#FFFFFF">
          </Button>
          <Button title="既にアカウントをお持ちの方" onPress={this.doAction}
            color="#FFFFFF">
          </Button>
        </View>
        <View style={styles.underContainer}>
          <Text style={styles.team}>presented by MIB</Text>
        </View>
      </View>
    );
  }

  doAction = ()=>{
    this.message = "新規登録へ";
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2979FF'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    color: '#fff',
    fontSize: 100,
    padding: 40
  },
  subTitle: {
    color: '#fff',
    fontSize: 15
  },
  formContainer: {
    padding: 55
  },
  input: {
    height: 40,
    marginBottom: 20,
    color: 'rgba(255,255,255,0.87)',
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(255,255,255,0.87)',
    borderBottomWidth: 1
  },
  underContainer: {
    alignItems: 'center',
  },
  team: {
    color: '#fff',
    fontSize: 10,
    padding: 30
  },
});
