import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Button, ListItem, Separator, Left, Body, Right, Icon, Modal } from 'native-base';
import firebase from 'react-native-firebase';

export default class ChangeEmail extends Component {
  state = { email: firebase.auth().currentUser.email}
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerTitle = (<Text>Change Email</Text>);
    let headerTitleStyle: {alignSelf:"center"};
    let headerRight = (
      <TouchableHighlight style={styles.headerButton} onPress={() => params.buttonPressed()}>
        <Text style={styles.headerButtonText}>Change</Text>
      </TouchableHighlight>
      );
    return {headerTitle, headerTitleStyle, headerRight}
  }
  reauthenticate = (currentPassword) => {
  var user = firebase.auth().currentUser;
  var cred = firebase.auth.EmailAuthProvider.credential(
      user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
  }
  handleChange = () => {
    firebase
      .auth()
      .currentUser
      .updateEmail(this.state.email)
      .then(() => Alert.alert(
        "更新しました",
        "Back to Main",
        [
          {text: '確認', onPress: () => this.props.navigation.navigate('Main')},
        ]
      ))
  }
  componentDidMount() {
    this.props.navigation.setParams({
      buttonPressed: this.handleChange,
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <ListItem>
          <Body>
            <TextInput
              placeholder={firebase.auth().currentUser.email}
              placeholderTextColor='rgba(0,0,255,0.5)'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              style={styles.input}
            />
          </Body>
        </ListItem>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  headerButton: {
    padding: 10,
  },
});
