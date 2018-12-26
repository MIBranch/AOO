import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';

export default class Practice extends Component {

  constructor(props) {
    super(props);
    const data = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );
    const items = ['Windows', 'macOS', 'Linux', 'chormeOS'];
    this.state = {
      message:'select me!!',
      dataSource: data.cloneWithRows(items),
    };
  }

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>
          UI
        </Text>
        <Text style={styles.message}>
          {this.state.message}
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  renderRow = (rowData, sectionID, rowID, highlightRow)=>
    <Text style={styles.item}>{rowID}: {rowData}</Text>;

}

const styles = StyleSheet.create({
  base: {
    padding: 25
  },
  title: {
    padding: 10,
    color: 'red',
    fontSize: 60,
  },
  message: {
    padding: 10,
    color: 'black',
    fontSize: 32,
  },
  item: {
    borderStyle:'solid',
    borderWidth:1,
    padding:10,
    margin:5,
    fontSize:24,
    color:'blue',
  }
});
