import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
}

class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if( nextState.number % 5 ===0) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error) return (<h1>에러발생!  </h1>);
        return (
            <div>
                <h1>Counter</h1>
                <div>Value is {this.state.number}</div>
                { this.state.number === 4 && < Problematic />}
                <button type="button" onClick={this.handleIncrease}>plus</button>
                <button type="button" onClick={this.handleDecrease}>minus</button>
            </div>
        );
    }
}

export default Counter;
