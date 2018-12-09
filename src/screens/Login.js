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
            title="LOGIN"
            color="#FFFFFF">
          </Button>
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
});
