import React from 'react';
import { withStateHandlers } from 'recompose';

const Counter = ({ value, increment, decrement, reset }) => {
    return (        
        <div>
            <h1>{ value }</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>초기화</button>
        </div>
    );
};

const enhance = withStateHandlers(
    { value: 0 },
    {
        increment: ({ value }) => () => ({ value: value + 1 }),
        decrement: ({ value }) => () => ({ value: value - 1 }),
        reset: ({ value }) => () => ({ value: 0 })
    }
);

export default enhance(Counter);


// withState & withHandlers
// import React from 'react';
// import { compose, withState, withHandlers } from 'recompose';

// const Counter = ({ value, increment, decrement, reset }) => {
//     return (        
//         <div>
//             <h1>{ value }</h1>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>초기화</button>
//         </div>
//     );
// };

// const enhance = compose(
//     withState('value', 'setValue', 0),
//     withHandlers({
//         increment: props => () => props.setValue(props.value + 1),
//         decrement: props => () => props.setValue(props.value - 1),
//         reset: props => () => props.setValue(0)
//     })
// );

// export default enhance(Counter);
 
// export default withState('value', 'setValue', 0)(
//     withHandlers({
//         increment: props => () => props.setValue(props.value + 1),
//         decrement: props => () => props.setValue(props.value - 1),
//         reset: props => () => props.setValue(0)
//     })(Counter)
// );


// withState
// import React from 'react';
// import { withState } from 'recompose';

// const Counter = ({ value, setValue }) => {
//     return (
//         <div>
//             <h1>{ value }</h1>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>
//             <button onClick={() => setValue(0)}>초기화</button>
//         </div>
//     );
// };

// export default withState('value', 'setValue', 0)(Counter);
