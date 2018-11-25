import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>AOO</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="email"
            placeholderTextColor='rgba(255,255,255,0.7)'
            style={styles.input}
            />
          <TextInput
            placeholder="password"
            placeholderTextColor='rgba(255,255,255,0.7)'
            secureTextEntry
            style={styles.input}
            />

          <Button onPress={() => this.props.navigation.navigate('Main')}
            title="LOGIN"
            color="#FFFFFF"
          >
          </Button>
        </View>
      </View>
    );
  }
}
export default Login;

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
    fontSize: 90
  },
  formContainer: {
    padding: 60
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
