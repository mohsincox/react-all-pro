import React, { Component } from 'react';

class Child extends Component {

    constructor() {
        super();
        this.state = {
            name: 'john child'
        }
        console.log('child constructor');
    }

    componentWillMount() {
        if(window.innerWidth < 600) {
            this.setState({innerWidth:window.innerWidth});
        }
        console.log('child componentWillMount');
    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('child shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('child componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('child prevProps', prevProps);
        console.log('child prevState', prevState);
        console.log('child componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }

    render() {
        console.log('child render')
        return (
            <div>
                <h3>Child Name: {this.props.name}</h3>
                <h3>Child Name Local: {this.state.name}</h3>
            </div>
        );
    }
}

export default Child;