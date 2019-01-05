import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

export default class Login extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>AOOに登録しよう！！</Text>
          <Text style={styles.subTitle}>以下の入力をするだけで簡単に登録出来ます。</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={{
            flexDirextion: 'colum',
            justifycontent: 'center',
          }}>
            <TextInput
              placeholder="アカウント名"
              placeholderTextColor='rgba(255,255,255,0.7)'
              style={styles.input}
              />
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
          </View>
          <Button onPress={() => this.props.navigation.navigate('App')}
            title="登録"
            color="#FFFFFF">
          </Button>
        </View>
        <View style={styles.formContainer2}>
          <Button onPress={()=> this.props.navigation.navigate('Login')}
            title="既にアカウントをお持ちの方"
            color="#FFFFFF">
          </Button>
        </View>
        <View style={styles.underContainer}>
          <Text style={styles.team}>presented by MIB</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2979FF'
  },
  logoContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    color: '#fff',
    fontSize: 30,
    padding: 30
  },
  subTitle: {
    color: '#fff',
    fontSize: 13
  },
  formContainer: {
    flex: 2,
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
  formContainer2: {
    flex: 1,
    fontSize: 20,
    padding: 30
  },
  underContainer: {
    flex: 0.5,
    alignItems: 'center',
    height: 20
  },
  team: {
    color: '#fff',
    fontSize: 10,
    padding: 30
  },
});
