import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

class Counter extends Component {
   render() {
      const {counter,increment} = this.props;
      return (
         <div style={{ textAlign: 'center' }}>
         <div>Name: {counter.name}</div>
         <div>Address: {counter.address}</div>
            <div>
               <button onClick = {increment}>Click Here</button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);