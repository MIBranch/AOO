import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
      let headerLeft = (<Text style={styles.headerButton}>時間あり</Text>); //(<Button title="時間あり"></Button>);
      let headerTitle = "谷口　貴也" //(<Button title="谷口　貴也"></Button>);
      let headerTitleStyle: { alignSelf:"center" };
      let headerRight = (<Text style={styles.headerButton}>＋</Text>); //(<Button title="＋"></Button>);

      return { headerTitle, headerTitleStyle, headerLeft, headerRight }
  }
  render() {
    return(
      <View style={styles.container}>
          <Text>Main</Text>
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
    color: "#000000",
  },
});
