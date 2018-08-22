import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput,TouchableOpacity } from 'react-native';
class login extends Component {
    state = {
        numero: '',
    };
    
    onChangeText = numero => this.setState({numero});
    onPress = () =>{
        this.props.navigation.navigate('Main', {numero: this.state.numero});
    }

  render() {
    return <View style={{flex: 1,flexDirection: 'column',backgroundColor: 'powderblue'}}>
                <Text style={styles.title}>WHATSCHAT</Text>
                <Text style={styles.loginText}>Seu numero</Text>
                <TextInput
                style={styles.Input}
                placeHolder='+55 85 9 9999-9999'
                onChangeText ={this.onChangeText}
                value={this.state.numero}
                />
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
                    

                

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
        color: 'steelblue',

    },
    Input:{
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        //width: '50',
        //borderWidth: 1,
        color: 'steelblue',
        textAlign: 'center',
    },
    buttonText: {
        marginLeft: offset,
        fontSize: offset,
        color: 'steelblue',
        textAlign: 'center',
    }
});
export default login;