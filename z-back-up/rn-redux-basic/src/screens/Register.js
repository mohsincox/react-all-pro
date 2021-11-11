import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView, Alert  } from 'react-native';
import { Image, Button, Card, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {

    static navigationOptions = {
        header: null
    }

    state = { name: "", email: "", password: "", password_confirmation: "" }

    checkRegister() {
        const { name, email, password, password_confirmation } = this.state;

        fetch('http://202.51.177.67:8029/rest_api/public/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, email, password, password_confirmation})
        })
        // .then((response) => response.json())
        .then((response) => {
            console.log(response.status);
            if(response.status === 201) {
                this.props.navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Something Wrong!', [{
                    text: 'CLOSE'
                }])
            }
        })
        .then((data) => {
        //   console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });  
    }

    render() {
        return (
            <View  style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <ScrollView>
                        <Card>
                            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 150 }} >
                                <Image 
                                    source={require('./img/logo.png')} 
                                    style={{ width: 148, height: 124 }}
                                />
                            </View>

                            <Input
                                placeholder='  Enter Name'
                                label="Email Address"
                                onChangeText={ text => this.setState({ name: text }) }
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />

                            <Input
                                placeholder='  Enter Email'
                                label="Email Address"
                                onChangeText={ text => this.setState({ email: text }) }
                                leftIcon={
                                    <Icon
                                        name='envelope'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />

                            <Input
                                placeholder='  Enter Password'
                                label="Password"
                                secureTextEntry={true}
                                onChangeText={ text => this.setState({password: text}) }
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />

                            <Input
                                placeholder='  Enter Password'
                                label="Password"
                                secureTextEntry={true}
                                onChangeText={ text => this.setState({password_confirmation: text}) }
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        
                            <Button 
                                icon={
                                    <Icon
                                        name="sign-in"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title="  Register"
                                onPress={_ => this.checkRegister() }
                                buttonStyle={{ margin: 10, marginBottom: 100 }}
                            />
                        </Card>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    //   alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
  });