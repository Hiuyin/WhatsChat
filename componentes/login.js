import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput } from 'react-native';
class login extends Component {
  render() {
    return <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{backgroundColor: 'powderblue'}} />
                
                
                <Text style={styles.title}>WHATSCHAT</Text>
                

           </View>;
  }
}
const offset = 24;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset*1.5,
        fontWeight: 'bold',
        color: 'blue',
        fontFamily: 'https://fonts.googleapis.com/css?family=Open+Sans',

    }
});
export default login;