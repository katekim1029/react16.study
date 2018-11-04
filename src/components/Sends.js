import React, { Component } from 'react';
import { useSample } from '../contexts/sample';

class Sends extends Component {
    state = {
        input: ''
    };

    componentDidMount() {
        // :: 초기 값 설정
        this.setState({
            input: this.props.value
        })
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        // :: props로 받은 setValue 호출
        this.props.setValue(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">설정</button>
            </form>
        );
    }
}

// HOC useSample 사용
export default useSample(Sends);


// import { SampleConsumer } from '../contexts/sample';

// actions는 handleSubmit에서 사용해야 하는데 Render Props는 JSX단에서 사용하는 거라서 방법이 없다 그래서 SendsContainer라는 컴포넌트를 만들어서 Sends에게 value와 setValue를 props로 넣어줌

// :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//     <SampleConsumer>
//         {({ state, actions }) => (
//             <Sends
//                 value = { state.value }
//                 setValue = { actions.setValue }
//             />
//         )}
//     </SampleConsumer>
// );

// :: Sends 대신에 SendsContainer 를 내보내줌
// export default SendsContainer;
