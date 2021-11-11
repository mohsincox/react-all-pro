import React, { Component } from 'react';
import axios from 'axios';
import { View, TextInput, Text, Button, Alert, StyleSheet, Image } from 'react-native';

import { connect } from 'react-redux';
import * as actionCreator from '../actions/InsertDataAction/InsertDataAction';

class UserLogin extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = { username: "", email: "" }

    checkLogin() {
        const { username, email } = this.state;

        console.log(this.state);
        
        this.props.onAddPost(this.state);

        /* Working */

        // fetch('http://192.168.100.83/blog6/public/api/product/store', { 
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({username,email})
        // })
        // .then(res => {
        //     return res.text()
        // })
        // .then(res => {
        //     if(res === '1') {
        //         this.props.navigation.navigate('AdminLogin')
        //     } else {
        //         Alert.alert('Error', 'Username/Password mismatch', [{
        //             text: 'CLOSE'
        //         }])
        //     }
        // })


        /* Working */

        // fetch('http://192.168.100.83/blog6/public/api/product/store', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({username,email})
        // });


        /* Working */

        // const options   = {
        //     headers: {
        //         'Content-Type': "application/json",
        //         'Accept': "application/json",
        //     }
        // };

        // axios.post(`http://192.168.100.83/blog6/public/api/product/store`, JSON.stringify({username,email}), options )
        // .then((res) => {
        //     // console.log(res);
        //     console.log(res.data);
        //     console.log(res.status);
        //     console.log(res.statusText);
        //     console.log(res.headers);
        //     console.log(res.config);
        //   }, (error) => {
        //     console.log(error);
        //   });
        
    }

    render() {
        return (
            <View style={styles.parent}>
                <View style={{justifyContent: 'center', alignItems: 'center'}} >
                    <Image source={require('./img/logo.png')} />
                </View>
                <Text style={styles.heading}>User Login into the App</Text>
                <TextInput style={styles.input} placeholder="Username" onChangeText={ text => this.setState({ username: text })}/>
                <TextInput style={styles.input} placeholder="Password" onChangeText={ text => this.setState({email: text}) } />
                <View style={{margin:10}}>
                    <Button title={"Login"} onPress={_ => this.checkLogin() }/>
                </View>
            </View>
        )
    }
}

// export default UserLogin

const mapStateToProps = state => {
    console.log(state.insertDataReducer);
    return {
       insert_data_info:state.insertDataReducer,
    };
};
 
const mapDispachToProps = dispatch => {
    return {
        onAddPost: (props) => dispatch(actionCreator.insertData(props))
    };
};
  
 
export default connect(
    mapStateToProps,
    mapDispachToProps
)(UserLogin);



const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center'
    },
    input: {
        marginLeft: 20,
        marginRight: 20
    },
    parent: {
        flex: 1,
        justifyContent: 'center'
    }
})