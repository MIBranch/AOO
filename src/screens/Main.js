import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

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
  render() {
    return(
      <View style={styles.container}>
          <Text>main</Text>
      </View>
    )
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
