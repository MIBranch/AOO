import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import firebase from 'react-native-firebase';

export default class Login extends Component {
  static navigationOptions = {
      header: null
  }
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    console.log('handleLogin');
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>AOO</Text>
          <Text style={styles.subTitle}>近くに友達はいるかな</Text>
        </View>
        <View style={styles.formContainer}>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>
          }
          <TextInput
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="メールアドレス"
            placeholderTextColor='rgba(255,255,255,0.7)'
            style={styles.input}
          />
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="パスワード"
            placeholderTextColor='rgba(255,255,255,0.7)'
            style={styles.input}
          />
          <Button onPress={this.handleLogin}
            title="ログイン"
            color="#FFFFFF">
          </Button>
        </View>
        <View style={styles.formContainer2}>
          <Button onPress={() => this.props.navigation.navigate('SignUp')}
            title="新しいアカウントを作成"
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
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    color: '#fff',
    fontSize: 100,
    padding: 30
  },
  subTitle: {
    color: '#fff',
    fontSize: 15
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
    padding:25,
  },
  underContainer: {
    flex: 1,
    alignItems: 'center',
  },
  team: {
    color: '#fff',
    fontSize: 10,
    padding: 30
  },
});
