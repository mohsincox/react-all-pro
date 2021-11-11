import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
            {name:"John", age:20},
            {name:"Jill", age:30},
            {name:"Peter", age:40},
        ],
        title:"Users ListZZ"
    };

    makeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        });

        console.log(this.state.users)
        // setState effect, age:10,20,30
    }

	render(){
		return (
			<div>
                <button onClick={this.makeYounger}>Make Younger</button>
                <br/>
				<h1>{this.props.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>
                    })
                }
			</div>
		)
	}
}

export default Users