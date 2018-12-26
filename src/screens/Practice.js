import React, { Component } from 'react';
import { StyleSheet, FlatList, StatusBar, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Practice extends Component {
  items = [
    {key:'Windows'},
    {key:'macOS'},
    {key:'Linux'},
    {key:'chrome0S'},
    {key:'Fucsia'},
  ] ;

  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#008080', true);
  }

  render() {
    return (
      <View style={styles.base}>
        <Header
          centerComponent={{
            text:"SampleApp",
            style:styles.header
          }}
          outerContainerStyles={{
            height:100, backgroundColor: '#dd0000'
          }}
        />
        <View style={styles.body}>
          <Text style={styles.title}>
            Layout
          </Text>
          <FlatList
            data={this.items}
            renderItem={this.getItem}
          />
        </View>
      </View>
    );
  }

  getItem = ({item}) =>
    <Text style={styles.item}>
      {item.key}
    </Text>

}

const styles = StyleSheet.create({
  base: {
    padding: 0,
    flex:1,
  },
  body: {
    padding: 10,
    flex:1,
  },
  header: {
    color: 'white',
    fontSize: 32,
    fontWeight:'bold',
  },
  title: {
    padding:10,
    color:'blue',
    fontSize:48,
  },
  item: {
    margin:5,
    fontSize:24,
  }
});
