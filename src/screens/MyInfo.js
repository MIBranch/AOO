import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, ListItem, Separator, Left, Body, Right, Icon } from 'native-base';
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
        <ListItem onPress={() => this.props.navigation.navigate('ChangeName')}>
          <Left>
            <Text>表示名</Text>
          </Left>
          <Body>
            <Text>{firebase.auth().currentUser.displayName}</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>自分のつぶやき</Text>
        </Left>
        <Body>
          <TextInput
            placeholder="今日は誰かとご飯に行きたい"
            placeholderTextColor='rgba(0,0,255,0.5)'
            style={styles.input}
          />
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Eメールアドレス</Text>
        </Left>
        <Body>
          <TextInput
            placeholder={firebase.auth().currentUser.email}
            placeholderTextColor='rgba(0,0,255,0.5)'
            style={styles.input}
          />
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
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
    fontSize: 35,
  },
  base: {
    padding: 10,
    color: '#2979FF',
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  goTitle: {
    padding: 5,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
