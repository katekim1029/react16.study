import React, { Component } from 'react';

class RefSample extends Component {
    state = {
        height: 0
    };

    input = null;
    box = null;

    handleClick = () => {
        this.input.focus();
    };

    componentDidMount() {
        this.setState({
            height: this.box.clientHeight
            // 렌더링 된 후 div 크기를 알고 싶을 때
        });
    }

    render() {
        return (
            <div>
                <input 
                    ref = {ref => {
                        this.input = ref;
                    }} 
                    // ref에는 함수를 넣어준다 
                    // 함수에서는 this.input이라는 멤버변수에 ref를 넣어줌
                    // render될 때 this.input에 돔이 가르키는 엘레먼트 자체를 넣어준다
                    // 컴포넌트가 마운트 된 이후부터 this.input를 사용할 수 있다
                    // 멤버 변수의 값이 변한다고 해도 컴포넌트가 리렌더링 되지 않는다
                /> 
                {/*<input ref= {this.props.innerRef} />*/}
                <button onClick={this.handleClick}>Focus Input</button>
                <div
                    ref = {ref => {
                        this.box = ref;
                    }}
                >
                    <h2>TITLE</h2>
                    <p>Content</p>
                </div>
                <p>
                    <strong>height:</strong> {this.state.height}
                </p>
            </div>
        );
    }
}

export default RefSample;
