import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet, Image } from 'react-native';

class AdminLogin extends Component {

    static navigationOptions = {
        header: null
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent: 'center', alignItems: 'center'}} >
                    <Image source={require('./img/igloo.jpg')} />
                </View>
                <Text style={{ fontSize: 20 }}>You have logged in</Text>
            </View>
        )
    }
}

export default AdminLogin

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
});