import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

import { createSelector } from 'reselect';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 1500);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    // console.log(this.props)

    return (
      <div className="App">
        <h1>Redux Tutorial</h1>
        <input onChange={this.onUpdateUser} />
        { this.props.user}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Redux Tutorial</h1>
//     </div>
//   );
// }

const mapStateToProps = createSelector(
  state => state.products,
  state => state.user,
  (products, user) => ({
    products,
    user
  })
);;

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

// const mergeProps = (propsFromState, propsFormDispatch, ownProps) => {
//   console.log(propsFromState, propsFormDispatch, ownProps)
//   return {}
// }

export default connect(mapStateToProps, mapActionsToProps) (App);
