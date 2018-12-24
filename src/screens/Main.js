import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements'

import data from '../dummy/FriendList.json';
import Friend from '../models/Friend';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
      let headerLeft = (
        <Text style={styles.headerButton}>時間あり</Text>
        );
      let headerTitle = (
        <TouchableHighlight style={styles.headerButton} onPress={() => navigation.navigate('MyInfo')}>
          <Text style={styles.headerButtonText}>谷口　貴也</Text>
        </TouchableHighlight>
        );
      let headerTitleStyle: { alignSelf:"center" };
      let headerRight = (
        <TouchableHighlight style={styles.headerButton} onPress={() => navigation.navigate('AddFriend')}>
          <Text style={styles.headerButtonText}>＋</Text>
        </TouchableHighlight>
        );

      return { headerTitle, headerTitleStyle, headerLeft, headerRight }
  }
  constructor() {
    super();
    this.state={
      data: []
    }
  }

  render() {
    var friendList = [];
    for(var i = 0; i < data.friend.length; i++) {
      var item = data.friend[i];
      var friend = new Friend();
      friend.name = item.name;
      friend.distance = item.distance;
      friend.status = item.status;
      friend.message = item.message;

      friendList.push(friend)
    }
    return(
      <View style={styles.container}>
        <List>
          <FlatList
            data={friendList}
            renderItem={({ item }) =>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.distance}</Text>
                <Text>{item.status}</Text>
                <Text>{item.message}</Text>
              </View>
            }
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    padding: 20,
  },
  headerButtonText: {
    color: "#000000",
  },
});
