import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

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
          <Button onPress={() => this.props.navigation.navigate('Main')}
            title="既にアカウントをお持ちの方"
            color="#FFFFFF">
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Practice')}
            title="練習用（後で削除）"
            color="#FFFFFF">
          </Button>
        </View>
        <View style={styles.underContainer}>
          <Text style={styles.team}>presented by MIB</Text>
        </View>
      </View>

      //FormComponent上手くいかず。。
      //多分headerがnullとなっているから
          //<FormLabel labelStyle={{fontSize:24}}>メールアドレス</FormLabel>
          //<FormInput inputStyle={{fontSize:24}}
            //onChangeText={(value)=>this.setState({mail:value})}
            ///>
          //<FormLabel labelStyle={{fontSize:24}}>パスワード</FormLabel>
          //<FormInput inputStyle={{fontSize:24}}
            //onChangeText={(value)=>this.setState({pass:value})}
            ///>
          //<FormValidationMessage labelStyle={{fontSize:18}}>
            //{this.state.mail == '' ? 'type your mail...':''}
          //</FormValidationMessage>
          //<FormValidationMessage labelStyle={{fontSize:18}}>
            //{this.state.pass == '' ? 'type your pass...':''}
          //</FormValidationMessage>
          //<Button onPress={() => this.props.navigation.navigate('Main')}
            //title="ログイン"
            //color="#FFFFFF">
          //</Button>
          //<Button onPress={() => this.props.navigation.navigate('Main')}
            //title="既にアカウントをお持ちの方"
            //color="#FFFFFF">
          //</Button>
          //<Button onPress={() => this.props.navigation.navigate('Practice')}
            //title="練習用（後で削除）"
            //color="#FFFFFF">
          //</Button>
        //</View>

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
