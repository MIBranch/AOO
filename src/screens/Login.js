import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar,
        TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                  <Text style={styles.logo}>AOO</Text>
                  <Text style={styles.title}>近くに友達はいるかな</Text>
                  <Text style={styles.blank}>　</Text>
                </View>
                <View style={styles.infoContainer}>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                    </Text>
                    }
                  <TextInput style={styles.input}
                    /*autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}*/
                    placeholder="メールアドレスを入力してください"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false}
                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                  />
                  <TextInput style={styles.input}
                    secureTextEntry
                    /*autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}*/
                    placeholder="パスワードを入力してください"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType='go'
                    autoCorrect={false}
                    ref={"txtPassword"}
                  />
                  <Button onPress={this.handleLogin}
                    title="ログイン"
                    color= "#FFFFFF">
                  </Button>
                  <Text>　</Text>
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
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2979FF',
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    fontSize: 100,
    padding: 25,
    color: '#fff'
  },
  title: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  blank: {
    fontSize: 200
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 280,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFF',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  formContainer2: {
    left: 0,
    right: 0,
    bottom: 20,
    height: 50,
    padding: 10,
  },
  underContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
    padding: 5,
  },
  team: {
    color: '#fff',
    fontSize: 10,
  },
});
