
import React, { Component } from 'react'
import axios from 'axios'

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addNinja(this.state);
    console.log(this.state);


    // fetch('http://192.168.100.83/blog6/public/api/product/store', {
    //         method: 'POST',
    //         headers: {
    //             // 'Accept': 'application/json',
    //             // 'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "name": this.state.name,
    //             "age": this.state.age,
    //         }),
    //     })



    // axios.post('http://192.168.100.83/blog6/public/api/product/store', {
    //   name: this.state.name,
    //   age: this.state.age,
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


    axios({
      method: 'post',
      url: 'http://192.168.100.83/blog6/public/api/product/store',
      data: {
        name: this.state.name,
      age: this.state.age,
      }
    });
        

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="belt">Belt:</label>
          <input type="text"id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja