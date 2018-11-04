import React from 'react';
import { AnotherConsumer } from '../contexts/another';
import { fromRenderProps } from 'recompose';
// recompose의 fromRenderProps라는 함수는 Render Props를 사용하는 컴포넌트를 정말 쉽게 HOC로 변화해준다

const Counter = ({ number, increment}) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>더하기</button>
        </div>
    );
};

const enhance = fromRenderProps(AnotherConsumer, ({ state, actions }) => ({
    number: state.number,
    increment: actions.increment
  }));

export default enhance(Counter);


// import React from 'react';
// import { useAnother } from '../contexts/another';

// const Counter = ({ number, increment}) => {
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={increment}>더하기</button>
//         </div>
//     );
// };

// export default useAnother(Counter);
