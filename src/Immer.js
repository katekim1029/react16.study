import React, { Component } from 'react';
import produce from 'immer';

class App extends Component {
    id = 0;
    state = {
        counter: 0,
        textList: {
            input: '',
            list: [
                {
                    id: 0,
                    text: '안녕하세요'
                }
            ]
        }
    };
    handleClick = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        // this.setState(state => ({
        //     counter: state.counter + 1
        // }));
        // this.setState(
        //     produce(this.state, draft => {
        //         draft.counter++;
        //     })
        // );
        this.setState(
            produce(draft => {
                draft.counter++;
            })
        );
    };

    handleChange = e => {
        e.persist(); // 하단에 있는 콜백에서 e를 계속 사용 할 수 있도록 해줍니다
        // this.setState({
        //     textList: {
        //         ...this.state.textList,
        //         input: e.target.value
        //     }
        // });
        this.setState(
            produce(draft => {
              draft.textList.input = e.target.value;
            })
        );
    };

    handleKeyPress = e => {
        if (e.key !== 'Enter') return;
        // this.setState({
        //     textList: {
        //         input: '',
        //         list: this.state.textList.list.concat({
        //             id: ++this.id, // 추가 할 때마다 기존 id 에 1 더해서 설정
        //             text: this.state.textList.input
        //         })
        //     }
        // });
        this.setState(
            produce(draft => {
                draft.textList.input = '';
                draft.textList.list.push({
                    id: ++this.id,
                    text: this.state.textList.input
                });
            })
        );
    };

    render() {
        return (
            <div>
                <h2>카운터</h2>
                <h3>{this.state.counter}</h3>
                <button onClick={this.handleClick}>+1</button>
                <hr />
                <h2>텍스트박스와 리스트</h2>
                <input
                    value={this.state.textList.input}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <ul>
                {this.state.textList.list.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
                </ul>
            </div>
        );
    }
}

export default App;

// import React, { Component } from 'react';
// import SassComponent from './SassComponent';
// import CSSModule from './CSSModule';
// import StyledComponent from './StyledComponent';

// class App extends Component {
//     render() {
//         return <StyledComponent />;
//     }
// }

// export default App;
