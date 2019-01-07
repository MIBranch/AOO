import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { List, ListItem } from 'native-base';

import data from '../dummy/FriendList.json';
import Friend from '../models/Friend';

export default class Main extends Component {
  constructor() {
    super();
    this.state={
      data: [],
      status: '時間あり'
    }
  }
  static navigationOptions = ({ navigation }) => {
      let headerLeft = (
        <Dropdown
          value= '時間あり'
          data= {status}
        />
      );
      let headerTitle = (
        <TouchableHighlight style={styles.headerButton} onPress={() => navigation.navigate('MyInfo')}>
          <Text style={styles.headerButtonText}>自分の名前</Text>
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
      <View style={styles.base}>
        <List>
          <FlatList
            data={friendList}
            renderItem={({ item }) =>
              <View style={styles.container}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <Text>{item.name}</Text>
                  <Text>{item.distance}</Text>
                  <Text>{item.status}</Text>
                  <Text>{item.message}</Text>
                </View>
              </View>
            }
          />
        </List>
      </View>
    );
  }
}

const status = [
  // in here just for little while
  { value: '時間あり' },
  { value: 'もう少し' },
  { value: '今は厳しい' },
  { value: '位置を隠す' }
];

const styles = StyleSheet.create({
  base: {
    flex: 1,
    padding: 0,
  },
  container: {
    flex: 1,
    padding: 5,
    fontSize: 20,
    borderStyle:'solid',
    borderWidth: 0.3,
  },
  headerButton: {
    padding: 10,
  },
  headerButtonText: {
    color: "#000000",
  },
});
