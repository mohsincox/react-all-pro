import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import * as actionCreator from "./actions/RegistrationAction/RegistrationAction"

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

        console.log(this.state)

        this.props.onAddPost(this.state);

        /*
        const formData = new FormData(event.target);

        const options   = {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
            }
        };

        axios.post(`http://localhost/blog6/public/api/product/store`, formData, options )
        .then((res) => {
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers);
            console.log(res.config);
          }, (error) => {
            console.log(error);
          });

          */
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
        );
    }
}

// export default App;

const mapStateToProps = state => {
   console.log(state.registrationReducer);
   return {
      registration_info:state.registrationReducer,
   };
 };

 const mapDispachToProps = dispatch => {
   return {
      onAddPost: (props) => dispatch(actionCreator.userRegistration(props))
   };
};
 

export default connect(
   mapStateToProps,
   mapDispachToProps
 )(App);