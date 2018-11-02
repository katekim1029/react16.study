import React, { Component } from 'react';

// 두번째 방식은 render 라는 이름 대신에 그냥 children 자체를 함수로 전달해주는 것
class MyComponent extends Component {
    render() {
        return this.props.children({ name: 'World' });
    }
}

// 첫번째 방식은 "render" 라는 이름을 가진 props 를 전달하는 것
// class MyComponent extends Component {
//     render() {
//         return this.props.render({ name: 'World' });
//     }
// }

export default MyComponent;
