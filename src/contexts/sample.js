import React, { Component, createContext } from 'react';

const SampleContext = createContext(); // Context 를 만듭니다.
// createContext()는 Context를 만들어주는 함수

// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
// Consumer 는 나중에 내보내줄 때 편하도록 SampleConsumer 라고 부르도록 설정했습니다.
const { Provider, Consumer: SampleConsumer } = SampleContext;

// const { Consumer, Provider } = SampleContext;
// const Consumer = SampleContext.Consumer;
// const Provider = SampleContext.Provider;
// const { Consumer: SampleConsumer, Provider } = SampleContext;
// const SampleConsumer = SampleContext.Consumer;

// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class SampleProvider extends Component {
    state = {
        value: '기본값입니다'
    }

    // 여기서 actions 라는 객체는 우리가 임의로 설정하는 객체입니다.
    // 나중에 변화를 일으키는 함수들을 전달해줄때, 함수 하나하나 일일히 전달하는 것이 아니라,
    // 객체 하나로 한꺼번에 전달하기 위함입니다.
    // 상태에 변화를 주는것
    actions = {
        setValue: (value) => {
            this.setState({ value });
        }
    }

    render() {
        const { state, actions } = this;
        // Provider 내에서 사용할 값은, "value" 라고 부릅니다.
        // 현재 컴포넌트의 state 와 actions 객체를 넣은 객체를 만들어서,
        // Provider 의 value 값으로 사용하겠습니다.

        const value = { state, actions };
        // const state = this.state;
        // const actions = this.actions;
        // const value = { state: state, actions: actions }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

// :: HoC 를 사용
function useSample(WrappedComponent) {
    return function UseSample(props) {
        return (
            <SampleConsumer>
                {({ state, actions }) => (
                    <WrappedComponent
                        value = { state.value }
                        setValue = { actions.setValue }
                    />
                )}
            </SampleConsumer>
            // Sends.js의 SendsContainer랑 했던 작업과 동일한 작업
        )
    }
}

// 내보내줍니다.
export {
    SampleProvider,
    SampleConsumer,
    useSample
};

// Context 는 여러개를 만들 수가 있습니다. 여러개의 Context 를 사용 할 때 이름이 겹치지 않고 쉽게 다루기 위해서 위와 같이 Provider 와 Consumer 앞에 prefix 를 설정해주었습니다


// provider & consumer 모두 컴포넌트
// provider에 기능을 추가해주기 위해서 SampleProvider 컴포넌트 만듬
// class SampleProvider extends Component {
//     render() {
//         return (<Provider value={5} />);    
//     }
// }
// 특정 값을 받아오는 역할 render props를 사용
// <SampleConsumer>
//     { number => ... }
// </SampleConsumer>
