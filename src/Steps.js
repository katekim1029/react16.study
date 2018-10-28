import React, { Component } from 'react';

const Step = ({ children, index, currentIndex }) => {
    // index 가 일치할때만 보입니다.
    if(index !== currentIndex) { return null; }
    return children;
};

class Steps extends Component {
    static Step = Step; // Namespaced 컴포넌트 생성
    state = {
        currentIndex: 0
    };
    handleNext = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        });
    };
    handlePrevious = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        });
    };
    render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <h1>회원가입 창</h1>
                <p>못생겼지만, 회원가입 창입니다.</p>
                <hr />
                <section>
                    {/* 콜백 함수에서 두번째 파라미터는 순서를 가르키는 index 값입니다. 
                        0, 1, 2, 3 이런 값들을 우리가 따로 지정하지 않아도 
                        자동으로 children 순서대로 넣어줍니다. */
                    React.Children.map(this.props.children, (step, i) => 
                        React.cloneElement(step, {
                            index: i,
                            currentIndex
                        })
                    )}
                </section>
                <hr />
                <button
                    disabled={currentIndex === 0}
                    onClick={this.handlePrevious}
                >
                    이전
                </button>
                <button
                    disabled={
                        /* this.props.children && 을 해주는 이유는, 
                        해당 값이 존재 할 때만 length 를 확인하게 하기 위함 입니다.*/
                        currentIndex ===
                        (this.props.children && this.props.children.length - 1)
                    }
                    onClick={this.handleNext}
                >
                    다음
                </button>
            </div>
        );
    }
}

export default Steps;
