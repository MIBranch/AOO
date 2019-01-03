import React, { Component } from 'react';
import { StyleSheet, Alert, StatusBar, TextInput, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Practice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'menu', color: 'white', size:35,
            onPress:this.doActionLeft
          }}
          centerComponent={{
            text:"SampleApp",
            style:styles.header
          }}
          rightComponent={{
            icon: 'android', color: 'white', size:35,
            onPress:this.doActionRight
          }}
          outerContainerStyles={{
            height:100, backgroundColor: '#dd0000'
          }}
          innerContainerStyles={{
            backgroundColor: '#dd0000'
          }}
        />
        <View style={styles.base}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>This is sample message.</Text>
        </View>
      </View>
    );
  }

  doActionLeft = ()=>{ Alert.alert('Left icon tapped!'); }
  doActionRight = ()=>{ Alert.alert('Right icon tapped!'); }
}

const styles = StyleSheet.create({
  base: {
    padding: 0,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight:'bold',
  },
  title: {
    padding:10,
    color:'red',
    fontSize:48,
  },
  message: {
    padding: 10,
    color:'blue',
    fontSize:24,
  },
});
