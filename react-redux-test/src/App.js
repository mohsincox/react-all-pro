import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePagination } from './actions/InsertDataAction/InsertDataAction'

class App extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
  
    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state);
       this.props.dispatch( changePagination(this.state))

    }

    render() {

      
        

        return (
            <div>
                <p>{this.props.age}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter username</label>
                    <input id="username" name="username" type="text" onChange={ this.handleInputChange } />
   
                    <label htmlFor="email">Enter your email</label>
                    <input id="email" name="email" type="email" onChange={ this.handleInputChange } />
   
                    <label htmlFor="birthdate">Enter your birth date</label>
                    <input id="birthdate" name="birthdate" type="text" onChange={ this.handleInputChange } />
   
                    <button>Send data!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  
    // insert_data_info:state.insertDataReducer,
    change_pagination: state.insertDataReducer,
    
});
 

  
 
export default connect(mapStateToProps)(App);