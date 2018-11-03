import React from 'react';
import { AnotherConsumer } from '../contexts/another';
import { fromRenderProps } from 'recompose';

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
