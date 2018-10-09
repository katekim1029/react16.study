import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
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

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value is {this.state.number}</div>
                <button type="button" onClick={this.handleIncrease}>plus</button>
                <button type="button" onClick={this.handleDecrease}>minus</button>
            </div>
        );
    }
}

export default Counter;
