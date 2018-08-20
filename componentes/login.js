import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput } from 'react-native';
class login extends Component {
  render() {
    return <View style={{flex: 1,flexDirection: 'column',backgroundColor: 'powderblue'}}>
                <Text style={styles.title}>WHATSCHAT</Text>
                <Text style={styles.loginText}>Seu numero</Text>

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
        color: 'steelblue',
        textAlign: 'center',
        

    },
    loginText:{
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
        textAlign: 'center',

    }
});
export default login;