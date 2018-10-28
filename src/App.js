import React, { Component } from 'react';
import { withStateHandlers } from 'recompose';

import Counter from './Counter';
import Form from './Form';
import List from './List';

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <hr />
                <Form onAdd={this.props.addToList} />
                <List list={this.props.list} />
            </div>
        );
    }
}

const enhance = withStateHandlers(
    { list: [] },
    {
        addToList: state => data => ({
            list: state.list.concat(data)
        })
    }
);

export default enhance(App);
