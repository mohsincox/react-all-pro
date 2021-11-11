import React, { Component } from 'react';
import User from './components/User'

class App extends Component {
    state = {
        users: [
            {name: 'john', age: 20},
            {name: 'peter', age: 30},
            {name: 'jill', age: 40}
        ]
    }

    deleteUser = (index, e) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({users:users})
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <User
                                    age={user.age}
                                    delEvent={this.deleteUser.bind(this, index)}
                                >{user.name}</User>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;