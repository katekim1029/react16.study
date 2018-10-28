import React, { Component } from 'react';

// initialForm : 초기에 컴포넌트가 들고있을 상태 객체를 전달
// resetOnSubmit: submit 이벤트 발생 시 폼을 초기화 유무
const withForm = (initialForm, resetOnSubmit) => (BaseComponent) => {
    return class WithForm extends Component {
        state = initialForm || {};
        // 컴포넌트에서 사용되는 state 는 HOC 를 사용 할 때 전달해줄 initialForm 값을 사용
        handleChange = e => {
            const { name, value } = e.target;
            this.setState({
                [name] : value
            });
        };
    
        handleSubmit = e => {
            e.preventDefault();
            if(this.props.onSubmit) {
                this.props.onSubmit(this.state);
            }
            if(resetOnSubmit) {
                this.setState(initialForm);
            }
        };

        render() {
            return(
                <BaseComponent 
                    {...this.props}
                    form = {this.state}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                // {...this.props} 나중에 우리가 이 함수를 통해 만든 컴포넌트를 사용하게 될 때 자신이 받은 props 를 그대로 BaseComponent 에게 전달
            );
        }
    };
};

export default withForm;

// import React, { Component } from 'react';
// const withSomething = (options) => (BaseComponent) => {
//     return class WithSomething extends Component {
//         render() {
//             return (<BaseComponent {...this.props} somethingExtra={1}/>)
//         }
//     }
// }
// export default withSomething;

// const f = function(y){
//     return function(x){
//         console.log(x,y);
//     }
// };
// const f = y => x => { console.log(x,y); };
// f(2)(1);
