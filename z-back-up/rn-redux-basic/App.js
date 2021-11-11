import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import allReducer from './src/reducers';

import Home from './src/screens/Home';
import AdminLogin from './src/screens/AdminLogin';
// import AdminDatePicker from './src/screens/AdminDatePicker';
import AdminTicket from './src/screens/AdminTicket';
import AdminEdit from './src/screens/AdminEdit';
import UserLogin from './src/screens/UserLogin';
// import UserDatePicker from './src/screens/UserDatePicker';
import UserTicket from './src/screens/UserTicket';
import UserEdit from './src/screens/UserEdit';
import Register from './src/screens/Register';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    AdminLogin: { screen: AdminLogin },
    // AdminDatePicker: { screen: AdminDatePicker },
    AdminTicket: { screen: AdminTicket },
    AdminEdit: { screen: AdminEdit },
    UserLogin: { screen: UserLogin },
    // UserDatePicker: { screen: UserDatePicker },
    UserTicket: { screen: UserTicket },
    UserEdit: { screen: UserEdit },
    Register: { screen: Register },
},
{
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

const store = createStore(
    allReducer,
    applyMiddleware(thunk),
 )

// export default class App extends Component {
//     render() {
//         return (
//             <AppContainer />
//         );
//     }
// }

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <AppContainer />
            </Provider>
        );
    }
}
