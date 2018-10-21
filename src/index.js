import React from 'react';
import { render } from 'react-dom';
import RefSample from './RefSample';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

class App extends React.Component {
    componentDidMount() {
        console.log(this.input);
    }
    render() {
        return <RefSample innerRef={ref => (this.input = ref)} />;
        // innerRef라는 props를 하나 만든것
    }
}

render(<App />, document.getElementById('root'));
