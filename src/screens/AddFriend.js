import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight} from 'react-native';
import {Button, Form, Item, Label, Input, Icon, Badge} from 'native-base';

export default class AddFriend extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = (<Text style={styles.addTitle}>友達を追加</Text>);
    let headerTitleStyle: {alignSelf:"center"};
    return {headerTitle, headerTitleStyle}
  }
  render() {
    return(
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>自分のID</Text>
          <Item rounded>
            <Input placeholder='moonjawn@gmail.com' />
          </Item>
        <Form>
          <Item floatingLabel style={styles.input}>
            <Label>友達のIDを検索</Label>
            <Input />
          </Item>
        </Form>
        <Text></Text>
        <Text></Text>
        <View style={styles.button}>
          <Button rounded search style={styles.base} onPress={() => alert("not found")}>
            <Badge primary>
            <Icon name="search" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
            </Badge>
            <Text>検索</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 5,
    fontSize: 20,
  },
  input: {
    padding: 5,
    margin: 30,
    fontSize: 20,
    color: "#000000",
    paddingHorizontal: 10,
    borderBottomColor: 'rgba(0,0,255,0.87)',
    borderBottomWidth: 1
  },
  button: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    padding: 10,
    color: '#2979FF',
  }
});
